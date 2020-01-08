/*Mandar mensajes a consola*/
// Sending messages to the console

console.log('Hello world');  
console.error('This is an error');

/*Mandar alertas en la pagina*/
// Sending warning to the web page

//alert('hi');

//********var, let & const

let age = 30;
age = 31;
console.log(age);

//but const cant be changed
const age2 = 40;
//age2= 24;      // This provoques an error on the web console
console.log(age2);

//**********String, numbers, boolean, null, unefined */

const name= 'Karen';
const age3 = 20;
const rating = 4.7;
const isCool = true;
const x= null;  //not an object, hard to explain?
const y=undefined;
let z;   // undefined

console.log(typeof x);

//Concatenation
console.log('My name is '+name+' and I am '+age3);

//Template String
console.log(`My name is ${name} and I am ${age3}`);
const hi = `My name is ${name} and I am ${age3}`;
console.log(hi);
console.log(hi.length);
console.log(hi.toLowerCase());
console.log(hi.substring(0,2));
console.log(hi.split(' '));


//****Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = new Array('apples','oranges','pears');
console.log(fruits[1]);
fruits[4]='grapes;'
console.log(fruits);

//or add with push method

fruits.push('mangos');
console.log(fruits);

//to add at the beginning
fruits.unshift('pinapple');
console.log(fruits);

//pop to delete the last element of the array
fruits.pop();
console.log(fruits);

console.log(fruits.indexOf('oranges')); //The position of oranges

console.log(Array.isArray('hello'));


//***** Objects */

const person={
    firstName: 'Karen',
    lastName: 'P',
    age: 20,
    hobbies: ['music','lol','read'],
    address: {
        street: '50 main st',
        city: 'NY',
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);
const {firstName,lastName, address: {city}}= person;
console.log(city);

person.email = 'K@gmail.com';
console.log(person);

//not a JSON, but close to it

const to_do = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
id:3,
text: 'dentist appt',
isCompleted: false
}
];

console.log(to_do);

//JSON conversion

const to_doJSON = JSON.stringify(to_do);
console.log(to_doJSON)


//*********************** For */
for(let i=0; i<10;i++){
    console.log(i);
}

//**********************  While */

// crtl + } para comentar algo

let j=0;
while(j < 10){
    console.log(j);
    j++;
}


//  for (let todo of to_do){
//  console.log(todo.text);
// }

// to_do.forEach(function(todo){
    // console.log(to_do.text);
// });

// const todoText= to_do.map(function(todo){
    // return todo.text;
// });

const todoComplete = to_do.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(todoComplete);


//**************************** Conditionals */

// || = or   && = and
const l= '10';
if(l === 10){  // triple = to match also the type
     console.log('l is 10');
}else if (l>10){
    console.log('l is greater than 10');
}else
console.log('l is not 10');



const k = 17;
const color = k > 10 ? 'red' : 'blue';   // ? = then
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
            default:
                console.log('color not blue or red');
                break;
}

//**************************** functions

function addNums(num1=1,num2=3){
    return num1 + num2;
    
}

addNums(6,6);
console.log(addNums(5,5));


//or

const addNums2 = (num1 = 1, num2=1)=> num1+num2;    // => as a return
console.log(addNums2(5,5));


//********************************* Constructors */

//constructor function
// function Person(firstName,lastName,dob){
    // this.firstName= firstName;
    // this.lastName = lastName;
    // this.dob = new Date(dob);
    // this.getFullYear = function(){
        // return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
        // return  `${this.firstName} ${this.lastName}`;
    // }
// }

// Person.prototype.getFullName = function(){
    // return  `${this.firstName} ${this.lastName}`;
// }

class Person{
    constructor(firstName,lastName,dob){
        this.firstName= firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return  `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object

const person1 = new Person('K','P','9-10-2010');
const person2 = new Person('R','S','9-10-2019');
// console.log(person2.dob.getFullYear());
// console.log(person1.getFullYear());
console.log(person1.getFullName());
console.log(person1);


//*******************************  */

