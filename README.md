# Steam Idle Bot

This Steam bot is designed to perform various tasks, including responding to specific commands and idling in specified games to accumulate playtime. It's built using Node.js.

Please note that this bot is still under development and may contain bugs or issues. I am still learning and improving.

## Getting Started

To get started with the Steam Idle Bot, follow these steps:

1. Clone the repository: `git clone https://github.com/raz461/Steam-Idle-Bot.git`
2. Install the dependencies: `npm install`
3. Configure your bot by editing the `config.json` file (see Configuration section below).
4. Run the bot: `npm run start`

## Features

- Command handling: Respond to predefined commands such as `!status`, `!ping`, and `!help`.
- Game idling: Accumulate playtime in specified Steam games.
- Configurable: Easy to customize commands and idling behavior through `config.json`.

## Configuration

Before you start, make sure to configure your bot by editing the `config.json` file. Here's an example of what your `config.json` might look like:

```js
{
    "username": "your_steam_username", // The username of your Steam account.
    "password": "your_steam_password", // The password of your Steam account.
    "mainSteamID": "your_main_steam_id", // Your SteamID64, used to identify if commands come from the bot owner.
    "webhook": "your_webhook_url", // URL to a webhook for sending notifications (optional).
    "privacy": "public", // Can be "public" or "private". Controls who can send commands to the bot. If "private", only the mainSteamID can send commands.
    "commands": { // Enables or disables specific commands.
        "help": true, // Enable/disable the help command.
        "status": true, // Enable/disable the status command.
        "uptime": true, // Enable/disable the uptime command.
        "welcome": true // Enable/disable the welcome command.
    },
    "status": 1, // Sets the bot's online status. 1 for Online, 2 for Busy, 3 for Away, etc.
    "idling": true, // Enables or disables game idling feature.
    "games": [730, 570, 440], // List of game IDs the bot will idle on if idling is enabled.
}
```

## Adding New Commands
To add a new command, create a .js file in the commands directory. The file should export an object with name, description, and execute function. Here's an example template:
```js
module.exports = {
    name: 'commandName',
    description: 'Description of what this command does.',
    execute(user, args, steamID) {
        // Implementation of the command
    },
};
```

## Note
This bot is for educational and entertainment purposes only. [STEAM TOS](https://store.steampowered.com/eula/471710_eula_0)
