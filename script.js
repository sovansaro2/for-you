const problems = [
  {
    text: "Solve: log2(x) + log2(x - 2) = 3. Find x.",
    kh: "ដោះស្រាយ៖ log2(x) + log2(x - 2) = 3។ រក x។",
    hint: "Combine logs: log2[x(x-2)] = 3, then solve x²-2x=8. Remember x > 2.",
    khHint: "បូកលោការីត៖ log2[x(x-2)] = 3 បន្ទាប់មកដោះស្រាយ x²-2x=8។ ចងចាំថា x > 2។"
  },
  {
    text: "Solve for x: 3^(2x - 1) = 81. Find x.",
    kh: "ដោះស្រាយរក x៖ 3^(2x - 1) = 81។ រក x។",
    hint: "81 = 3^4, so 2x - 1 = 4.",
    khHint: "81 = 3^4 ដូច្នេះ 2x - 1 = 4។"
  },
  {
    text: "If sin(θ) = 3/5 and θ is acute, find cos(θ) as a decimal.",
    kh: "ប្រសិនបើ sin(θ) = 3/5 និង θ ជាមុំស្រួច រក cos(θ) ជាទសភាគ។",
    hint: "Use sin²θ + cos²θ = 1, so cosθ = √(1 - 9/25).",
    khHint: "ប្រើ sin²θ + cos²θ = 1 ដូច្នេះ cosθ = √(1 - 9/25)។"
  },
  {
    text: "For 2x² - 7x + 3 = 0, find the sum of the roots.",
    kh: "ចំពោះ 2x² - 7x + 3 = 0 រកផលបូកឫស។",
    hint: "By Vieta's formulas, the sum of roots is -b/a.",
    khHint: "តាមរូបមន្ត Vieta ផលបូកឫសគឺ -b/a។"
  },
  {
    text: "Given f(x) = x² - 4x + 1, find f(2) + f(5).",
    kh: "គេឲ្យ f(x) = x² - 4x + 1។ រក f(2) + f(5)។",
    hint: "Calculate f(2)=? and f(5)=? separately, then add them.",
    khHint: "គណនា f(2)=? និង f(5)=? ដាច់ដោយឡែក បន្ទាប់មកបូកចូលគ្នា។"
  }
];

const quiz2Questions = [
  {
    question: "តើព្រះសិទ្ធត្ថទ្រង់ប្រសូតនៅទីកន្លែងណា?",
    options: ["ពុទ្ធគយា (Bodh Gaya)", "ឧទ្យានលុម្ពិនី (Lumbini Park)", "ព្រៃឥសិបតនមិគទាយវ័ន (Sarnath)", "ក្រុងកុសិនារា (Kushinagar)"],
    explanation: "ព្រះសិទ្ធត្ថទ្រង់ប្រសូតនៅឧទ្យានលុម្ពិនី (បច្ចុប្បន្នស្ថិតក្នុងប្រទេសនេប៉ាល់)។"
  },
  {
    question: "តើព្រះនាមដើមកាលព្រះអង្គនៅជាព្រះរាជបុត្រមានឈ្មោះអ្វី?",
    options: ["សិទ្ធត្ថ (Siddhartha)", "អានន្ទ (Ananda)", "រាហុល (Rahula)", "ទេវទត្ត (Devadatta)"],
    explanation: "ព្រះនាមដើមរបស់ព្រះអង្គគឺ សិទ្ធត្ថ គោតម។"
  },
  {
    question: "តើព្រះសមណគោតមទ្រង់បានត្រាស់ដឹងជាព្រះពុទ្ធនៅក្រោមដើមឈើអ្វី?",
    options: ["ដើមជ្រៃ", "ដើមរាំង", "ដើមពោធិព្រឹក្ស (Bodhi Tree)", "ដើមចំប៉ី"],
    explanation: "ព្រះអង្គទ្រង់ត្រាស់ដឹងនូវអនុត្តរសម្មាសម្ពោធិញាណ នៅក្រោមគល់ដើមពោធិព្រឹក្ស នាពុទ្ធគយា។"
  },
  {
    question: "តើធម្មទេសនាលើកដំបូងបង្អស់របស់ព្រះពុទ្ធមានឈ្មោះថាអ្វី?",
    options: ["មង្គលសូត្រ", "ធម្មចក្កប្បវត្តនសូត្រ (Dhammacakkappavattana Sutta)", "មេត្តាសូត្រ", "រតនសូត្រ"],
    explanation: "ធម្មចក្កប្បវត្តនសូត្រ គឺជាបឋមទេសនាដែលទ្រង់ប្រោសបញ្ចវគ្គិយភិក្ខុទាំង ៥ អង្គ។"
  },
  {
    question: "តើព្រះពុទ្ធទ្រង់យាងចូលបរិនិព្វាននៅទីកន្លែងណា?",
    options: ["ក្រុងកុសិនារា (Kushinagar)", "ក្រុងរាជគ្រឹះ (Rajgir)", "ក្រុងវេសាលី (Vaishali)", "ក្រុងកបិលព័ស្ដុ (Kapilavastu)"],
    explanation: "ព្រះពុទ្ធទ្រង់យាងរំលត់ខន្ធចូលកាន់បរិនិព្វាននៅក្រោមដើមសាលព្រឹក្សទាំងគូ ក្នុងក្រុងកុសិនារា។"
  }
];

