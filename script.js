// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    // prompt user how many characters they want their password to be
    var passwordLength = parseInt(window.prompt("How Many Characters Would You Like For The Password"));
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("The Password Must Be Between 8 And 128 Characters ");
        return;
    }
    // use window.confirm for uppercase ie. yes/no questions
    var Uppercase = window.confirm("Would You Like The Password To Have Uppercase Letters");
    var Lowercase = window.confirm("Would You Like The Password To Have Lowercase Letters");
    var SpecialCharacters = window.confirm("Would You Like The Password To Have Special CHaracters");
    var Numbers = window.confirm("Would You Like To Use Numbers In The Password");

    //I want the window to state the alert prior to the statements below. not sure what condition to place
    while (!Uppercase && !Lowercase && !SpecialCharacters && !Numbers) {
        alert("You must select ok for yes and cancel for no")
        Uppercase = window.confirm("Would You Like The Password To Have Uppercase Letters");
        Lowercase = window.confirm("Would You Like The Password To Have Lowercase Letters");
        SpecialCharacters = window.confirm("Would You Like The Password To Have Special CHaracters");
        Numbers = window.confirm("Would You Like To Use Numbers In The Password");
    }

    var characters = "abcde"
    var password = ""
    for (let i = 0; i < passwordLength; i++) {
        var randomindex = Math.floor(Math.random() * characters.length);
        password = password + characters[randomindex];
    }

    return password
    // int randomNum = (int)(Math.random() * 101);  // 0 to 100
};

//where to put this because not returning
//var password = ""
//var characters = "abcde"
// if
//characters = characters + "123"