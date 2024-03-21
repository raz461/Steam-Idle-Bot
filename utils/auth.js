const SteamUser = require('steam-user');
const config = require('../config.json');
const user = new SteamUser();

const personaStates = {
    1: SteamUser.EPersonaState.Online,
    2: SteamUser.EPersonaState.Offline,
    3: SteamUser.EPersonaState.Busy,
};

exports.user = user;

exports.login = (username, password) => {
    return new Promise((resolve, reject) => {
        user.logOn({
            accountName: username,
            password: password,
        });

        user.once('loggedOn', () => {
            console.log('Logged on to Steam');

            const personaState = personaStates[config.status] || SteamUser.EPersonaState.Online;
            user.setPersona(personaState);
            if (config.playing) {
                user.gamesPlayed(config.playing);
            }

            resolve();
        });

        user.once('error', (err) => {
            console.error('Error logging in:', err);
            reject(err);
        });
    });
};