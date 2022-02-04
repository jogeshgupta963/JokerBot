
const Discord = require('discord.js')
// const fetch =require('node-fetch')
const axios =require("axios")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require("dotenv").config()



// function apiCall(text){

//     let url ="https://api.funtranslations.com/translate/yoda.json"+"?text="+text;
//     return  fetch(url)
//             .then(res=> {return res.json()})
//             .then(data=> data)
// }


client.on("ready",()=>{

    console.log(`logged in as ${client.user.tag}`)
})
client.on("messageCreate", async(msg)=>{


        if(msg.author.bot)return;

        let data = await axios.post("/v1/signup",{email:msg.content,name:msg.author.username})
        if(data.data.validity){
        msg.reply(`emailSent to ${msg.content}`)
        }
        else{
            msg.reply("Already registered")
        }

        
        // console.log(msg)
        // console.log(msg.author.username)
        // if(msg.content === "hello"){
        //     msg.reply(`hii ${msg.author.username}`)
        // }
        // if(msg.content === "embed"){
        //     let embed = new Discord.MessageEmbed()
        //     .setTitle(`Hello ${msg.author.username}`)
        //     .setDescription("This is embed")
        //     .setFooter("by JogeshGupta")
        //     msg.channel.send({embeds : [embed]})
        // }
        
            
        
    
})
client.login(process.env.botToken)
