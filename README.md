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

Before you start, make sure to configure your bot by editing the `config.json` file. Below is a detailed description of each configuration option:

- `username`: Your Steam username. This is required for the bot to log in.
- `password`: Your Steam password. This is required for the bot to log in.
- `mainSteamID`: Your main Steam ID. This is used to identify the owner of the bot. Only this Steam ID will have the privilege to use commands if privacy is set to "private".
- `webhook`: Your webhook URL. This can be used to send notifications to a Discord channel or other services.
- `privacy`: This can be set to "public" or "private". If set to "private", only the `mainSteamID` will be able to use the bot commands.
- `commands`: This object lists all the available commands and whether they are enabled (`true`) or disabled (`false`).
  - `help`: Enables or disables the help command.
  - `status`: Enables or disables the status command.
  - `uptime`: Enables or disables the uptime command.
  - `welcome`: Enables or disables the welcome command.
- `status`: This can be set to different values to represent the bot's status (e.g., 1 for Online, 2 for Busy, etc.).
- `idling`: Set this to `true` to enable game idling, or `false` to disable it.
- `games`: An array of game IDs. These are the games that the bot will idle in if idling is enabled.

Make sure to replace each placeholder with your actual data. Here's an example of what your `config.json` might look like:

```js
{
    "username": "your_steam_username",
    "password": "your_steam_password",
    "mainSteamID": "your_main_steam_id",
    "webhook": "your_webhook_url",
    "privacy": "public",
    "commands": {
        "help": true,
        "status": true,
        "uptime": true,
        "welcome": true
    },
    "status": 1,
    "idling": true,
    "games": [730, 570, 440],
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
