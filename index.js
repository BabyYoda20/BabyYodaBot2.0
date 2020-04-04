const discord = require('discord.js');
const bot = new discord.Client();

const ytdl = require("ytdl-core");

const token = process.env.token;

const PREFIX = 'by!';

var version = '1.2'

var servers = {};

bot.on('ready', () => {
    console.log('This bot is Ready');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('Pong!')
            break;
        case 'robloxpf':
            message.channel.send('roblox.com/users/136357261/profile')
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version 1.0.0')
            } else {
                message.channel.send('Inavalid Command')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Error Please define second Part')
            message.channel.bulkDelete(args[1])
            break;
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were kicked from the administration team').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(Error => {
                        message.reply('I was unable to kick the member')
                        console.log(Error);
                    });
                } else {
                    message.reply("That user isn\'t in the guild")
                }
            } else {
                message.reply('You need to Specify a person');
            }
            break;

            case 'ban':
                const player = message.mentions.users.first();
                
                if (player) {
                    const member = message.guild.member(player);

                    if (member) {
                        member.ban({ression: 'you were bad!'}).then(() =>{
                            message.reply('YOU SUCESSFULLY BANNED ${user.tag}')
                        })
                    } else{
                        message.reply("that user isn\'t in the guild")
                    }
                } else {
                    message.reply('you need to specify a person!')
                }
                break;
            }
    })

bot.login(token);