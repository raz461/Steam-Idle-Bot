const os = require('os');

module.exports = {
    name: 'status',
    description: 'Status Command - Checks if the bot is working correctly',
    execute(user, args, steamID) {
        const uptime = process.uptime();
        const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // MB

        function getAverageCPULoad() {
            const measurements = [];
            const interval = 500; // Interval in milliseconds

            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    measurements.push(os.cpus()[0].load * 100);
                }, i * interval);
            }

            setTimeout(() => {
                const avgLoad = measurements.reduce((sum, val) => sum + val, 0) / measurements.length;
                updateStatusLines(avgLoad);
            }, interval * 3);
        }

        function updateStatusLines(cpuUsage) {
            const statusLines = [
                '**Bot Status**',
                `--Uptime: ${uptime} seconds\n\n`,

                `* Resource Usage:`,
                `--Memory: ${usedMemory.toFixed(2)} MB\n\n`,
                
                `**System**`,
                `--OS: ${os.type()} ${os.platform()} ${os.arch()}`,
                `--Node.js: ${process.version}`,
                `--Uptime: ${process.uptime()} seconds`,
                `--Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
            ];

            const message = statusLines.join('\n');
            user.chatMessage(steamID, message);
        }

        // Start CPU measurement 
        getAverageCPULoad();
    },
};