let language = "en";
const translations = {
  en: {
    start: "Start Quiz 1:",
    no: "No",
    submit: "Submit",
    answer: "Enter your answer here...",
    aiConfirm: "I confirm that I solved this without AI 😂",
    rules: "Quiz Rules",
    solve: "Solve all 5 problems to complete the quiz.",
    attempts: "You have 3 attempts for each problem.",
    hintRule: "Use the hint after an incorrect answer.",
    enter: "Enter your answer and click Submit, or press Enter.",
    restartRule: "After 3 incorrect attempts, the quiz restarts from Problem 1.",
    correct: "Correct! Moving to the next problem...",
    empty: "Please enter an answer.",
    incorrect: "Incorrect! You have {n} attempt(s) left. Hint: ",
    attemptsLeft: "{n} attempt(s) left out of 3",
    noAttempts: "No attempts left! Restarting from Problem 1...",
    success: "You earned your reward!",
    solved: "You solved every problem perfectly! 🎁",
    rewardPrompt: "You answered every question correctly!",
    rewardLabel: "Write the reward you want:",
    rewardPlaceholder: "Write your reward here...",
    rewardSubmit: "Send to Telegram",
    rewardEmpty: "Please write the reward you want.",
    successTitle: "Success!",
    finalMessage: "You earned a reward of your choice. Congratulations!",
    failureTitle: "Try Again!",
    failureMessage: "You used all 3 attempts. The quiz will restart from Problem 1.",
    timeUp: "Time is up! Please try the quiz again.",
    close: "Close",
    exit: "Exit"
  },
  kh: {
    start: "ចាប់ផ្តើម Quiz 1៖",
    no: "ទេ",
    submit: "បញ្ជូន",
    answer: "បញ្ចូលចម្លើយរបស់អ្នកនៅទីនេះ...",
    aiConfirm: "ខ្ញុំបញ្ជាក់ថា ខ្ញុំបានដោះស្រាយដោយខ្លួនឯង មិនប្រើ AI ទេ 😂",
    rules: "លក្ខខណ្ឌ Quiz",
    solve: "ត្រូវដោះស្រាយលំហាត់ទាំង ៥ ដើម្បីបញ្ចប់ Quiz។",
    attempts: "មានឱកាសព្យាយាម ៣ ដងសម្រាប់លំហាត់នីមួយៗ។",
    attemptsLeft: "នៅសល់ {n} ដង ក្នុងចំណោម 3 ដង",
    hintRule: "ប្រើ Hint បន្ទាប់ពីឆ្លើយខុស។",
    enter: "បញ្ចូលចម្លើយ រួចចុច បញ្ជូន ឬចុច Enter។",
    restartRule: "បើឆ្លើយខុស ៣ ដង Quiz នឹងចាប់ផ្តើមពីលំហាត់ទី ១ វិញ។",
    correct: "ត្រឹមត្រូវ! កំពុងទៅកាន់លំហាត់បន្ទាប់...",
    empty: "សូមបញ្ចូលចម្លើយ។",
    incorrect: "មិនត្រឹមត្រូវ! អ្នកនៅសល់ឱកាស {n} ដង។ Hint៖ ",
    noAttempts: "អស់ឱកាសហើយ! កំពុងចាប់ផ្តើមពីលំហាត់ទី ១ វិញ...",
    success: "អ្នកទទួលបានរង្វាន់របស់អ្នកហើយ!",
    solved: "អ្នកបានដោះស្រាយគ្រប់លំហាត់យ៉ាងល្អឥតខ្ចោះ! 🎁",
    rewardPrompt: "អ្នកបានឆ្លើយសំណួរទាំងអស់ត្រឹមត្រូវហើយ",
    rewardLabel: "សូមសរសេររង្វាន់ដែលអ្នកចង់បាន៖",
    rewardPlaceholder: "សរសេររង្វាន់ដែលអ្នកចង់បាននៅទីនេះ...",
    rewardSubmit: "បញ្ជូនទៅ Telegram",
    rewardEmpty: "សូមសរសេររង្វាន់ដែលអ្នកចង់បានជាមុនសិន។",
    successTitle: "ជោគជ័យ!",
    finalMessage: "អ្នកនឹងទទួលបានរង្វាន់អ្វីម្យាងដែលអ្នកចង់បាន។ សូមអបអរសាទរ!",
    failureTitle: "សូមព្យាយាមម្ដងទៀត!",
    failureMessage: "អ្នកបានប្រើឱកាសទាំង ៣ អស់ហើយ។ Quiz នឹងចាប់ផ្ដើមពីលំហាត់ទី ១ វិញ។",
    timeUp: "អស់ពេលហើយ! សូមព្យាយាម Quiz ម្ដងទៀត។",
    close: "បិទ",
    exit: "ចាកចេញ"
  }
};

