const help = (prefix) => {
	return `> *Sticker Comandos* <
comando : *${prefix}sticker* o *${prefix}stiker*
desc : converter imagem/gif/vídeo em adesivo
usage : responder imagem/gif/vídeo ou enviar imagem/gif/vídeo com legenda\n
comando : *${prefix}sticker nobg* o *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}toimg*
desc :  converter adesivo em imagem
usage : reply sticker\n
comando : *${prefix}tsticker* o *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n
> *Meme Comandos* <
comando : *${prefix}meme*
desc : random meme images [english]
usage : apenas envie o comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : basta enviar o comando\n
> *Others Comandos* <
comando : *${prefix}gtts*
desc : convert text to speech/audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfwloli
usage : just send the command\n
comando : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
comando : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
comando : *${prefix}setprefix*
desc : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
nota : This command can only be used by the bot owner\n
> *Group Comands* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 55813xxxxx*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
usage : *${prefix}kick @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna administrador, e aquele que envia o comando é admin!\n
command : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
nota : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
nota : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
