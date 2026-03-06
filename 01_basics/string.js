const name = "Aman";
const repoCount = 20;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ;//$ is used for interpolation, and to inject variable{},it is only used in backticks 

const gameName = new String("AmanHc");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());  //functions are also present in string object because of prototype inheritance

console.log(gameName.charAt(2));

console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5, 3);
console.log(anotherString);

const stringOne = "  Big Universe   ";
console.log(stringOne);
console.log(stringOne.trim()); //removes whitespace from both ends of a string

const url = "https://www.aman.com/learn%20javascript";
console.log(url.replace("%20", "-"))

console.log(url.includes("javascript"));