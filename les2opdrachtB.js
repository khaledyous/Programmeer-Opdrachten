var readlinesync = require('readline-sync');

var age = readlinesync.question("Goedendag, Hoe oud bent u? ");
if(age >= 18){
    console.log("Top u voldoet aan de leeftijd grens veel plezier");
} else {
    console.log("het spijt ons maar u toegang wordt hierbij geweigerd");
};