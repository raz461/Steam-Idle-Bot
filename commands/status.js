module.exports = {
    name: 'status',
    description: 'Status Command - Checks if the bot is working correctly',
    execute(user, args, steamID) {
        const message = 'The bot is working correctly!';

        user.chatMessage(steamID, message);
    },
};
