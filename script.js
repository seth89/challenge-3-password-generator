// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*?"
  var criteria = [];
  var seed = [];
  var length = prompt("Enter the length of your password");
  if (length < 8 || length > 128) {
    alert("Password must be greater than 8 and less than 128");
    return
  }
  var upperCase = confirm("Do you want uppercase letters included in your password?")
  if(upperCase) {
    alert("upper case letters will be used")
    var upperLetters = letters.toUpperCase()
    seed.push(upperLetters[Math.floor(Math.random() * upperLetters.length)])
    criteria.push(upperLetters)
  }
  var lowerCase = confirm("Do you want lowercase letters included in your password?")
  if(lowerCase) {
    alert("lower case letters will be used")
    seed.push(letters[Math.floor(Math.random() * letters.length)])
    criteria.push(letters)
  }
  var numbersIncluded = confirm("Do you want numbers included in your password?")
  if(numbersIncluded) {
    alert("numbers will be included")
    seed.push(numbers[Math.floor(Math.random() * numbers.length)])
    criteria.push(numbers)
  }
  var symbolsIncluded = confirm("Do you want symbols included in your password?")
  if(symbolsIncluded) {
    alert("symbols will be included")
    seed.push(symbols[Math.floor(Math.random() * symbols.length)])
    criteria.push(symbols)
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
