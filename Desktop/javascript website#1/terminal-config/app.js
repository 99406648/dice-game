// tglomiin buh gzart ashiglgdh global huvisgchdiig end zarlay
// tgloom duussn esehiig hadglah tuluviin huvisagch
var isNewGame;

// ali tglogch shoo shidh ve gdgiig end hdgalna.
var activePlayer;

// 2 tglogchn tsugluulsn ononuud
var scores;

// idvhtei tglogchn tsugluulj bga eeljiin onoo.
var roundScore;

// shoonii zurgiig uzulh elementiig DOM-s haij olod end hdgalay
var diceDom = document.querySelector(".dice");

// tglomiig ehlulne.
initGame();

// tglomiig shiner ehlhd beltgne.
function initGame() {
  // tgloom ehllee tuluvt orulna.
  isNewGame = true;

  // tglogchn eeljig hdglah huvisagch, 1 dugeer tglogchg 0, 2 dugaar tglogchg 1 gj temdgley.
  activePlayer = 0;

  // tglogchdiin tsuglulsn onoog hdglh huvisgch
  scores = [0, 0];

  // tglogchn eeljindee tsugluulj bga onog hdglh huvisgch
  roundScore = 0;

  // program ehlhd beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // tglogchdin nriig butsj grgh
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoog shidh event listner
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
    // 1 - 6 dtorh sanamsrgui neg too grgj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shonii zurgiig web dr grgj irne.
    diceDom.style.display = "block";

    // buusn snamsrgui toond hrgalzh shonii zurgiig web dr grgaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // buusn too ni 1 s yalgatai bol idvhtei tglogchn eeljin onog nmegduulne.
    if (diceNumber !== 1) {
      // 1-s ylgatai too buulaa. buusn toog tglogchd nemj ugnu
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 buusn tul tglogchn eeljig ene hsgt solij ugnu.
      switchToNextPlayer();
    }
  } else {
    alert("tgloom duussn bna. NEW GAME tovchg drj shineer ehlne uu");
  }
});

// HOLD tovchnii event listner
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    // ug tglogchn tsugluulsn eeljin onog global onoon dr ni nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // delgets dr onoog n uurchlnu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // ug tglogch hojsn esehig (onoo n 100-s ih esh) shalgh
    if (scores[activePlayer] >= 10) {
      // tglomiig duusn tluvt oruulna
      isNewGame = false;

      // ylagch gsn textiig nerniig n orond gargna
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // tglogchn eeljig solino.
      switchToNextPlayer();
    }
  } else {
    alert("Ð¢Ð¾Ð³Ð»Ð¾Ð¾Ð¼ Ð´ÑƒÑƒÑÑÐ°Ð½ Ð±Ð°Ð¹Ð½Ð°. NEW GAME Ñ‚Ð¾Ð²Ñ‡Ð¸Ð¹Ð³ Ð´Ð°Ñ€Ð¶ ÑˆÐ¸Ð½ÑÑÑ€ ÑÑ…Ð»ÑÐ½Ñ Ò¯Ò¯");
  }
});

// Ð­Ð½Ñ Ñ„ÑƒÐ½ÐºÑ† Ð½ÑŒ Ñ‚Ð¾Ð³Ð»Ð¾Ñ… ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ð´Ð°Ñ€Ð°Ð°Ñ‡Ð¸Ð¹Ð½ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ñ€ÑƒÑƒ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»Ð´ÑÐ³.
function switchToNextPlayer() {
  // Ð­Ð½Ñ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð½Ð´ÑÑ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Ð¾Ð½Ð¾Ð¾Ð³ 0 Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ð½Ó©Ð³Ó©Ó© Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ñ€ÑƒÑƒ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»Ð½Ñ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ð£Ð»Ð°Ð°Ð½ Ñ†ÑÐ³Ð¸Ð¹Ð³ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»ÑÑ…
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Ð¨Ð¾Ð¾Ð³ Ñ‚Ò¯Ñ€ Ð°Ð»Ð³Ð° Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  diceDom.style.display = "none";
}

// New Game Ð±ÑƒÑŽÑƒ Ð¨Ð¸Ð½Ñ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼ ÑÑ…Ð»Ò¯Ò¯Ð»ÑÑ… Ñ‚Ð¾Ð²Ñ‡Ð½Ð¸Ð¹ ÑÐ²ÐµÐ½Ñ‚ Ð»Ð¸ÑÑ‚ÐµÐ½ÐµÑ€
document.querySelector(".btn-new").addEventListener("click", initGame);