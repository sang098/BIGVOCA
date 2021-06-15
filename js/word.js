const wordArray = [
  // 2001~
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
  {
    word: "alarm",
    mean: "불안, 공포, 경보(음), 경고신호, 경보장치, 불안하게 만들다, 경보장치를 달다",
  },
  {
    word: "dirty",
    mean: "더러운, 지저분한, 추잡한, 비열한, 정직하지 못한, 칙칙한, 더럽히다",
  },
  {
    word: "alter",
    mean: "변하다, 달라지다, 바꾸다, 고치다, (옷을) 고치다",
  },
  {
    word: "mild",
    mean: "(심하거나 강하지 않고) 가벼운[순한/약한], 온화한, 포근한, (감정이) 가벼운",
  },
  {
    word: "photograph",
    mean: "사진",
  },
  {
    word: "mouse",
    mean: "쥐, 생쥐",
  },
  {
    word: "void",
    mean: "(커다란) 빈 공간, 공동, 공허감",
  },
  {
    word: "elaborate",
    mean: "정교한, 정성을 들인, 자세히 설명하다, 상술하다, (계획 등을) 정교하게 만들다",
  },
  {
    word: "supreme",
    mean: "(계급 ' 위치 면에서) 최고의, (정도 면에서) 최고의, 최대의, 지대한",
  },
  {
    word: "sentiment",
    mean: "정서, 감정, (지나친) 감상",
  },
  {
    word: "secular",
    mean: "세속적인, (성직자가) 일반 대중들 속에 사는",
  },
  {
    word: "cheap",
    mean: "(값이)싼, 돈이 적게 드는, 싸구려의, 천박한, 저질스러운, 하찮은, 싸게",
  },
  {
    word: "crazy",
    mean: "정상이 아닌, 미친, 열광적인, 이상한, 말도 안 되는",
  },
  {
    word: "triumph",
    mean: "(큰) 업적[승리], 대성공, 승리감, 환희, 승리를 거두다, 이기다",
  },
  {
    word: "import",
    mean: "수입품, 수입, 중요성, 수입하다, (데이터를) 불러오다",
  },
  {
    word: "modest",
    mean: "(크기 ' 중요성 등이) 그다지 대단하지는 않은, 보통의, 겸손한, 얌전한, 수수한",
  },
  {
    word: "crystal",
    mean: "결정체, 크리스털[수정]",
  },
  {
    word: "margin",
    mean: "여백, (시간 ' 득표 수 등의) 차이[차],  (시간 ' 공간 ' 돈 등의) 여유, 추가 수당, 주변부",
  },
  {
    word: "castle",
    mean: "성, 성곽, 저택, 성곽으로 둘러싸다",
  },
  {
    word: "wheat",
    mean: "밀, 소맥",
  },
  {
    word: "egg",
    mean: "(조류 ' 어류 ' 곤충 등의) 알, 달걀, 계란, 난자",
  },
  {
    word: "smart",
    mean: "똑똑한, 깔끔한, 맵시 있는, (힘 있고) 잽싼, 욱신[따끔]거리다, 속상해 하다",
  },
  {
    word: "collapse",
    mean: "붕괴되다, 무너지다, (의식을 잃고) 쓰러지다, 실패하다, 폭락하다, 실패, 붕괴",
  },
  {
    word: "controversy",
    mean: "논란, 논쟁",
  },
  {
    word: "portrait",
    mean: "초상화, 인물 사진, (상세한) 묘사, (문서가) 세로 방향의",
  },
  {
    word: "charity",
    mean: "자선, 자선[구호]단체, 너그러움, 관용",
  },
  {
    word: "stretch",
    mean: "늘이다, (팽팽하게) 펴다, 기지개를 켜다, 뻗어 있다, 스트레칭, 뻗은 지역[구간]",
  },
  {
    word: "commit",
    mean: "(범죄를) 저지르다, (엄숙히) 약속하다, 전념하다, 헌신하다",
  },
  {
    word: "tape",
    mean: "테이프, 띠, 끈, 녹음[녹화]하다, 테이프[끈]로 묶다, (접착) 테이프로 붙이다",
  },
  {
    word: "rid",
    mean: "제거하다, 모면하게 하다",
  },
  {
    word: "adverse",
    mean: "부정적인, 불리한",
  },
  {
    word: "restore",
    mean: "회복시키다, 복원[복구]하다, 부활시키다, 돌려주다[반환하다]",
  },
  {
    word: "pot",
    mean: "냄비, 솥, 병, 화분, 항아리, (나무를) 화분에 심다, (동물을) 총으로 쏘다",
  },
  {
    word: "interpret",
    mean: "(의미를) 설명[해석]하다, (특정한 뜻으로)해석하다, 통역하다, 연주[연기]하다",
  },
  {
    word: "tough",
    mean: "힘든, 어려운, 냉정한, 굳센, (신체적으로) 튼튼한, 거친, 질긴, 부당한, 가혹한",
  },
  {
    word: "merit",
    mean: "장점, 이점, 가치, 가점, (칭찬 ' 관심 등을) 받을 만하다[자격 / 가치가 있다]",
  },
  {
    word: "compromise",
    mean: "타협, 절충, 타협하다, (원칙 등을) 굽히다[양보하다], 위태롭게 하다",
  },
  {
    word: "manifest",
    mean: "(감정 ' 태도' 특질을 분명히) 나타내다[드러내 보이다], 분명해지다, 분명한",
  },
  {
    word: "tribe",
    mean: "부족, 종족, 집단[무리], 족, 류",
  },
  {
    word: "butter",
    mean: "버터, 버터를 바르다",
  },
  {
    word: "cure",
    mean: "(아프지 않도록) 낫게 하다, 치유하다, (문제를) 고치다, 치유법[약], 해결책",
  },
  {
    word: "tide",
    mean: "조수, 밀물과 썰물, (여론의) 흐름, (좋지 않은 것의) 물결, (거센 감정의)파도",
  },
  {
    word: "medieval",
    mean: "중세의",
  },
  {
    word: "critique",
    mean: "비평, 평론, 비평[평론]하다",
  },
  {
    word: "regret",
    mean: "후회하다, 유감스럽게[애석하게/안타깝게] 생각하다, 유감, 애석, 후회",
  },
  {
    word: "spare",
    mean: "여분의, 예비용의, 여가의, 여분, (시간 등을) 할애하다, 면하게 해주다, 아끼다",
  },
  {
    word: "rope",
    mean: "밧줄, 로프, (밧줄로) 묶다",
  },
  {
    word: "mud",
    mean: "진흙, 진창",
  },
  {
    word: "upset",
    mean: "속상하게 만들다, (계획 ' 상황 등이) 잘못되게 만들다, 속상한, 혼란 상황, 속상함",
  },
  {
    word: "consist",
    mean: "(부분 ' 요소로)  되어[이루어져]있다, 존재하다, 양립[일치]하다, 공존하다",
  },
  {
    word: "sovereignty",
    mean: "통치권, 자주권, (국가의) 자주[독립]",
  },
  {
    word: "gesture",
    mean: "몸짓, 제스처, (감정 ' 의도의) 표시[표현], (손 ' 얼굴 등으로) 가리키다, 손짓을 하다",
  },
  {
    word: "intermediate",
    mean: "(두 가지 장소 ' 사물 등의) 중간의, (수준이) 중급의, 중급자, 중급 수준인 사람",
  },
  {
    word: "recommend",
    mean: "추천[천거]하다, (행동 방침 등을) 권고[권장]하다[권하다], 보기 좋게 만들다",
  },
  {
    word: "detect",
    mean: "(특히 알아내기 쉽지 않은 것을) 발견하다, 탐지하다, 간파하다",
  },
  {
    word: "humble",
    mean: "겸손한, (예의상 자기를 낮추는 표현에서) 변변치 않은, 미천한[보잘것없는]",
  },
  {
    word: "propose",
    mean: "(계획 ' 생각 등을) 제안[제의]하다, (~을 하려고)작정하다, 청혼하다, 제청하다",
  },
  {
    word: "tobacco",
    mean: "담배(담배 잎을 말린 것으로 모든 담배의 재료로 쓰이는 것)",
  },
  {
    word: "shake",
    mean: "흔들다, 털다, 떨다, (부정적인 의미로) 고개를 젓다, 악수를 하다, 흔들기, 떨림",
  },
  {
    word: "bowl",
    mean: "(우묵한) 그릇, 통, (무엇의) 우묵한 부분, (볼링용의) 볼, (볼링에서) 공을 굴리다",
  },
  {
    word: "peer",
    mean: "(나이 ' 신분이 같거나 비슷한) 또래[동배], (영국에서) 귀족, 유심히 보다",
  },
  {
    word: "immigration",
    mean: "(다른 나라에 살러 오는) 이주[이민], 출입국 관리소",
  },
  {
    word: "keen",
    mean: "열망하는, 열정적인[열렬한], 명민한, 이해가 빠른, 강한, 깊은, 예민한, 예리한",
  },
  {
    word: "funeral",
    mean: "장례식",
  },
  {
    word: "museum",
    mean: "박물관, 미술관, 기념관",
  },
];

