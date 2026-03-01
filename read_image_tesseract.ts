import Tesseract from 'tesseract.js';

async function run() {
  try {
    const { data: { text } } = await Tesseract.recognize(
      'https://i.ibb.co/Pzc82WVY/1771954802701.jpg',
      'eng',
      { logger: m => console.log(m) }
    );
    console.log("=== OCR RESULT ===");
    console.log(text);
  } catch (error) {
    console.error("Error:", error);
  }
}
run();
