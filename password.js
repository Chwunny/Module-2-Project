const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alphaNumeric = /[a-zA-Z0-9]/
const requiredChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

console.log('Welcome to the password validator tool!')

reader.question(`Please enter a password. Your password must be: 10 characters long, have at least one number or letter, and contain at least 1 special character.`, function(input){
 if (input.length < 10){
     console.log(`Password creation unsuccessful. Password is only ${input.length} characters long.`)}
     else if (!alphaNumeric.test(input)){
     console.log(`Password creation unsuccessful. You must have at leat one alpha numeric value`)}
     else if (!requiredChar.test(input)){
     console.log(`Password creation unsuccessful. You must have at leat one special character`)}
     else {console.log(`Password created successfully!`), console.log(`
     ╔═╗┬ ┬┌─┐┌─┐┌─┐┌─┐┌─┐  ┬
     ╚═╗│ ││  │  ├┤ └─┐└─┐  │
     ╚═╝└─┘└─┘└─┘└─┘└─┘└─┘  o`)}
});