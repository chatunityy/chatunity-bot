let handler = async (m, {
  conn, text
  }) => {
  if (!m.isGroup)
  throw ''
  let gruppi = global.db.data.chats[m.chat]
  if (gruppi.spacobot === false)
  throw ''
  let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
  if (!menzione) throw 'Chi vuoi insultare?'
  if (menzione === conn.user.jid) {
      const botInsults = [
   'vorrebbe leccare i capezzoli di',
          'adora annussare le scoreggie di',
          'vorrebbe disperatamente ballare nudx con',
          'sta notte ha sognato di fare sesso con',
          'fa sesso di nascosto con il cane di',
          'è follemente innamorato della nonna di',
          'ha messo incinta la madre di',
          'passa la notte ad osservare dormire',
          'durante le lezioni scolastiche ha fantasie sessuali su',
          'è la crush di',
          'è la puttana personale di',
          'succhia di nascosto il cazzo di',
          'lecca di notte le orecchie di',
          'piace masturbarsi sulle foto di',
          'ha scopato 9 mesi prima che nascesse con la madre di'
  ];
  
      conn.reply(m.chat, pickRandom(botInsults), m);
      return;
    }
  conn.reply(m.chat, `@${menzione.split`@`[0]} ${pickRandom(['vorrebbe leccare i capezzoli di', 'adora annussare le scoreggie di', 'vorrebbe disperatamente ballare nudx con', 'sta notte ha sognato di fare sesso con',  'fa sesso di nascosto con il cane di', 'è follemente innamorato della nonna di', 'ha messo incinta la madre di', 'passa la notte ad osservare dormire','durante le lezioni scolastiche ha fantasie sessuali su', 'è la crush di','è la puttana personale di',  'succhia di nascosto il cazzo di', 'lecca di notte le orecchie di', 'piace masturbarsi sulle foto di', 'ha scopato 9 mesi prima che nascesse con la madre di'])}`, null, {
  mentions: [menzione]
  })
  }
  handler.customPrefix = /zizzania/i
  handler.command = new RegExp
  export default handler
  function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
  }