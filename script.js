
var generateBtn = document.querySelector("#generate");


// All of different options for the
var letters = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r", "s","t", "u", "v","w", "x", "y","z"];

var lettersCaps = letters.map(element => {
  return element.toUpperCase();
});

var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "}", "|", "~" ];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword(){
  var finalpassword = ""
  var pwlength = window.prompt("Choose password length between 8 and 128 characters");

  if (pwlength < 8) {
    window.alert("Please choose password length greater than 8 characters");
    generatePassword();
  }  if (pwlength > 128) {
    window.alert("Please choose password length less than 128 characters")
    generatePassword();
  }
 



  var inclLower = window.confirm("Do you want to include lower case characters?");
  console.log(inclLower);

  var inclUpper = window.confirm("Do you want to include Upper Case characters?");
  console.log(inclUpper);

  var inclSpecial = window.confirm("Do you want to include special characters?");
  console.log(inclSpecial);

  var inclNumbers = window.confirm("Do you want to include numbers?");
  console.log(inclNumbers);

  for (var i=0; i < pwlength;i++){
    if (inclLower){
      finalpassword += letters[Math.floor(Math.random()*letters.length)]
    }
    if(inclUpper){
      finalpassword += lettersCaps[Math.floor(Math.random()*lettersCaps.length)]
    }
    if(inclSpecial){
      finalpassword += special[Math.floor(Math.random()*special.length)]
    }
    if(inclNumbers){
      finalpassword += numbers[Math.floor(Math.random()*numbers.length)]
    }
  }
console.log(finalpassword)
return finalpassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

