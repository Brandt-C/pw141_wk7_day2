console.log("HIIIIIIIIIIIIIIIIIIII")

console.log(NaN)
console.log(typeof NaN)

console.log(NaN == NaN)
console.log(NaN === NaN)



// JS Objects

// {'key': 'value'}  --> object
// object prototype --> kinda a reference to a class

// simple object

let animal = {
    animalName : "Bald Eagle",
    age : 21,
    color : 'Brown' ,
    3 : '3'
}
console.log(animal)

// access values w/ bracket notation
console.log(animal['age'])

// access values w/ dot notation
console.log(animal.age)

// add to object

animal.height = "36inches";
animal[4] = '4'

console.log(animal)

animal.height = 38.45

console.log(animal)

delete animal[4]


console.log(animal)

let animals = {
    eagles : {
        'Bald' : {
            colors : ['Brown', "White"],
            flight : true,
            wingspan : 72
        },
        'Golden' : {
            colors : ["Brown", "Black", "Gold"],
            flight : true,
            wingspan : 84
        }
    }, 
    bears : {}
}

console.log(animals.eagles['Bald']['colors'])
console.log(animals.eagles.Bald.colors)

// for of and for in --> looping through indexes or values for array
for (x of animals.eagles.Bald.colors){
    console.log(x)
}
for (prop in animals.eagles){
    console.log(prop)
}

// .keys(), .values(), .items() --> python 

// in JS :
console.log(Object.keys(animals))
console.log(Object.values(animals))

console.log("Let's talk about CLASSES. . .  or object prototypes")


// custom object prototypes
// 3 diff ways


// 1  the first
function Dog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color =color;
    this.tail = tail;

    this.printInfo = function(){
        console.log(`This is a ${color} ${breed} named ${name}.`)
    };
    
}
let pup = new Dog('Rufus', 'Mutt', 'Brown/White', false)
pup.printInfo()
console.log(pup)


// class-based object

class DogClass {
    constructor(name, breed, color, tail=true){
        this.name = name;
        this.breed = breed;
        this.color =color;
        this.tail = tail;
    }
    printInfo(){
        console.log(`This is a ${this.color} ${this.breed} named ${this.name}.`)
    }
}

let new_pup = new DogClass('Spot', "Pit", "Brindle", false)
new_pup.printInfo()

class Pug extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true );
        this.lazy = "super";
        this.lazyFactor = 0
    };
    noise(){
        console.log('SNORT');
        this.lazyFactor += 10;
        console.log(`how lazy is this pug?  ${this.lazyFactor}`)
    };
}
let puggy = new Pug('Paul', 'Pug', 'Black');
puggy.printInfo()
console.log(puggy.noise)
puggy.noise()
puggy.noise()
puggy.noise()

function DogArrow(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color =color;
    this.tail = tail;

    this.printInfo = () => {
        console.log(`This is a ${this.color} ${this.breed} named ${this.name}.`)
    }
}

let nex_pup = new DogArrow('Lassie', 'Sheep-dog', 'White/Brown', true)
nex_pup.printInfo()


// callbacks

// Everything in JS is an object. . . including funcs.

// that means that we can have functions passed into or returned from a function

//  a higher order func is a function that has a function passed in as an arguement
// examples from python
// map, filter, reduce, sort

// the classic example -->  let's cook a frozen pizza
//  the goal:  eat the pizza --> preceded by cooking the pizza --> 
// putting the pizza in oven. . . preheat the oven . . .
// etc. . . 

// let first = () => {
//     setTimeout(()=>console.log('First!'), 5000)
// }
// let second = () => {
//     console.log('second');
// }
// let third = () => {
//     setTimeout(()=>console.log('Third?'), 2000)
// }

// first();
// second();
// third();


// let attendClass = (subject, callback) => {
//     alert(`Attending ${subject} class!`);
//     callback();
// }
// let endClass = () => {
//     console.log('Class is over.')
// }

// attendClass('HTML', endClass);


// func1(()=>{
//     func2(()=>{
//         func3(()=>{
//             func4(()=>{
//                 func45(()+>{
//                     // CALLBACK HELL!
//                 })
//             })
//         })
//     })
// } )

//promises, the JS solution to callback hell

let isEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// How to deal with a promise?
// .then()  method handles the resolve path
// .catch()  method handles the reject path
//  a note, you'll commonly see .then().then().then().catch()

// console.log(isEven(3))
isEven(5).then( (result) => {
    console.log(`Even number ${result}`)
}).catch( (result) => {
    console.log(`Nope, odd number ${result}`)
})

let oddity = isEven(7).then( (result) => {
    console.log(`Even number ${result}`)
}).catch( (result) => {
console.log(`Nope, odd number ${result}`)})

// async/await

let increaseSlow = (base, increase) => {
    return new Promise( (resolve) => { setTimeout( () => resolve(base + increase), 3000)})};

let raise = async (salary, raise) => {
    let new_salary = await increaseSlow(salary, raise);
    console.log(`Congrats on your raise, you now make ${new_salary}`);
}

raise(50000, 65000)

// JS closure

/* A closure is a self-invoking function that can then be set to a variable 
and return a funciton expression
*/

let countUp = ( function () {
    let counter = 0;  // THIS is what I meant by a private variable!
    return function () {console.log(counter++)}
})()
countUp();
countUp();
countUp();
countUp();
countUp();

let addNames = ( () => {
    let names = [];
    console.log('adding names');
    return (name) => {
        names.push(name);
        console.log(names)
    }
})()

addNames('Brandt')
addNames('Buhay')
addNames('Bryce')
// console.log(names)





