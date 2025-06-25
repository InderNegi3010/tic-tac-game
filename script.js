console.log("welcome to Tic Tac Toe");
const Reset = document.querySelector(".reset");

let music = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let move = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return move === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxpro = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxpro[e[0]] &&
      boxpro[e[1]] &&
      boxpro[e[2]] &&
      boxpro[e[0]].innerText === boxpro[e[1]].innerText &&
      boxpro[e[1]].innerText === boxpro[e[2]].innerText &&
      boxpro[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxpro[e[0]].innerText + " won"; // Display the winner
      isgameover = true; // Set game over state
      gameover.play(); // Play game over sound
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px"; // Show winning image
    }
  });
};

// Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText"); // Get the text inside the clicked box
  element.addEventListener("click", () => {
    if (boxText.innerText === "" && !isgameover) {
      // Check if the game is not over
      boxText.innerText = move; // Set the current player's move
      turnSound.play(); // Play turn sound
      checkWin(); // Check for a win
      if (!isgameover) {
        move = changeTurn(); // Update the turn only if the game is not over
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + move; // Update the turn display
      }
    }
  });
});

// Reset Game Functionality
const resetGame = () => {
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach((box) => {
    box.innerText = ""; // Clear the text in each box
  });
  move = "X"; // Reset the move to "X"
  isgameover = false; // Reset the game over state
  document.getElementsByClassName("info")[0].innerText = "Turn for " + move; // Reset the turn display

  // Reset the image size
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px"; // Reset to original size or hide
};

// Add a reset button functionality
Reset.addEventListener("click", resetGame);