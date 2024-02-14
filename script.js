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



// Function to generate password with user input
function generatePassword() {
  
  //Prompt the user to input password length. Will not allow empty value or value outside of the min/max values
<<<<<<< HEAD
  let pwdLengthNumber = prompt("Please enter your desired password length between 8 and 128 characters.");
  while (pwdLengthNumber < 8 || pwdLengthNumber > 128 || pwdLengthNumber === "") {
=======
  let pwdLengthNumber = prompt("Please enter your desired password lenght between 8 and 128 characters.");
  while (pwdLengthNumber < 8 || pwdLengthNumber > 128 || pwdLengthNumber === "" || isNaN(pwdLengthNumber)) {
>>>>>>> f8a52bf897ee87f4f2f2e1188b2b11d66b30fa50
  pwdLengthNumber = prompt("The value entered is invalid. Please enter a numeric desired password lenght between 8 and 128 characters. ");
  }
  pwdLength = pwdLengthNumber.valueOf(); 

  let useUpperCase = confirm("Do you want your password to contain Upper Case Letters?");
  let useLowerCase = confirm("Do you want your password to contain Lower Case Letters?");
  let useNumeric = confirm("Do you want your password to use Numeric values?");
  let useSpecial = confirm("Do you want your password to contain Special characters?");

  //Alert the user that at least one set of characters must be selected in order to generate password.
  while (useUpperCase != true && useLowerCase != true && useNumeric != true && useSpecial != true) {
    alert ("At least one set of characters must be selected.");
    useUpperCase = confirm("Do you want your password to contain Upper Case Letters?");
    useLowerCase = confirm("Do you want your password to contain Lower Case Letters?");
    useNumeric = confirm("Do you want your password to use Numeric values?");
    useSpecial = confirm("Do you want your password to contain Special characters?");
  }

  //Set up array from which password characters will be selected based on the user's inputs
  let characterCodes = [];
  //adds Lower Cased characters if selected as true
  if (useLowerCase) characterCodes = characterCodes.concat(lowerCasedCharacters);
  //adds Upper Cased characters if selected as true
  if (useUpperCase) characterCodes = characterCodes.concat(upperCasedCharacters);
  //adds Numeric characters if selected as true
  if (useNumeric) characterCodes = characterCodes.concat(numericCharacters);
  //adds Special characters if selected as true
  if (useSpecial) characterCodes = characterCodes.concat(specialCharacters);

  // Loop for getting a random element from an array for as many characters requested in the passowrd
  let passwordCharacters = [];
  for (let i =0; i < pwdLength; i++) {
    //Selecting a random element from the array based on user inptuts and adding it to a new array
      let nextCharacter = characterCodes[Math.floor(Math.random() * characterCodes.length)]
      passwordCharacters.push(nextCharacter);
  }
  return passwordCharacters.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input. When run, it invokes the generatePassword function and writes the resulting passord to the #password element.
function writePassword() {
  var pwdLength, useUpperCase, useLowerCase, useNumeric, useSpecial;
  var password = generatePassword(pwdLength, useUpperCase, useLowerCase, useNumeric, useSpecial);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button. WHen clicked, the Write password function is run
generateBtn.addEventListener('click', writePassword);