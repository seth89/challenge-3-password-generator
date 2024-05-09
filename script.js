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
  var length = prompt("Enter the length of your password");
  if (length < 8 || length > 128) {
    alert("Password must be greater than 8 and less than 128");
    return
  }
  var upperCase = confirm("Do you want uppercase letters included in your password?")
  if(upperCase) {
    alert("upper case letters will be used")
    criteria.push(letters.toUpperCase())
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
