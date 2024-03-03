module.exports = {
    name: 'help',
    description: 'Help Command - Shows all available commands',
    execute(user, args, steamID) {
        const message = `Available commands: 
        
        - Status: Checks if the bot is working correctly
        - Uptime: Shows how long the bot has been running
        - Welcome: Sends a welcome message to the user
        - Help: Shows all available commands
        
        **Note:** All commands start with a "!" exclamation mark. Example: !status`; 

        user.chatMessage(steamID, message);
    },
};
