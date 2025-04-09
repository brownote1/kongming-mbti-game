
const quizData = [
    {
        question: "桃園三結義後，你初出茅廬，劉備三顧茅廬請你出山，你會怎麼做？",
        options: [
            { text: "思考全局後接受，開始擬定戰略藍圖", trait: "N" },
            { text: "以兄弟情誼感動，馬上加入幫忙", trait: "F" },
            { text: "仔細評估情勢後冷靜回應，保持距離觀察", trait: "T" },
            { text: "立即答應，全力行動，不計代價", trait: "J" }
        ]
    },
    {
        question: "赤壁之戰前，你主張聯合孫權抗曹操。面對風險你怎麼說服對方？",
        options: [
            { text: "用大局與邏輯推演說服對方", trait: "T" },
            { text: "強調情義與敵我關係，激起共鳴", trait: "F" },
            { text: "展示你長遠預測的洞察力", trait: "N" },
            { text: "準備周密文件與戰略清單", trait: "J" }
        ]
    },
    {
        question: "你要擬定《隆中對》，這份影響深遠的國策，你會？",
        options: [
            { text: "預想未來局勢演變，布署三國格局", trait: "N" },
            { text: "以劉備仁德為核心，感召天下", trait: "F" },
            { text: "思考軍事與後勤的精確平衡", trait: "T" },
            { text: "列出清晰可行的三階段行動計畫", trait: "J" }
        ]
    }
    // 其餘 7 題可擴充至完整版
];

let currentQuestion = 0;
let traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.onclick = () => {
            traits[opt.trait] = (traits[opt.trait] || 0) + 1;
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                showQuestion();
            } else {
                showResult();
            }
        };
        optionsEl.appendChild(btn);
    });
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const mbti =
        (traits.E > traits.I ? "E" : "I") +
        (traits.S > traits.N ? "S" : "N") +
        (traits.T > traits.F ? "T" : "F") +
        (traits.J > traits.P ? "J" : "P");

    document.getElementById("mbtiResult").innerText = mbti;

    const descriptions = {
        INTJ: "你是遠見與規劃的高手，偏好謀定後動。常以冷靜與邏輯著稱，是策略家型人格。",
        ENFP: "你充滿熱情、創意，是點燃團隊精神的火種。靈感豐富、樂觀進取。",
        ISFJ: "你溫暖謹慎、重視責任，是穩定支持的守護者。",
        ENTJ: "你天生領導者，果斷且具戰略眼光，能迅速整合資源達成目標。"
    };

    const desc = descriptions[mbti] || "你是個獨特的策略家，具有多樣潛能。";

    document.getElementById("description").innerText = desc;
}
