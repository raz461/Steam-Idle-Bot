module.exports = {
    name: 'welcome',
    description: 'Welcome Command, sends a welcome message to the user',
    execute(user, args, steamID) {
        const message = `Welcome to my Steam Bot. Im glad to have you here.`;
        user.chatMessage(steamID, message);
    },
};
