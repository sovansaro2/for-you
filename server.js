const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const root = __dirname;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const quiz1 = [
  { id: 1, text: "Solve: log2(x) + log2(x - 2) = 3. Find x.", kh: "ដោះស្រាយ៖ log2(x) + log2(x - 2) = 3។ រក x។", hint: "Combine logs: log2[x(x-2)] = 3, then solve x²-2x=8. Remember x > 2.", khHint: "បូកលោការីត៖ log2[x(x-2)] = 3 បន្ទាប់មកដោះស្រាយ x²-2x=8។ ចងចាំថា x > 2។", answer: "4" },
  { id: 2, text: "Solve for x: 3^(2x - 1) = 81. Find x.", kh: "ដោះស្រាយរក x៖ 3^(2x - 1) = 81។ រក x។", hint: "81 = 3^4, so 2x - 1 = 4.", khHint: "81 = 3^4 ដូច្នេះ 2x - 1 = 4។", answer: "2.5" },
  { id: 3, text: "If sin(θ) = 3/5 and θ is acute, find cos(θ) as a decimal.", kh: "ប្រសិនបើ sin(θ) = 3/5 និង θ ជាមុំស្រួច រក cos(θ) ជាទសភាគ។", hint: "Use sin²θ + cos²θ = 1, so cosθ = √(1 - 9/25).", khHint: "ប្រើ sin²θ + cos²θ = 1 ដូច្នេះ cosθ = √(1 - 9/25)។", answer: "0.8" },
  { id: 4, text: "For 2x² - 7x + 3 = 0, find the sum of the roots.", kh: "ចំពោះ 2x² - 7x + 3 = 0 រកផលបូកឫស។", hint: "By Vieta's formulas, the sum of roots is -b/a.", khHint: "តាមរូបមន្ត Vieta ផលបូកឫសគឺ -b/a។", answer: "3.5" },
  { id: 5, text: "Given f(x) = x² - 4x + 1, find f(2) + f(5).", kh: "គេឲ្យ f(x) = x² - 4x + 1។ រក f(2) + f(5)។", hint: "Calculate f(2)=? and f(5)=? separately, then add them.", khHint: "គណនា f(2)=? និង f(5)=? ដាច់ដោយឡែក បន្ទាប់មកបូកចូលគ្នា។", answer: "3" }
];

const quiz2 = [
  { id: 1, question: "តើព្រះសិទ្ធត្ថទ្រង់ប្រសូតនៅទីកន្លែងណា?", options: ["ពុទ្ធគយា (Bodh Gaya)", "ឧទ្យានលុម្ពិនី (Lumbini Park)", "ព្រៃឥសិបតនមិគទាយវ័ន (Sarnath)", "ក្រុងកុសិនារា (Kushinagar)"], correctAnswerIndex: 1, explanation: "ព្រះសិទ្ធត្ថទ្រង់ប្រសូតនៅឧទ្យានលុម្ពិនី (បច្ចុប្បន្នស្ថិតក្នុងប្រទេសនេប៉ាល់)។" },
  { id: 2, question: "តើព្រះនាមដើមកាលព្រះអង្គនៅជាព្រះរាជបុត្រមានឈ្មោះអ្វី?", options: ["សិទ្ធត្ថ (Siddhartha)", "អានន្ទ (Ananda)", "រាហុល (Rahula)", "ទេវទត្ត (Devadatta)"], correctAnswerIndex: 0, explanation: "ព្រះនាមដើមរបស់ព្រះអង្គគឺ សិទ្ធត្ថ គោតម។" },
  { id: 3, question: "តើព្រះសមណគោតមទ្រង់បានត្រាស់ដឹងជាព្រះពុទ្ធនៅក្រោមដើមឈើអ្វី?", options: ["ដើមជ្រៃ", "ដើមរាំង", "ដើមពោធិព្រឹក្ស (Bodhi Tree)", "ដើមចំប៉ី"], correctAnswerIndex: 2, explanation: "ព្រះអង្គទ្រង់ត្រាស់ដឹងនូវអនុត្តរសម្មាសម្ពោធិញាណ នៅក្រោមគល់ដើមពោធិព្រឹក្ស នាពុទ្ធគយា។" },
  { id: 4, question: "តើធម្មទេសនាលើកដំបូងបង្អស់របស់ព្រះពុទ្ធមានឈ្មោះថាអ្វី?", options: ["មង្គលសូត្រ", "ធម្មចក្កប្បវត្តនសូត្រ (Dhammacakkappavattana Sutta)", "មេត្តាសូត្រ", "រតនសូត្រ"], correctAnswerIndex: 1, explanation: "ធម្មចក្កប្បវត្តនសូត្រ គឺជាបឋមទេសនាដែលទ្រង់ប្រោសបញ្ចវគ្គិយភិក្ខុទាំង ៥ អង្គ។" },
  { id: 5, question: "តើព្រះពុទ្ធទ្រង់យាងចូលបរិនិព្វាននៅទីកន្លែងណា?", options: ["ក្រុងកុសិនារា (Kushinagar)", "ក្រុងរាជគ្រឹះ (Rajgir)", "ក្រុងវេសាលី (Vaishali)", "ក្រុងកបិលព័ស្ដុ (Kapilavastu)"], correctAnswerIndex: 0, explanation: "ព្រះពុទ្ធទ្រង់យាងរំលត់ខន្ធចូលកាន់បរិនិព្វាននៅក្រោមដើមសាលព្រឹក្សទាំងគូ ក្នុងក្រុងកុសិនារា។" }
];

