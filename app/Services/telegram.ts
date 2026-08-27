const BOT_TOKEN = "8964308293:AAFko5Uh6MGMR1GCYTMKOAfvlvZ0C7KYG68";
const CHAT_ID = "6826669340";

export async function sendTelegramMessage(message: string) {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
  } catch (error) {
    console.error("Telegram Error:", error);
  }
}