const wordInputForm = document.getElementById("word-form");
const wordInput = document.getElementById("word-input");
const wordMean = document.getElementById("word-mean");
const wordResult = document.getElementById("word-result");
const beforeWord = document.getElementById("before-word");
const wordSubmitBtn = document.getElementById("word-submit-btn");
const correctWordBtn = document.getElementById("correct-word-btn");
const progressText = document.getElementById("progress");
const wordTotal = wordArray.length;

let wordMark;
let randomIndex;
let saveBefore;
let wordProgress = 1;

function seeCorrect() {
  wordInput.setAttribute("placeholder", `${wordArray[randomIndex].word}`);
}

function randomWord() {
  progressText.innerText = `${wordProgress}/${wordTotal}`;
  randomIndex = Math.floor(Math.random() * wordArray.length);
  console.log(wordArray[randomIndex]);
  wordMean.innerText = wordArray[randomIndex].mean;
  wordMark = wordArray[randomIndex].word;
}

function markWord(event) {
  event.preventDefault();
  if (wordMark === wordInput.value.toLowerCase()) {
    wordResult.innerText = "정답입니다.";
    saveBefore = wordArray[randomIndex].word;
    beforeWord.innerText = `이전 단어 : ${saveBefore}`;
    beforeWord.href = `https://en.dict.naver.com/#/search?query=${saveBefore}`;
    if (wordArray.length < 2) {
      wordResult.innerText = "축하합니다. 모든 문제를 다 풀었어요!";
      wordInput.setAttribute("disabled", "true");
      wordSubmitBtn.setAttribute("disabled", "true");
      correctWordBtn.setAttribute("disabled", "true");
    } else {
      wordArray.splice(parseInt(randomIndex), 1);
      wordInput.setAttribute("placeholder", ``);
      wordProgress = wordProgress + 1;
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
correctWordBtn.addEventListener("click", seeCorrect);
