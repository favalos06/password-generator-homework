//finish the variables
var specialCharacters = ["@", "%", "+"];
var numberCharacters = ["1", "2", "3"];
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"];
var passwordOptions = [];
var finalPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //figure out a way to remove the commas
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var length = parseInt(prompt("What is the length of your password"));

    if (length < 8) {
        alert("Password length must be more than 8");
        return null;
    }
    if (length > 128) {
        alert("Password length must be less than 128");
        return null;
    }

    var hasSpecialCharacter = confirm("Click Ok to include special characters");

    var hasNumbers = confirm("Click Ok to include numbers");

    var hasUpperCase = confirm("Click Ok to include uppercase letters");

    var hasLowerCase = confirm("Click Ok to include lowercase letters");

    if (
        hasSpecialCharacter === false &&
        hasNumbers === false &&
        hasUpperCase === false &&
        hasLowerCase === false
    ) {
        alert("You have to select at least one character type!");
        return null;
    }

    if (hasSpecialCharacter) {
        passwordOptions = passwordOptions.concat(specialCharacters);
    }

    if (hasNumbers) {
        passwordOptions = passwordOptions.concat(numberCharacters);
    }

    if (upperCase) {
        passwordOptions = passwordOptions.concat(upperCase);
    }

    if (lowerCase) {
        passwordOptions = passwordOptions.concat(lowerCase);
    }

    for (var i = 0; i < length; i++) {
        //randomize the password option choice
        //look up Math.random
        finalPassword.push(passwordOptions[i]);
    }

    return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);