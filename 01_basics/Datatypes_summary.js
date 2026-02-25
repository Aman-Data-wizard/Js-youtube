//Primitive datatypes: 
//number, 
// string, 
// boolean, 
// null, 
// undefined, 
// symbol
const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId) //false because symbol is unique

const bigNumber = 9007199254740991n; //bigint

console.log(typeof bigNumber)


//Non-primitive datatypes (Reference datatypes):
// object, Master -> Web Events -> Browser Events -> DOM Events -> Mouse Events -> click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave
// array, 
// function

const heros = ["Spiderman", "Ironman", "Thor"]; //Array is a type of object
let myObj = {
    name: "Bruce",
    age:22,
    isAvenger:false
}
console.log(typeof heros) //object

//check: https://262.ecma-international.org/5.1/#sec-11.4.3