function publicQuiz1() {
  return quiz1.map(({ answer, ...question }) => question);
}

function publicQuiz2() {
  return quiz2.map(({ correctAnswerIndex, ...question }) => question);
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .replace(/\\(?:d)?frac\s*\{\s*(-?\d+)\s*\}\s*\{\s*(-?\d+)\s*\}/g, "$1/$2")
    .replace(/\\left|\\right/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function answersMatch(value, expected) {
  const actualText = normalizeAnswer(value);
  const expectedText = normalizeAnswer(expected);
  const actualFraction = actualText.match(/^(-?\d+)\/(-?\d+)$/);
  const expectedFraction = expectedText.match(/^(-?\d+)\/(-?\d+)$/);

  if (actualFraction && expectedFraction) {
    return Number(actualFraction[1]) * Number(expectedFraction[2]) === Number(expectedFraction[1]) * Number(actualFraction[2]);
  }

  return actualText === expectedText;
}

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(data));
}

function publicFile(request, response) {
  const requested = request.url === "/" ? "/index.html" : request.url.split("?")[0];
  const filePath = path.resolve(root, "." + requested);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404); response.end("Not found"); return;
  }
  const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml" };
  response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(response);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => { body += chunk; if (body.length > 10000) request.destroy(); });
    request.on("end", () => { try { resolve(JSON.parse(body || "{}")); } catch { reject(new Error("Invalid JSON")); } });
    request.on("error", reject);
  });
}

function sendTelegramMessage(message) {
  return new Promise((resolve, reject) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      reject(new Error("Telegram environment variables are not configured"));
      return;
    }

    const payload = JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message });
    const telegramRequest = https.request({
      hostname: "api.telegram.org",
      path: "/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage",
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) }
    }, telegramResponse => {
      let responseBody = "";
      telegramResponse.on("data", chunk => { responseBody += chunk; });
      telegramResponse.on("end", () => {
        if (telegramResponse.statusCode >= 200 && telegramResponse.statusCode < 300) resolve();
        else reject(new Error("Telegram rejected the message: " + responseBody));
      });
    });
    telegramRequest.on("error", reject);
    telegramRequest.write(payload);
    telegramRequest.end();
  });
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "GET" && request.url === "/api/quiz1/questions") return sendJson(response, 200, publicQuiz1());
    if (request.method === "GET" && request.url === "/api/quiz2/questions") return sendJson(response, 200, publicQuiz2());

    if (request.method === "POST" && request.url === "/api/quiz1/answer") {
      const body = await readBody(request);
      const question = quiz1.find(item => item.id === Number(body.id));
      if (!question) return sendJson(response, 404, { error: "Question not found" });
      const correct = answersMatch(body.answer, question.answer);
      return sendJson(response, 200, { correct, hint: correct ? null : question.hint, khHint: correct ? null : question.khHint });
    }

    if (request.method === "POST" && request.url === "/api/quiz2/answer") {
      const body = await readBody(request);
      const question = quiz2.find(item => item.id === Number(body.id));
      if (!question) return sendJson(response, 404, { error: "Question not found" });
      const correct = Number(body.answerIndex) === question.correctAnswerIndex;
      return sendJson(response, 200, { correct, explanation: correct ? question.explanation : null });
    }

    if (request.method === "POST" && request.url === "/api/quiz-results") {
      const body = await readBody(request);
      if (!Array.isArray(body.answers) || body.answers.length === 0 || body.answers.length > 20) {
        return sendJson(response, 400, { error: "Invalid answer summary" });
      }
      const message = ["Quiz completed", "", ...body.answers.map((item, index) => (index + 1) + ". " + String(item.question || "") + "\nAnswer: " + String(item.answer || ""))].join("\n");
      await sendTelegramMessage(message);
      return sendJson(response, 200, { sent: true });
    }

    if (request.method === "POST" && request.url === "/api/reward-request") {
      const body = await readBody(request);
      const reward = String(body.reward || "").trim();
      if (!reward || reward.length > 1000) return sendJson(response, 400, { error: "Invalid reward request" });
      const answers = Array.isArray(body.answers) ? body.answers : [];
      const message = [
        "Reward request",
        "",
        "Requested reward:",
        reward,
        "",
        "Quiz answers:",
        ...answers.slice(0, 20).map((item, index) => (index + 1) + ". " + String(item.question || "") + "\nAnswer: " + String(item.answer || ""))
      ].join("\n");
      await sendTelegramMessage(message);
      return sendJson(response, 200, { sent: true });
    }

    if (request.method === "GET") return publicFile(request, response);
    sendJson(response, 405, { error: "Method not allowed" });
  } catch (error) {
    sendJson(response, 400, { error: error.message });
  }
});

server.listen(PORT, () => console.log(`Quiz server running at http://localhost:${PORT}`));
