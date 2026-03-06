//Stack and Heap

//Stack: LIFO (Last In First Out) data structure. It is used for static memory allocation. It stores primitive values. It is faster than heap because it has a fixed size and does not require garbage collection.

//Heap: It is used for dynamic memory allocation. It is used for Reference of Original value and stores objects and functions. It is slower than stack because it has a variable size and requires garbage collection.

let myYoutubename = "Aman-data-wizard"; //stored in stack
let anotherName = myYoutubename; //stored in stack

anotherName = "Chai-or-Code";  //stored in stack but it is a different variable than myYoutubename

console.log(myYoutubename) //Aman-data-wizard
console.log(anotherName) //Chai-or-Code

let userOne = {
    email: "aman@gmail.com",
    Upi: "aman@ybl" 
}

let userTwo = userOne; //stored in stack but it is a reference to the object stored in heap

userTwo.email = "Rahul@Google.com"; //Original object in heap is modified through userTwo reference
console.log(userOne.email);
console.log(userTwo.email);