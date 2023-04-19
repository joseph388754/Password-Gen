// Create functions for 

//   prompt user for length of the pass between 8 to 128
//   prompt for lower, upper, numeric or special char if user wants
// validate if one of the above is selected
// display password

// step 1: create global variables for password
// step 2: create function to check pass length (use if statement to check)
// step 3: Prompt user for options for password 



// Assignment Code
var generateBtn = document.querySelector("#generate");

var password1 = '';
var password = '';

// This variables to get random characters
var low1 = "abcdefghijklmnopqrstuvwxyz";
var upper1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb1 = "0123456789";
var symb1 = "`~!@#$%^&*()-_=+[]{}\|;:',.<>/? ";
  

// Create an event listener for click
generateBtn.addEventListener('click', writePassword)


// This the function for generating the password
function generatePassword(){
  // Promp the user for length password
  var lengthPass = prompt("Please input the character length of your password from 8 to 128");

  // Check the password length if passed the 8 to 128
  if (lengthPass > 8 && lengthPass < 128){
     
  } else {
    alert("Please re-enter the right password length!");
    var lengthPass = prompt("Please input the character length of your password from 8 to 128");
  }
  
  // prompt the user and use confirm for true 
    var number1 = confirm("Did you want number included in your password?");
    var upperCase1 = confirm("Did you want Upper Case letter included in your password?");
    var lowerCase1 = confirm("Did you want Lower Case letter included in your password?");
    var symbols1 = confirm("Did you want symbols included in your password?");


  // just to check which statement are true
  console.log(number1);
  console.log(upperCase1);
  console.log(lowerCase1);
  console.log(symbols1);
    
  
// checking if at least one is selected
  if (!number1 && !upperCase1 && !lowerCase1 && !symbols1){
    alert("Please select at least one option");
  }

  
  if (number1) {
    password1 += numb1;
  }
  
  if (upperCase1) {
    password1 += upper1;
  }

  if (lowerCase1) {
    password1 +=  low1;
  }

  if (symbols1) {
    password1 += symb1;
  }


  var pass = '';
  for (var i = 0; i <= lengthPass; i++) {
    pass += password1[Math.floor(Math.random() * password1.length)];
  };


   return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



