// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  //Prompt the user to input password length. Will not allow empty value or value outside of the min/max values
  let pwdLengthNumber = prompt("Please enter a desired password lenght between 8 and 128 characters.");
  while (pwdLengthNumber < 8 || pwdLengthNumber > 128 || pwdLengthNumber === "") {
  pwdLengthNumber = prompt("The value entered is invalid. Please enter a desired password lenght between 8 and 128 characters. ");
  }
  pwdLength = pwdLengthNumber.valueOf();

  let useUpperCase = confirm("Do you want your password to contain Upper Case Letters?");
  let useLowerCase = confirm("Do you want your password to contain Lower Case Letters?");
  let useNumeric = confirm("Do you want your password to use Numeric values?");
  let useSpecial = confirm("Do you want your password to contain special characters?");

  //Alert the user that at least one set of characters must be selected in order to generate password.
  while (useUpperCase != true && useLowerCase != true && useNumeric != true && useSpecial != true) {
    alert ("At least one set of characters must be selected.");
    useUpperCase = confirm("Do you want your password to contain Upper Case Letters?");
    useLowerCase = confirm("Do you want your password to contain Lower Case Letters?");
    useNumeric = confirm("Do you want your password to use Numeric values?");
    useSpecial = confirm("Do you want your password to contain special characters?");
  }

  console.log(pwdLength, useUpperCase, useLowerCase, useNumeric, useSpecial);
  return pwdLength, useLowerCase, useUpperCase, useNumeric, useSpecial;
}
/*
// Function for getting a random element from an array
function getRandom() {
  let passwordCharacters = [];
  for (let i =0; i < pwdLength; i++) {
      let nextCharacter = characterCodes[Math.floor(Math.random() * characterCodes.length)]
      passwordCharacters.push(nextCharacter);
  }
}
*/

// Function for getting a random element from an array
//function getRandom(arr) {

//}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
//  var passwordText = document.querySelector('#password');

//  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);