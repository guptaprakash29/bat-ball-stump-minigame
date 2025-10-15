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
      return `It's a Tie.`;
    } else if (computerMove === "BALL") {
      return `User Won!`;
    } else {
      return `Computer Won!`;
    }
  } else if (userMove === "BALL") {
    if (computerMove === "BAT") {
      return `Computer Won!`;
    } else if (computerMove === "BALL") {
      return `It's a Tie.`;
    } else {
      return `User Won!`;
    }
  } else {
    if (computerMove === "BAT") {
      return `User Won!`;
    } else if (computerMove === "BALL") {
      return `Computer Won!`;
    } else {
      return `It's a Tie.`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  alert(
    `You have choosen ${userMove} . Computer choise is ${computerMove}. ${result} `
  );
}
