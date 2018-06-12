const Discord = require("discord.js")
const bot = new Discord.Client()

//Pour mettre le bot en ligne//
bot.login("NDU1NDU3NDk5MDQ3Mzk1MzQ4.DgA9DQ.XCgmyi1pgPvLbQnU4bRhM9YQGDc")




bot.on("message", function (message) {
    if (message.content.startsWith("%L role")) { //TOP//
        if (message.content === "%L role top") {
            if(message.member.roles.has("426781238037053451")) {
                message.reply("Tu a déja ce rôle")
            } else {
            let myRole = message.guild.roles.find("id", "426781238037053451")
            let member = message.member.addRole("426781238037053451")
            message.reply("Tu a rejoin l'ile de la top-lane")
        }} else { //MID//
            if (message.content === "%L role mid") {
                if(message.member.roles.has("426780978808356864")) {
                    message.reply("Tu a déja ce rôle")
                } else {
                let myRole = message.guild.roles.find("id", "426780978808356864");
                let member = message.member.addRole("426780978808356864")
                message.reply("Tu a rejoin la voie rapide")
            }} else { //JGL//
                if (message.content === "%L role jungle") {
                    if(message.member.roles.has("426780721412177924")) {
                        message.reply("Tu a déja ce rôle")
                    } else {
                    let myRole = message.guild.roles.find("id", "426780721412177924");
                    let member = message.member.addRole("426780721412177924")
                    message.reply("Tu a rejoin la jungle des prédateurs")
                }} else { //ADC//
                    if (message.content === "%L role adc") {
                        if(message.member.roles.has("426781158856982528")) {
                            message.reply("Tu a déja ce rôle")
                        } else {
                        let myRole = message.guild.roles.find("id", "426781158856982528");
                        let member = message.member.addRole("426781158856982528")
                        message.reply("Tu a rejoin la voie du tireur d'élite")
                    }} else {
                        if (message.content === "%L role support") {
                            if(message.member.roles.has("426780893194092544")) {
                                message.reply("Tu a déja ce rôle")
                            } else {
                            let myRole = message.guild.roles.find("id", "426780893194092544");
                            let member = message.member.addRole("426780893194092544")
                            message.reply("Tu a rejoin la voie de l'appat")
                        }} else {
                            if (message.content === "%L role help"){
                            message.channel.send("%L top pour le rôle de la voie du haut")
                            message.channel.send("%L jungle pour le rôle de la voie de la jungle")
                            message.channel.send("%L mid pour le rôle de la voie du milieu")
                            message.channel.send("%L adc pour le rôle de la voie du bas en tireur")
                            message.channel.send("%L support pour le rôle de la voie du bas en support")
                            }
                        }
                    }
                }
            }
        }
    }  
})
