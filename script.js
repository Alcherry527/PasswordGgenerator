// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // prompt user how many characters they want their password to be
  var passwordLegnth = parseInt(window.prompt("How Many Characters Would You Like For The Password"));
if (passwordLegnth < 8 || passwordLegnth > 128) {
  window.alert("The Password Must Be Between 8 And 128 Characters " );
return;
} 
 // use window.confirm for uppercase ie. yes/no questions
  var Uppercase = window.confirm("Would You Like The Password To Have Uppercase Letters");
  var Lowercase = window.confirm("Would You Like The Password To Have Lowercase Letters");
  var SpecialCharacters = window.confirm("Would You Like The Password To Have Special CHaracters");
  var Numbers = window.confirm("Would You Like To Use Numbers In The Password");

 while (!Uppercase && !Lowercase && !SpecialCharacters && !Numbers){
  alert ("You must select ok for yes and cancel for no")
  Uppercase = window.confirm("Would You Like The Password To Have Uppercase Letters");
  Lowercase = window.confirm("Would You Like The Password To Have Lowercase Letters");
  SpecialCharacters = window.confirm("Would You Like The Password To Have Special CHaracters");
  Numbers = window.confirm("Would You Like To Use Numbers In The Password");
  }

};

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword())
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }