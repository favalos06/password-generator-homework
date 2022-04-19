//finish the variables
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "=",
];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCase = [
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
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
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
var passwordOptions = [];
var finalPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// shuffles the password characters
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// functions to get values
function getSpecialCharacter() {
  var specialCharacter =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  passwordOptions.push(specialCharacter.toString());
}

function getNumber() {
  var number =
    numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
  passwordOptions.push(number.toString());
}

function getUpperCaseLetter() {
  var uppCaseLetter = upperCase[Math.floor(Math.random() * upperCase.length)];
  passwordOptions.push(uppCaseLetter.toString());
}

function getLowerCaseLetter() {
  var lowCaseLetter = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwordOptions.push(lowCaseLetter.toString());
}

function generatePassword() {
  var length = parseInt(prompt("What is the length of your password"));

  // Reset to arrays if another password is made
  passwordOptions = [];
  finalPassword = [];

  // make sure the length is within 8-128
  if (length < 8) {
    alert("Password length must be more than 8");
    return null;
  }
  if (length > 128) {
    alert("Password length must be less than 128");
    return null;
  }

  // Alerts to get parameters
  var hasSpecialCharacter = confirm("Click Ok to include special characters");
  var hasNumbers = confirm("Click Ok to include numbers");
  var hasUpperCase = confirm("Click Ok to include uppercase letters");
  var hasLowerCase = confirm("Click Ok to include lowercase letters");

  // Check that at least one was chosen
  if (
    hasSpecialCharacter === false &&
    hasNumbers === false &&
    hasUpperCase === false &&
    hasLowerCase === false
  ) {
    alert("You have to select at least one character type!");
    return null;
  }

  // Get random values from the arrays if option is true
  for (let index = 0; index < length; index++) {
    if (hasSpecialCharacter) {
      getSpecialCharacter();
    }

    if (hasNumbers) {
      getNumber();
    }

    if (upperCase) {
      getUpperCaseLetter();
    }

    if (lowerCase) {
      getLowerCaseLetter();
    }
  }

  // Combine all
  for (var i = 0; i < length; i++) {
    finalPassword.push(passwordOptions[i]);
  }

  // randomize the order of the characters
  finalPassword = shuffle(finalPassword);
  // convert arr to string
  finalPassword = finalPassword.toString();
  // remove all commas
  finalPassword = finalPassword.replaceAll(",", "");
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
