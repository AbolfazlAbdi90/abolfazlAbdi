const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    console.log("BOT TOKEN exists:", !!BOT_TOKEN);
    console.log("CHAT ID:", CHAT_ID);

    if (!BOT_TOKEN || !CHAT_ID) {
      return Response.json(
        {
          error: "Environment variables are missing",
          hasToken: !!BOT_TOKEN,
          hasChatId: !!CHAT_ID,
        },
        { status: 500 }
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    console.log("Telegram response:", telegramData);

    if (!telegramResponse.ok) {
      return Response.json(
        {
          error: telegramData,
        },
        { status: telegramResponse.status }
      );
    }

    return Response.json({
      success: true,
      telegram: telegramData,
    });
  } catch (error) {
    console.error("Server Error:", error);

    return Response.json(
      {
        error: "Server error",
      },
      { status: 500 }
    );
  }
}