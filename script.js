const questions = [ 
  {
    question: "【1】劉備三顧茅廬時，你正在隱居隆中。你該如何回應？",
    options: [
      { text: "分析天下形勢後，主動向劉備提出三分天下之策。", traits: ["N", "J"] },
      { text: "熱情接待劉備，並表示願意協助他一同改革亂世。", traits: ["E", "F"] },
      { text: "謙虛地說自己才疏學淺，但會默默為其獻策。", traits: ["I", "J"] },
      { text: "問清楚劉備的計畫與價值觀，判斷是否與你理念契合再決定。", traits: ["T", "P"] }
    ]
  },
  {
    question: "【2】劉備過世，託孤於你。你會？",
    options: [
      { text: "盡忠輔佐後主，不輕易干政，穩定政局。", traits: ["J", "F"] },
      { text: "擬定長遠策略，讓蜀漢在你死後也能持續運轉。", traits: ["N", "J"] },
      { text: "與群臣合作，分工治理，避免獨攬大權。", traits: ["E", "P"] },
      { text: "建立嚴格法紀，強化中央集權，維持秩序。", traits: ["T", "J"] }
    ]
  },
  {
    question: "【3】你初入蜀地，當地軍閥各自為政。你會怎麼處理？",
    options: [
      { text: "以德服人，建立尊賢任能的風氣。", traits: ["F", "J"] },
      { text: "以制度規範與考核重建軍隊秩序。", traits: ["T", "J"] },
      { text: "與軍閥溝通協調，漸進式整合權力。", traits: ["I", "P"] },
      { text: "激勵軍隊士氣，鼓舞人心重建信任。", traits: ["E", "F"] }
    ]
  },
  {
    question: "【4】你決定北伐曹魏，初次出征，你會？",
    options: [
      { text: "縝密制定兵分三路、後勤充足的作戰計劃。", traits: ["N", "J"] },
      { text: "快速出兵奇襲，擾亂敵方節奏。", traits: ["S", "P"] },
      { text: "派人滲透敵軍，收集情報後再決策。", traits: ["I", "T"] },
      { text: "親自率軍出征，以身作則激勵士氣。", traits: ["E", "F"] }
    ]
  },
  {
    question: "【5】魏延提出奇襲長安之計，但與你想法不同。你會？",
    options: [
      { text: "審慎分析其計劃風險後否決。", traits: ["T", "J"] },
      { text: "設法整合他的建議與你的規劃。", traits: ["N", "F"] },
      { text: "讓他在小範圍實施，測試其成效。", traits: ["P", "T"] },
      { text: "認為此法太過冒進，堅決反對。", traits: ["J", "S"] }
    ]
  },
  {
    question: "【6】北伐失利後，朝廷議論紛紛。你會？",
    options: [
      { text: "在奏章中檢討自責，強調對百姓與天命的虧欠。", traits: ["I", "F"] },
      { text: "列舉失敗原因，向後主說明全局戰略的重要。", traits: ["T", "J"] },
      { text: "靜心反思，計劃下一次更萬全的出征。", traits: ["I", "N"] },
      { text: "主動安撫民心與官員，維持穩定局勢。", traits: ["E", "F"] }
    ]
  },
  {
    question: "【7】你罹病未癒，但敵軍再犯。你會？",
    options: [
      { text: "忍病再出征，表示誓死保國。", traits: ["J", "F"] },
      { text: "安排副將領軍，自己坐鎮後方指揮。", traits: ["T", "J"] },
      { text: "暫緩軍事行動，等待身體康復。", traits: ["P", "S"] },
      { text: "請託神明占卜吉凶，尋求天命協助。", traits: ["N", "F"] }
    ]
  },
  {
    question: "【8】你設計木牛流馬，發明改善後勤。你怎麼推廣？",
    options: [
      { text: "詳述原理與使用方式，訓練部隊全面推行。", traits: ["T", "J"] },
      { text: "親自示範，讓部隊理解與接受此創新。", traits: ["E", "N"] },
      { text: "先交由信任副將試用，根據回饋再調整。", traits: ["P", "I"] },
      { text: "強調其能減少勞役之苦，獲得士兵支持。", traits: ["F", "S"] }
    ]
  },
  {
    question: "【9】臨終時，你會留什麼遺言？",
    options: [
      { text: "提醒後主謹慎任人，穩定內政。", traits: ["J", "S"] },
      { text: "告誡大家勿以成敗論英雄，堅守信念。", traits: ["F", "N"] },
      { text: "交代軍政制度與改革方向。", traits: ["T", "J"] },
      { text: "向家人表達感謝與祝福，告別此生。", traits: ["I", "F"] }
    ]
  },
  {
    question: "【10】如果你能選擇來生角色，你會？",
    options: [
      { text: "願再次轉世為軍師，繼續未竟之志。", traits: ["J", "N"] },
      { text: "選擇成為一介平民，自耕自足自在生活。", traits: ["P", "I"] },
      { text: "想當開創制度的改革者，改變歷史。", traits: ["T", "N"] },
      { text: "希望做個旅人，到處走訪天下百姓與風土。", traits: ["E", "S"] }
    ]
  }
];