function tr(key) {
  const languagePack = translations[language] || translations.en;
  return languagePack[key] || translations.en[key] || "";
}

function toggleLanguage() {
  language = language === "en" ? "kh" : "en";
  updateLanguage();
}

function updateLanguage() {
  document.documentElement.lang = language === "en" ? "en" : "km";

  const languageBtn = document.getElementById("languageBtn");
  if (languageBtn) {
    languageBtn.textContent = language === "en" ? "KH" : "EN";
  }

  const creatorCredit = document.getElementById("creatorCredit");
  if (creatorCredit) {
    creatorCredit.textContent = language === "en"
      ? "Creator: SOVANSARO RIM RAVI"
      : "អ្នកបង្កើត៖ សុវណ្ណសរោ រីម រ៉ាវី";
  }

  const introHeading = document.querySelector("#intro h1");
  if (introHeading) {
    introHeading.innerHTML = language === "en"
      ? "If you solve all problems,<br>🎁 You will receive a reward of your choice 🎁"
      : "ប្រសិនបើអ្នកដោះស្រាយលំហាត់ទាំងអស់បាន<br>អ្នកនឹងទទួលបានរង្វាន់អ្វីម្យាងដែលអ្នកចង់បាន";
  }

  const startButton = document.querySelector(".btn-yes");
  if (startButton) startButton.textContent = tr("start");

  const noButton = document.getElementById("btnNo");
  if (noButton) noButton.textContent = tr("no");

  const submitButton = document.querySelector(".abox button:not(.back-btn)");
  if (submitButton) submitButton.textContent = tr("submit");

  const backButton = document.getElementById("backBtn");
  if (backButton) backButton.textContent = language === "en" ? "Back" : "ថយក្រោយ";

  const answerInput = document.getElementById("ans");
  if (answerInput) answerInput.placeholder = tr("answer");

  const aiConfirmText = document.getElementById("aiConfirmText");
  if (aiConfirmText) aiConfirmText.textContent = tr("aiConfirm");

  const infoTitle = document.querySelector("#infoTitle");
  if (infoTitle) infoTitle.textContent = tr("rules");

  const infoList = document.querySelector("#infoModal ul");
  if (infoList) {
    infoList.innerHTML = [
      tr("solve"),
      tr("attempts"),
      tr("hintRule"),
      tr("enter"),
      tr("restartRule")
    ].map((item) => `<li>${item}</li>`).join("");
  }

  const successTitle = document.querySelector("#success h1");
  if (successTitle) successTitle.textContent = "🎉 " + tr("success") + " 🎉";

  const successText = document.querySelector("#success p");
  if (successText) successText.textContent = tr("rewardPrompt");

  const rewardLabel = document.getElementById("rewardLabel");
  if (rewardLabel) rewardLabel.textContent = tr("rewardLabel");

  const rewardInput = document.getElementById("rewardInput");
  if (rewardInput) rewardInput.placeholder = tr("rewardPlaceholder");

  const rewardSubmit = document.getElementById("rewardSubmit");
  if (rewardSubmit) rewardSubmit.textContent = tr("rewardSubmit");

  const resultClose = document.getElementById("resultClose");
  if (resultClose) resultClose.setAttribute("aria-label", tr("close"));

  const exitButton = document.getElementById("exitBtn");
  if (exitButton) exitButton.textContent = tr("exit");

  if (document.getElementById("quiz") && !document.getElementById("quiz").classList.contains("hidden")) {
    render();
    updateAttempts();
  }
}

