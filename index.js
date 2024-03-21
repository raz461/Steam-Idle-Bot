const fs = require('fs');
const config = require('./config.json');
const { login, user } = require('./utils/auth');
const log = require('./utils/logger');

const commands = new Map();

fs.readdirSync('./commands').filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
});

login(config.username, config.password)
    .then(() => {
        console.log('Successful login to Steam');
        log.log('Steam', `Successful login into **${config.username}**`, 'green');
        if (config.idling === true) {

            if (Array.isArray(config.games) && config.games.length > 0) {
                user.gamesPlayed(config.games);
                console.log(`Idling in games with IDs: ${config.games.join(', ')}`);
                log.log('Steam', `Idling in games with IDs: ${config.games.join(', ')}`, 'blue');
            } else {
                console.log('No games configured for idling.');
                log.log('Steam', `No games configured for idling.`, 'red');
            }
        }

        user.on('friendMessage', function (steamID, message) {
            if (message.startsWith('!')) {
                const args = message.slice(1).split(' ');
                const commandName = args.shift().toLowerCase();

                if (config.privacy === "public" || steamID.getSteamID64() === config.mainSteamID) {
                    handleCommand(user, commandName, args, steamID);
                } else {
                    log.log('Steam', `Message from unauthorized user: ${steamID.getSteamID64()}`, 'yellow');
                }
            }
        });

    })
    .catch(err => {
        console.error('Error logging in:', err);
        log.log('Steam', `Error logging in ${err}`, 'red');
    });

function handleCommand(user, commandName, args, steamID) {
    if (config.commands[commandName] === false) {
        console.log(`The command ${commandName} is disabled.`);
        return;
    }
    const command = commands.get(commandName);
    if (!command) {
        console.log(`Command not found: ${commandName}`);
        return;
    }

    try {
        command.execute(user, args, steamID);
    } catch (error) {
        console.error(`Error executing command ${commandName}:`, error);
        log.log('Steam', `Error executing command ${commandName}: ${error}`, 'red');
    }
}

