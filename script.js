// Words used in the game
// const wordBank = [
//     "flexbox",
//     "algorithm",
//     "conditionals",
//     "interpolation",
//     "concatenation",
//
let parentImage = document.querySelector("#hangman-div");
let startingImage = document.querySelector("#platform");
let img = document.createElement("img");
img.src = "./images/head.png";
let headImage = document.querySelector("#head");
let torso = document.querySelector("#torso");
let rightArm = document.querySelector("#right-arm");
let leftArm = document.querySelector("#left-arm");
let rightLeg = document.querySelector("#right-leg");
let leftLeg = document.querySelector("#left-leg");

let allImages = document.querySelectorAll(".guy");
console.log(allImages);
console.log(img);
const word = "flexbox";
const imageArray = [];
const parent = document.querySelector("#new-game-button");
console.log(parent);
imageArray.push(headImage);
console.log(imageArray);
// 'DOMContentLoaded' event is to make sure that all HTML elements are loaded in the DOM before executing callback.
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed"); // Put console in place to make sure it works before I continued working.

  initializeKeyboard(); // Queries the document to find all the buttons and attempt to attach and eventListener to each.
});

// Should make keyboard interactive by selecting all keys and adding eventListeners.
const initializeKeyboard = () => {
  const buttons = document.querySelectorAll("#keyboard button"); // querySelectorAll functions kinda like CSS selectors in JS?
  console.log(buttons);
  let count = 0;
  let count2 = -1;
  // Element (button) is the button we do something to. Index is the position while it loops. Array is the entire buttons variable array.
  buttons.forEach((button, index, array) => {
    button.addEventListener("click", (event) => {
      let letterEl = document.createElement("div");
      letterEl.textContent = button.innerHTML;
      console.log(letterEl);
      parent.appendChild(letterEl);
      const letterArray = word.split("");
      letterArray.forEach((letter) => {
        console.log(letter);
        if (letter.toUpperCase() === button.innerHTML) {
          // startingImage.style.display = "none";
          // headImage.style.display = "show";
          // headImage.classList.add("size");
          console.log(allImages[count]);
          startingImage.style.display = "none";

          // parentImage.appendChild(allImages[count]);
          console.log(allImages[count]);

          allImages[count].style.visibility = "visible";
          allImages[count].style.height = "30vh";
          // allImages[count].style.width = "30vh";
          // allImages[count].src = "../images/head.png";
          if (count === 1) {
            headImage.style.display = "none";

            // allImages[count2].style.visibility = "hidden";
            allImages[count].style.visibility = "visible";
            allImages[count].style.height = "30vh";
          }
          if (count == 2) {
            torso.style.display = "none";

            allImages[count].style.visibility = "visible";
            allImages[count].style.height = "30vh";
          }
          if (count == 3) {
            leftLeg.style.display = "none";
            allImages[count].style.visibility = "visible";
            allImages[count].style.height = "30vh";
          }
          if (count == 4) {
            rightLeg.style.display = "none";
            allImages[count].style.visibility = "visible";
            allImages[count].style.height = "30vh";
          }
          if (count == 5) {
            leftArm.style.display = "none";
            allImages[count].style.visibility = "visible";
            allImages[count].style.height = "30vh";
          }

          count += 1;

          // parentImage.appendChild(img);
        } else if (count > 5) {
          alert("no");
        }
      });
    });
  });
};

function restart() {
  let count = 0;
}
