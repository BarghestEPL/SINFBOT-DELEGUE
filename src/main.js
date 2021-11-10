require('dotenv').config();
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("messageCreate", msg => {
  if (msg.content === "ping") msg.reply("pong");
});

client.login(process.env.TOKEN);