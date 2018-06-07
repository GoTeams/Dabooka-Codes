

module.exports.ready = false;
module.exports.message = false;

module.exports.set = function (client) {
    this.client = client
    module.exports.ready = true;
    //this.client.users.get('318759475169329158').send(`Testing`)
	this.client.on( 'ready', () => { 
        console.log(`Codes Package CLIENT is running scessful`)        
    })    
}
module.exports.bc = function(messageString,args) {
    messageString.guild.members.forEach(m => m.send(`${(args).replace('[user]', `<@!${m.id}>`).replace(`[server]`, messageString.guild.name)}`))
    messageString.reply(`تم إرسال رسالتك الى : ${messageString.guild.memberCount} شخص`)
}
module.exports.emoji = function(messageString) {
    messageString.channel.send(messageString.guild.emojis.map(e => `${e} => \`\`  \<:${e.name}:${e.id}>  \`\``).join("\n"))
}
module.exports.members = function(messageString) {
    messageString.channel.send(messageString.guild.members.map(m => `${m}`).join(" , "))
}
