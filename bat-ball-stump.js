let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return ` Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
  },
};
function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "BALL";
  } else {
    return "STUMP";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "BAT") {
    if (computerMove === "BAT") {
      score.tie++;
      return `It's a Tie.`;
    } else if (computerMove === "BALL") {
      score.win++;
      return `User Won!`;
    } else {
      score.lost++;
      return `Computer Won!`;
    }
  } else if (userMove === "BALL") {
    if (computerMove === "BAT") {
      score.lost++;
      return `Computer Won!`;
    } else if (computerMove === "BALL") {
      score.tie++;
      return `It's a Tie.`;
    } else {
      score.win++;
      return `User Won!`;
    }
  } else {
    if (computerMove === "BAT") {
      score.win++;
      return `User Won!`;
    } else if (computerMove === "BALL") {
      score.lost++;
      return `Computer Won!`;
    } else {
      score.tie++;
      return `It's a Tie.`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  // console.log(score);
  alert(
    `You have choosen ${userMove} . Computer choise is ${computerMove}. ${result}  
    ${score.displayScore()}`
  );
}
