// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //variables containing letters, numbers and symbols
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*?"
  //array for criteria that holds the letters, numbers or symbols a user selected
  var criteria = [];
  //array for selecting random criteria that is included in the password
  var seed = [];
  //prompts the user to make sure the length is correct for whats allowed
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
  var lowerCase = confirm("Do you want lowercase letters included in your password?") //confirms prompt asks question to user, is true or false based on answer.
  //if lowercase is true then it pushes the criteria and seed it needs.
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
  //makes the user select at least 1 criteria 
  if(criteria.length < 1) {
    alert("You must select one criteria");
    return
  }

  //takes the criteria and puts it all into 1 index and joins it into one string 
var passwordChar = criteria.flat(1).join(""); 
//used empty string to add characters to the string and to use for the while loop.
var prePassword = ""

//loops and adds random characters to prepassword until the length is equal to the users selected length.
while(prePassword.length < length){
  prePassword += passwordChar[Math.floor(Math.random() * passwordChar.length)];
}
var seedchar = seed.flat(1).join("");
console.log(prePassword.length);
console.log(seed.length);
//slice the length of the string to include the correct criteria selected by the user
var shortPass = prePassword.slice(seed.length);
var password = shortPass += seedchar
return password; //returns final password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
