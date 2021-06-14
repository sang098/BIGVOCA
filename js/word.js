const wordArray = [
  {
    word: "shed",
    mean: "떨어뜨리다, 흘리다, 벗다, 털갈이를 하다, (빛을) 비추다, 보관하는 곳, 헛간",
  },
  {
    word: "vulnerable",
    mean: "취약한, 연약한, 영향 받기 쉬운",
  },
  {
    word: "faint",
    mean: "희미한, (가능성 등이) 아주 적은, 열의 없는, 실신할 것 같은, 기절하다, 실신",
  },
  {
    word: "ignore",
    mean: "무시하다, (사람을) 못 본 척하다, 묵살하다",
  },
  {
    word: "powder",
    mean: "가루, 분말, (화장품) 파우더, 파우더[분]를 바르다",
  },
  {
    word: "bacteria",
    mean: "박테리아, 세균",
  },
  {
    word: "expedition",
    mean: "탐험, 원정, 탐험[원정]대, (필요한 일을 하기 위한 짧은) 여행",
  },
  {
    word: "edit",
    mean: "(글 등을 발간할 수 있게) 수정[가필]하다, 편집하다, 편집장을 하다",
  },
  {
    word: "optical",
    mean: "시각적인, 시력을 보완하는, 광학의",
  },
  {
    word: "dull",
    mean: "따분한, 재미없는, 흐릿한, 둔탁한, 둔한, 둔해지다, 누그러지다, 굼뜨게 만들다",
  },
];

const wordInputForm = document.getElementById("word-form");
const wordInput = document.getElementById("word-input");
const wordMean = document.getElementById("word-mean");
const wordResult = document.getElementById("word-result");
const beforeWord = document.getElementById("before-word");
const correctWord = document.getElementById("correct-word");

let wordMark;
let randomIndex;
let saveBefore;

function seeCorrect() {
  wordInput.setAttribute("placeholder", `${wordArray[randomIndex].word}`);
}

function randomWord() {
  randomIndex = Math.round(Math.random() * wordArray.length);
  wordMean.innerText = wordArray[randomIndex].mean;
  wordMark = wordArray[randomIndex].word;
}

function markWord(event) {
  event.preventDefault();
  if (wordMark === wordInput.value) {
    wordResult.innerText = "정답입니다.";
    saveBefore = wordArray[randomIndex].word;
    beforeWord.innerText = `이전 단어 : ${JSON.stringify(saveBefore)}`;
    beforeWord.href = `https://en.dict.naver.com/#/search?query=${beforeWord.innerText}`;
    if (wordArray.length < 1) {
      wordResult.innerText = "축하합니다. 모든 문제를 다 풀었어요!";
      wordInput.setAttribute("disabled", "true");
    } else {
      wordArray.splice(parseInt(randomIndex), 1);
      wordInput.setAttribute("placeholder", ``);
      randomWord();
    }
  } else {
    wordResult.innerText = "오답입니다.";
  }
  wordInput.value = "";
}

function init() {
  randomWord();
}

init();
wordInputForm.addEventListener("submit", markWord);
correctWord.addEventListener("click", seeCorrect);
