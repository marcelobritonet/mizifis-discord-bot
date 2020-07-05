const LUCAS = ['lucas', 'stoque', 'ratinho', 'ratin'];
const BRUNAO = ['brunão', 'brunao'];

const callBrunao = msg => {
    if (BRUNAO.indexOf(msg.content.toLowerCase()) > -1) {
        msg.reply('Brunão é pica!');
        return;
    }

    if (LUCAS.indexOf(msg.content.toLowerCase()) > -1) {
        msg.reply('Joga um queijo aí');
    }
}

module.exports = {
    callBrunao
}