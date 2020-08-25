// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById("generate");
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener("click", displayNewPassword);

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword() {
  let criteria = getCriteria();
  let password = generatePassword(criteria);
  let passwordText = document.getElementById("password");
  passwordText.value = password;
}

/* Your solution code goes here ... */
function getCriteria() {
  let lowercaseYesNo = confirm(
    "Include lowercase letters? Ok = Yes, Cancel = No"
  );
  let uppercaseYesNo = confirm(
    "Include uppercase letters? Ok = Yes, Cancel = No"
  );
  let numbersYesNo = confirm("Include numbers? Ok = Yes, Cancel = No");
  let specialYesNo = confirm(
    "Include special characters? Ok = Yes, Cancel = No"
  );
  userCriteria = [];
  if (lowercaseYesNo === true) {
    userCriteria.push("lowercase");
  }
  if (uppercaseYesNo === true) {
    userCriteria.push("uppercase");
  }
  if (numbersYesNo === true) {
    userCriteria.push("numbers");
  }
  if (specialYesNo === true) {
    userCriteria.push("special");
  }
  console.log(userCriteria);
  return userCriteria;
}

function generatePassword(arg) {}

let specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