let cur = 0;
let tries = 3;
let isAnswerLocked = false;
let quiz2Cur = 0;
let quiz2Answered = false;
const MAXTRIES = 3;
const QUESTION_MINUTES = 2;
let remainingSeconds = QUESTION_MINUTES * 60;
let timerId = null;
let apiReady = false;
let activeQuiz = 0;

async function loadQuizData() {
  const [quiz1Response, quiz2Response] = await Promise.all([
    fetch("/api/quiz1/questions"),
    fetch("/api/quiz2/questions")
  ]);
  if (!quiz1Response.ok || !quiz2Response.ok) throw new Error("Quiz server is unavailable");
  const quiz1Data = await quiz1Response.json();
  const quiz2Data = await quiz2Response.json();
  problems.splice(0, problems.length, ...quiz1Data);
  quiz2Questions.splice(0, quiz2Questions.length, ...quiz2Data);
  apiReady = true;
}

function updateTimer() {
  const timer = document.getElementById(activeQuiz === 2 ? "timer2" : "timer");
  if (!timer) return;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  timer.textContent = minutes + ":" + String(seconds).padStart(2, "0");
  timer.classList.toggle("warning", remainingSeconds <= 60);
}

function startTimer() {
  clearInterval(timerId);
  remainingSeconds = QUESTION_MINUTES * 60;
  updateTimer();
  timerId = setInterval(function () {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timeUp();
    }
  }, 1000);
}

function showWarn() {
  if (document.getElementById("warn")) return;

  const w = document.createElement("div");
  w.id = "warn";
  w.innerHTML = "<div>Please stop! This action is not allowed.</div><div style='font-size:16px;color:#aaa'>Please think for yourself :)</div>";
  document.body.appendChild(w);
  setTimeout(function () {
    w.remove();
  }, 1500);
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showWarn();
});

document.addEventListener("copy", function (e) {
  e.preventDefault();
  showWarn();
});

document.addEventListener("paste", function (e) {
  e.preventDefault();
  showWarn();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen" || (e.ctrlKey && (e.key === "p" || e.key === "s"))) {
    e.preventDefault();
    showWarn();
  }
});

const infoBtn = document.getElementById("infoBtn");
const infoModal = document.getElementById("infoModal");
const infoClose = document.getElementById("infoClose");

function closeInfo() {
  if (infoModal) infoModal.classList.add("hidden");
}

const resultModal = document.getElementById("resultModal");
const resultClose = document.getElementById("resultClose");

function closeResult() {
  if (resultModal) resultModal.classList.add("hidden");
}

function showResult(success, messageKey) {
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultMessage = document.getElementById("resultMessage");

  if (resultIcon) {
    resultIcon.innerHTML = success
      ? "<img src='gift.svg' alt='Reward'>"
      : "<img src='gift.svg' alt='Try again'>";
  }

  if (resultTitle) {
    resultTitle.textContent = success ? tr("successTitle") : tr("failureTitle");
  }

  if (resultMessage) {
    resultMessage.textContent = success ? tr(messageKey || "solved") : tr("failureMessage");
  }

  if (resultModal) {
    resultModal.classList.remove("hidden");
  }
}

if (resultClose) {
  resultClose.addEventListener("click", closeResult);
}

if (resultModal) {
  resultModal.addEventListener("click", function (e) {
    if (e.target === resultModal) closeResult();
  });
}

if (infoBtn) {
  infoBtn.addEventListener("click", function () {
    if (infoModal) infoModal.classList.remove("hidden");
  });
}

if (infoClose) {
  infoClose.addEventListener("click", closeInfo);
}

