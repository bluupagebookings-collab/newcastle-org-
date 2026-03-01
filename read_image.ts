import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const response = await fetch("https://i.ibb.co/Pzc82WVY/1771954802701.jpg");
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          data: base64,
          mimeType: "image/jpeg",
        },
      },
      "Extract all the text from this event poster. Format it clearly.",
    ],
  });
  console.log(res.text);
}
run();
