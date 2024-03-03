const axios = require('axios');
const config = require('../config.json');

exports.log = (Title, description, color) => {

    const webhook = config.webhook;
    
    const predefinedColors = {
        green: 6684504,
        red: 16711680,
        blue: 34303
    };

    const message = {
        content: null,
        embeds: [
            {
                title: Title,
                description: description,
                color: predefinedColors[color.toLowerCase()] || 0,
                footer: {
                    text: "Made By @x64debug",
                    icon_url: "https://i.imgur.com/jLe8RBN.gif"
                },
                timestamp: new Date().toISOString()
            }
        ],
        attachments: []
    };

    if (webhook) {
        axios.post(webhook, message);
    }
}