if (infoModal) {
  infoModal.addEventListener("click", function (e) {
    if (e.target === infoModal) closeInfo();
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeInfo();
});

function startQuiz() {
  if (!apiReady) return;
  const intro = document.getElementById("intro");
  const success = document.getElementById("success");
  const quiz = document.getElementById("quiz");

  if (intro) intro.classList.add("hidden");
  if (success) success.classList.add("hidden");
  if (quiz) quiz.classList.remove("hidden");

  shuffle(problems);
  activeQuiz = 1;
  cur = 0;
  drawProg();
  render();
}

function startQuiz2() {
  if (!apiReady) return;
  const intro = document.getElementById("intro");
  const quiz = document.getElementById("quiz");
  const quiz2 = document.getElementById("quiz2");
  const quizNext = document.getElementById("quizNext");
  const success = document.getElementById("success");

  if (intro) intro.classList.add("hidden");
  if (quiz) quiz.classList.add("hidden");
  if (quizNext) quizNext.classList.add("hidden");
  if (success) success.classList.add("hidden");
  if (quiz2) quiz2.classList.remove("hidden");
  shuffle(quiz2Questions);
  activeQuiz = 2;
  quiz2Cur = 0;
  renderQuiz2();
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
}

function exitQuiz() {
  clearInterval(timerId);
  activeQuiz = 0;
  const quiz = document.getElementById("quiz");
  const intro = document.getElementById("intro");
  const success = document.getElementById("success");
  if (quiz) quiz.classList.add("hidden");
  if (success) success.classList.add("hidden");
  if (intro) intro.classList.remove("hidden");
  cur = 0;
  drawProg();
  if (document.getElementById("status")) document.getElementById("status").textContent = "";
  if (document.getElementById("resultModal")) document.getElementById("resultModal").classList.add("hidden");
}

function exitQuiz2() {
  clearInterval(timerId);
  activeQuiz = 0;
  const quiz2 = document.getElementById("quiz2");
  const intro = document.getElementById("intro");
  if (quiz2) quiz2.classList.add("hidden");
  if (intro) intro.classList.remove("hidden");
}

function renderQuiz2() {
  const question = quiz2Questions[quiz2Cur];
  const progress = document.getElementById("quiz2Progress");
  const questionEl = document.getElementById("quiz2Question");
  const optionsEl = document.getElementById("quiz2Options");
  const feedback = document.getElementById("quiz2Feedback");
  const nextButton = document.getElementById("quiz2Next");

  quiz2Answered = false;
  if (progress) progress.textContent = (quiz2Cur + 1) + " / " + quiz2Questions.length;
  if (questionEl) questionEl.textContent = question.question;
  if (feedback) feedback.textContent = "";
  if (feedback) feedback.className = "quiz2-feedback";
  if (nextButton) nextButton.disabled = true;
  startTimer();
  if (optionsEl) {
    optionsEl.innerHTML = "";
    question.options.forEach(function (option, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz2-option";
      button.textContent = option;
      button.addEventListener("click", function () {
        answerQuiz2(index, button);
      });
      optionsEl.appendChild(button);
    });
  }
}

async function answerQuiz2(index, selectedButton) {
  if (quiz2Answered) return;

  const question = quiz2Questions[quiz2Cur];
  const feedback = document.getElementById("quiz2Feedback");
  const response = await fetch("/api/quiz2/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: question.id, answerIndex: index })
  });
  const result = await response.json();
  if (result.correct) {
    quiz2Answered = true;
    selectedButton.classList.add("correct");
    if (feedback) {
      feedback.className = "quiz2-feedback correct";
      feedback.textContent = "ត្រឹមត្រូវ! " + result.explanation;
    }
    document.querySelectorAll(".quiz2-option").forEach(function (button) {
      button.disabled = true;
    });
    const nextButton = document.getElementById("quiz2Next");
    if (nextButton) nextButton.disabled = false;
    return;
  }

  selectedButton.classList.add("incorrect");
  selectedButton.disabled = true;
  if (feedback) {
    feedback.className = "quiz2-feedback incorrect";
    feedback.textContent = "មិនត្រឹមត្រូវទេ។ សូមព្យាយាមម្តងទៀត។";
  }
}

function nextQuiz2() {
  if (!quiz2Answered) return;
  quiz2Cur += 1;
  if (quiz2Cur >= quiz2Questions.length) {
    const quiz2 = document.getElementById("quiz2");
    const success = document.getElementById("success");
    if (quiz2) quiz2.classList.add("hidden");
    if (success) success.classList.remove("hidden");
    celebrate();
    return;
  }
  renderQuiz2();
}