const mbtiTraits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let currentQuestion = 0;

function startGame() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = () => {
      option.traits.forEach(trait => mbtiTraits[trait]++);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  const result = [
    mbtiTraits.E > mbtiTraits.I ? "E" : "I",
    mbtiTraits.S > mbtiTraits.N ? "S" : "N",
    mbtiTraits.T > mbtiTraits.F ? "T" : "F",
    mbtiTraits.J > mbtiTraits.P ? "J" : "P"
  ].join("");

  const descriptions = {
    ISTJ: { desc: "踏實可靠，堅守原則，注重秩序與責任。", match: ["曾國藩", "關羽"] },
    ISFJ: { desc: "關懷他人，謹慎細膩，默默奉獻。", match: ["黃月英", "賢內助們"] },
    INFJ: { desc: "理想主義者，有遠見與洞察力，內斂堅定。", match: ["諸葛亮", "林則徐"] },
    INTJ: { desc: "具戰略眼光的策士，理性、務實，重視效率。", match: ["曹操", "李世民"] },
    ISTP: { desc: "實幹派，冷靜應變，善於解決問題。", match: ["韓信", "魯班"] },
    ISFP: { desc: "溫柔自由，重視個人價值與當下感受。", match: ["陶淵明", "周瑜"] },
    INFP: { desc: "浪漫理想，感情豐富，追求心靈與世界和諧。", match: ["李白", "陸游"] },
    INTP: { desc: "理性思考者，探索萬物原理，喜歡思辨。", match: ["諸葛瑾", "朱熹"] },
    ESTP: { desc: "行動派，勇於冒險，當機立斷。", match: ["張飛", "呂布"] },
    ESFP: { desc: "開朗活潑，樂於助人，擁抱當下生活。", match: ["劉禪", "唐伯虎"] },
    ENFP: { desc: "充滿熱情與創意，感染他人，追求價值。", match: ["孫策", "林肯"] },
    ENTP: { desc: "喜辯型創新者，靈活多變，點子王。", match: ["王莽", "司馬懿"] },
    ESTJ: { desc: "領導力強，重視紀律與執行效率。", match: ["秦始皇", "曹仁"] },
    ESFJ: { desc: "和諧型關懷者，善於建立人際關係。", match: ["孔融", "趙雲"] },
    ENFJ: { desc: "富魅力的領袖，關心群體，擅長鼓舞他人。", match: ["劉備", "孔子"] },
    ENTJ: { desc: "果斷有謀略，能制定遠大目標並實踐。", match: ["孫權", "諸葛恪"] }
  };

  const mbtiInfo = descriptions[result];
  document.getElementById("mbtiResult").innerText = result;
  document.getElementById("mbtiDescription").innerText = mbtiInfo.desc;
  document.getElementById("historicalMatches").innerHTML = mbtiInfo.match.map(p => `<li>${p}</li>`).join("");
}

function restartGame() {
  currentQuestion = 0;
  for (let t in mbtiTraits) mbtiTraits[t] = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("cover").style.display = "block";
}
