module.exports = {
  name: "support",
  alias: ["helpbot", "support", "pathanupport"],
  description: "Get ZAYN-tech-bot-v2 support links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *ZAYN-TECH-BOT-V2 - SUPPORT CENTER* 🛠️



💬 *WhatsApp Support Group:*  
IS KAI LIYE ANNAS KO KAHEIN 🙂

📲 *Telegram Support:*  
https://t.me/@Rat10000

🧑‍💻 *GitHub Repository:*  
https://github.com/Faizan14365/ZAYN-MARRY_BOT.git

📞 *Bot Admin:*  
wa.me/923143428375

📞 *Bot Owner:*  
wa.me/923143428375

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using Zayn-tech-bot-v2!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