function goBack() {
  if (cur === 0) return;
  cur -= 1;
  drawProg();
  render();
}

const noButton = document.getElementById("btnNo");
if (noButton) {
  noButton.addEventListener("click", function () {
    const messages = ["Maybe just a little more?", "Please try again...", "Think about it again..."];
    let index = messages.indexOf(this.textContent);
    if (index < 0) index = -1;
    index += 1;

    if (index >= messages.length) {
      startQuiz();
      return;
    }

    this.textContent = messages[index];
  });
}

function drawProg() {
  const prog = document.getElementById("prog");
  if (!prog) return;

  let html = "";
  for (let i = 0; i < problems.length; i += 1) {
    const state = i === cur ? " on" : i < cur ? " done" : "";
    html += "<div class='step" + state + "'></div>";
  }
  prog.innerHTML = html;
}

function updateAttempts() {
  const attemptsEl = document.getElementById("attempts");
  if (!attemptsEl) return;
  attemptsEl.textContent = tr("attemptsLeft").replace("{n}", tries);
}

function render() {
  isAnswerLocked = false;

  const term = document.getElementById("term");
  const status = document.getElementById("status");
  const answerInput = document.getElementById("ans");
  const submitButton = document.getElementById("submitBtn");
  const backButton = document.getElementById("backBtn");
  const aiConfirm = document.getElementById("aiConfirm");

  if (term) {
    term.innerHTML = "<span class='loading'>C:\\Users\\heart_lock&gt; loading problem " + (cur + 1) + "/5 ...</span><span class='problem-label'>Problem " + (cur + 1) + ":</span><span class='problem-text'>" + (language === "kh" ? problems[cur].kh : problems[cur].text) + "</span>";
  }

  if (status) {
    status.textContent = "";
    status.className = "status";
  }

  if (answerInput) answerInput.value = "";
  if (aiConfirm) aiConfirm.checked = false;
  if (submitButton) submitButton.disabled = true;
  tries = MAXTRIES;
  if (backButton) backButton.disabled = cur === 0;
  updateAttempts();
  if (answerInput) answerInput.focus();
  startTimer();
}

async function checkAns() {
  const inp = document.getElementById("ans");
  const s = document.getElementById("status");

  if (!inp || !s || isAnswerLocked) return;

  const value = inp.value.trim();
  if (!value) {
    s.textContent = tr("empty");
    inp.focus();
    return;
  }

  const response = await fetch("/api/quiz1/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: problems[cur].id, answer: value })
  });
  const result = await response.json();

  if (result.correct) {
    isAnswerLocked = true;
    s.className = "status ok";
    s.textContent = tr("correct");
    showResult(true);

    setTimeout(function () {
      closeResult();
      cur += 1;
      if (cur >= problems.length) {
        finish();
        return;
      }
      drawProg();
      render();
    }, 1300);
    return;
  }

  tries -= 1;
  updateAttempts();

  if (tries > 0) {
    s.className = "status bad";
    s.textContent = tr("incorrect").replace("{n}", tries) + (language === "kh" ? result.khHint : result.hint);
    showResult(false);
    setTimeout(closeResult, 1300);
  } else {
    s.className = "status bad";
    s.textContent = tr("noAttempts");
    showResult(false);
    cur = 0;
    setTimeout(function () {
      closeResult();
      drawProg();
      render();
    }, 2000);
  }

  inp.value = "";
  inp.focus();
}

const aiConfirm = document.getElementById("aiConfirm");
if (aiConfirm) {
  aiConfirm.addEventListener("change", function () {
    const submitButton = document.getElementById("submitBtn");
    if (submitButton) submitButton.disabled = !this.checked;
  });
}

const answerInput = document.getElementById("ans");
if (answerInput) {
  answerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && document.getElementById("aiConfirm") && document.getElementById("aiConfirm").checked) {
      checkAns();
    }
  });
}

function timeUp() {
  const status = document.getElementById("status");
  if (status) {
    status.className = "status bad";
    status.textContent = tr("timeUp");
  }

  showResult(false);
  setTimeout(function () {
    closeResult();
    const quiz = document.getElementById("quiz");
    const quiz2 = document.getElementById("quiz2");
    const intro = document.getElementById("intro");
    if (quiz) quiz.classList.add("hidden");
    if (quiz2) quiz2.classList.add("hidden");
    if (intro) intro.classList.remove("hidden");
    activeQuiz = 0;
    cur = 0;
    drawProg();
  }, 2200);
}

