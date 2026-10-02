import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const prompt = messages[messages.length - 1]?.content || messages[messages.length - 1]?.parts?.[0]?.text || "";

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const result = await model.generateContent(prompt);

    return new Response(result.response.text(), {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (e: any) {
    return new Response("Erro: " + e.message, { status: 500 });
  }
}
