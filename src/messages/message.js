const callBrunao = msg => {
    if (msg.content === 'brunao' || msg.content === 'brunão') {
        msg.reply('Brunão é pica!');
    }
}

module.exports = {
    callBrunao
}