function celebrate() {
  const layer = document.createElement("div");
  layer.className = "celebration-layer";

  const burst = document.createElement("div");
  burst.className = "celebration-burst";
  layer.appendChild(burst);

  const colors = ["#ff4e8e", "#ffcc66", "#7ee787", "#8fb8ff", "#d9a7ff"];
  for (let i = 0; i < 34; i += 1) {
    const particle = document.createElement("div");
    particle.className = "celebration-particle";
    const angle = (Math.PI * 2 * i) / 34;
    const distance = 130 + Math.random() * 260;
    particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
    particle.style.setProperty("--y", Math.sin(angle) * distance + "px");
    particle.style.setProperty("--spin", (Math.random() * 720 - 360) + "deg");
    particle.style.setProperty("--particle-delay", (Math.random() * 0.35) + "s");
    particle.style.setProperty("--particle-rotate", (Math.random() * 90) + "deg");
    particle.style.setProperty("--particle-color", colors[i % colors.length]);
    layer.appendChild(particle);
  }

  for (let i = 0; i < 8; i += 1) {
    const heart = document.createElement("img");
    heart.className = "celebration-heart";
    heart.src = "gift.svg";
    heart.alt = "";
    heart.style.left = (12 + Math.random() * 76) + "%";
    heart.style.top = (45 + Math.random() * 20) + "%";
    heart.style.setProperty("--x", (Math.random() * 180 - 90) + "px");
    heart.style.setProperty("--y", (-180 - Math.random() * 220) + "px");
    heart.style.setProperty("--particle-delay", (Math.random() * 0.8) + "s");
    layer.appendChild(heart);
  }

  for (let i = 0; i < 14; i += 1) {
    const spark = document.createElement("div");
    spark.className = "celebration-spark";
    spark.style.left = (8 + Math.random() * 84) + "%";
    spark.style.top = (10 + Math.random() * 75) + "%";
    spark.style.setProperty("--particle-delay", (Math.random() * 1.5) + "s");
    layer.appendChild(spark);
  }

  document.body.appendChild(layer);
  setTimeout(function () {
    layer.remove();
  }, 4200);
}

function finish() {
  clearInterval(timerId);
  activeQuiz = 0;
  const quiz = document.getElementById("quiz");
  const quizNext = document.getElementById("quizNext");
  if (quiz) quiz.classList.add("hidden");
  if (quizNext) quizNext.classList.remove("hidden");
}

function sendReward() {
  const rewardInput = document.getElementById("rewardInput");
  if (!rewardInput || !rewardInput.value.trim()) {
    alert(tr("rewardEmpty"));
    if (rewardInput) rewardInput.focus();
    return;
  }

  const message = "ខ្ញុំចង់បានរង្វាន់៖ " + rewardInput.value.trim();
  window.open("https://t.me/sovansaro?text=" + encodeURIComponent(message), "_blank", "noopener");
}

const submitButton = document.getElementById("submitBtn");
if (submitButton) {
  submitButton.addEventListener("click", checkAns);
}

const exitButton = document.getElementById("exitBtn");
if (exitButton) {
  exitButton.addEventListener("click", exitQuiz);
}

const quiz2ExitButton = document.getElementById("quiz2ExitBtn");
if (quiz2ExitButton) {
  quiz2ExitButton.addEventListener("click", exitQuiz2);
}

const quiz2NextButton = document.getElementById("quiz2Next");
if (quiz2NextButton) {
  quiz2NextButton.addEventListener("click", nextQuiz2);
}

const nextQuiz2Button = document.getElementById("nextQuiz2Button");
if (nextQuiz2Button) {
  nextQuiz2Button.addEventListener("click", startQuiz2);
}

const rewardSubmit = document.getElementById("rewardSubmit");
if (rewardSubmit) {
  rewardSubmit.addEventListener("click", sendReward);
}

updateLanguage();
loadQuizData().then(function () {
  drawProg();
  updateAttempts();
}).catch(function () {
  const status = document.getElementById("status");
  if (status) status.textContent = "Quiz server is unavailable. Please start the server and reload.";
});
