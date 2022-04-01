// Assignment Code
var generateBtn = document.querySelector("#generate");

const howManyCharactersPrompt = () => {
  let howManyCharactersInput = Number(
    prompt(
      "How many characters do you want in your password? 8-128:"
    )
  );

  if (!howManyCharactersInput || Number.isNaN(howManyCharactersInput)) {
    return;
  }

  if (howManyCharactersInput <8) {
    
    howManyCharInput = howManyCharactersPrompt();
  } else if (howManyCharactersInput > 128) {
    howManyCharPrompt = howManyCharactersPrompt():
  }

  return howManyCharactersInput;
    
};

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols ="!@#$%^&*()_-+={}[]/\|";

 const includeCharacterPrompts = () => {
  let addLowercase = confirm("Add lowercase?");
  let addUppercase = confirm("Add uppercase?");
  let addNumeric = confirm("Add numbers?");
  let addSymbol = confirm("Add symbol characters?");

  let charlist = "";

  if (addLowercase) {
    charlist += uppercase;
  }
  if (addNumeric) {
    charlist += numbers
  }
  if (addUppercase) {
    charlist += uppercase;
  }
  if (addSymbol) {
    charlist += symbol;
  }
  if (charlist === "") {
    alert(
      "Cannot make a password. Password must include at least one type of character."
    );
    return;
  }

  return charlist;


};

let generatePassword = () => {
  let characterNumber = howManyCharactersPrompt();

  if (characterNumber === undefined) {
    return "";
  }

  let passwordPlaceHolder = includeCharacterPrompts();

  if (passwordPlaceHolder === undefined) {
    return "";
  }

  let newPassword = "";
  let randomindex;

  for (i = 0; i <= characterNumber; i++) {
    randomindex = Math.floor(Math.random() * passwordPlaceHolder.length);

    newPassword += passwordPlaceHolder[randomindex];

  }
};




// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password);

    passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
