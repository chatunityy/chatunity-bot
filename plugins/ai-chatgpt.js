import fetch from 'node-fetch';

const API_URL = "https://deepseek.com"; // URL DeepSeek

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Inserisci una richiesta valida per usare ChatGPT!*

❏ Esempio:
❏ ${usedPrefix + command} Raccomanda 10 film d'azione
❏ ${usedPrefix + command} Codice JS per un gioco di carte`;

    try {
        await conn.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(`${API_URL}?text=${encodeURIComponent(text)}`);
        if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
        
        const data = await response.json();
        const replyText = data.gpt || "Nessuna risposta valida.";
        await m.reply(replyText);
    } catch (error) {
        console.error("Errore con DeepSeek API:", error);
        await m.reply(`Errore nel recupero della risposta dal server: ${error.message}`);
    }
};

handler.command = /^(openai|chatgpt|ia|ai)$/i;
export default handler;
