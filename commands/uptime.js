module.exports = {
    name: 'uptime',
    description: 'Uptime Command - Shows how long the bot has been running',
    execute(user, args, steamID) {
        const uptime = process.uptime();
        const message = `Bot has been running for ${Math.floor(uptime)} seconds.`;
        user.chatMessage(steamID, message);
    },
};
