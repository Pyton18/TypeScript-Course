/*

Older versions of the file by Mosh (then he updated content and code in the same file:

0- WELCOME
console.log('Hello, world!'); //this is a comment. This is JavaScript language

1- GETTING STARTED WITH TYPESCRIPT
let age: number = 20;
if (age <= 50)
    age += 10;
console.log(age);

2- FUNDAMENTALS
let sales: number = 123_456_789; //underscore is used to make the number more readable
let course: string = 'TypeScript';
let is_published: boolean = true;


let sales = 123_456_789; //underscore is used to make the number more readable
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = 'a';

//best practices say to avoid using 'any' type because it defeats the purpose of using TypeScript, 
//which is to fix the type of variables and thus to catch errors at compile time.
// If you use 'any' type, you lose that benefit.

function render(document: any) {    // This is a bad practice. 
                                    // The ': any' was added so that the code would compile, 
                                    // because the settings in tsconfig.json are set to strict mode, 
                                    // which would not allow this compile implicit any types.  
                                    // We have to explicit them or change the settings.
    console.log(document);
}


let numbers = [1, 2, '3'];          // This doesn't show an error because javascript allows arrays to 
                                    // have different types of elements. They're dinamyc.
let numbers2: number[] = [1, 2, 3]; // This is a better way to define an array of numbers in TS.
let numbers3 = [1, 2, 3];           //TS will already understand that this is an array of type numbers.
let numbers4 = [];                  // If we don't explicit its elements, TS will infer it is of type 'any'.

//Let's use intellisense
let numbers: number[] = [];
numbers.forEach(n => n. //there, the intellisense detects that after 'n.' should only offer to use 
                        // methods or properties of a number.


TUPLES:
let user: [number, string] = [1, 'Mosh']; //tuple
// Using intellisense again: if we want to access the first element,
// it'll offer to use 'number' methods or properties:
user[0].

let user: [number, string] = [1, 'Mosh'];
//there's one property for arrays that is available for tuples: push.
//but this property is troublesome because it will add another element and ts won't detect it.
user.push(2);
console.log(user);


ENUMS:
//const small = 1;
//const medium = 2;
//const large = 3;

enum Size { Small, Medium, Large}; //this one will start with Small = 0, Medium = 1, Large = 2
enum Size { Small = 's', Medium = 'm', Large = 'l'};

with the following, the generated js code will be harder to understand.

enum Size { Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize); //output: 2 because Medium was automatically defined as 2 after Small = 1.

but with const enums, the generated js code will be easier to understand.
const enum Size { Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize); //output: 2 because Medium was automatically defined as 2 after Small = 1.


FUNCTIONS:
classic function:
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;

}

calculateTax(10_000, 2022);

function with optional parameters:
function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

better way to write the function with optional parameters. 
It'll be with a default value. It'll already know it is a number:

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;

}

calculateTax(10_000);

OBJECTS:

let employee: {
    id: number;
    name?: string;
} = {id: 1}; //be careful here with the = and the :. It's not the same as in the function.

employee.name = 'Mosh'; //here we define name property.

// But it doesn't make too much sense to declare name as optional and then define it,
// because every employee has a name

So it should be directly:

let employee: {
    id: number;
    name?: string;
} = {id: 1, name: 'Mosh'};

let employee: {
    readonly id: number; //this way we can't change the id property in the future.
    name?: string;
    retire: (date: Date) => void; //this is a function that receives a date and returns nothing.
} = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log('Retired on ' + date);
    }
};

3- ADVANCED TYPES
TYPE ALIASES:

type Employee = { //Pascal case, starting with a capital letter
    readonly id: number; //this way we can't change the id property in the future.
    name: string;
    retire: (date: Date) => void; //this is a function that receives a date and returns nothing.
}

//now we can use this type to define an employee:
let employee: Employee = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log('Retired on ' + date);
    }
};

UNION TYPES:


INTERSECTION TYPES:
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.20462;
    else
        return weight = parseInt(weight) * 2.20462;
}

LITERAL TYPES:
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

LITERAL TYPES:
type Quantity = 1 | 2 | 3;
let qty: Quantity = 1;

type Metric = 'kg' | 'lbs';

NULLABLE TYPES:
function greet(name: string | null | undefined) {
    if (name)
        console.log('Hello, ' + name.toUpperCase());
    else
        console.log('Hello, guest!');
}

OPTIONAL CHAINING:
//most basic way of solving the null:
type Customer = {
    birthday: Date;
  };  

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
  }
  
  let customer = getCustomer(0);
  
  if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
  }
  


//better way of solving the null:
//first we're defining the type
type Customer = {
    birthday?: Date
};

//here we're defining the function. 
// It receives an id and returns a customer or null or undefined. 
// If the id is 0, it returns null. If not, it returns a Customer with its birthday.
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

//here we're calling the function and chaining the 
// optional chaining operator with the use of '?'.
let customer = getCustomer(0)
console.log(customer?.birthday);


//taking it further, we can use the optional chaining operator with types.
//OPTIONAL PROPERTY ACCESS OPERATOR, '?':
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);

console.log(customer?.birthday?.getFullYear()); //this will return undefined because the birthday is undefined.

//OPTIONAL ELEMENT ACCESS OPERATOR, '?[]':
//it is useful when we're working with arrays.
// Maybe there's a position that doesn't exist, it is null or undefined
//customers?.[0]; //this will return undefined if customers is undefined or null.

//THE NULLISH COALESCING OPERATOR, '??':
let speed: number | null = null;
let ride = {
    speed: speed || 30
}; //this will return 30 because speed is null.
// But this would be a problem if speed was 0, because it'd also return 30.


let speed: number | null = null;

let ride = {
    speed: speed !== null ? speed : 30
}; but there's a simpler way.

let speed: number | null = null;

let ride = {
    speed: speed ?? 30
}; //this will return 30 because speed is null. 
// It also works with undefined. 
// But if speed is 0 or false, it'll return 0 or false.

TYPE ASSERTIONS:

THE UNKNOWN TYPE:
function render(document: any) {
  document.move();
  document.fly();
  document.whateverWeWant();
} //we won't have any errors here because 'any' type is too permissive.
 // but in fact, document might not have these methods.

function render(document: unknown) {
  document.move();
  document.fly();
  document.whateverWeWant();
} //we'll have an error because 'unknown' type needs to know if those methods exist beforehand.

function render(document: unknown) {
  // Narrowing
  if (typeof document === 'string') {
    document.toUpperCase();
  }
}// here we're narrowing the type of document to string.
// but typeof only works with primitive types like string, number, boolean, symbol, bigint, and undefined.

function render(document: unknown) {
    // Narrowing
    if (document instanceof WordDocument) {
      document.toUpperCase();
    }
  } // here we're narrowing the type of document to WordDocument. and gets fixed.





THE NEVER TYPE:
function processEvents(): never {
    while (true) {
        //process events
    }
}
processEvents(); //this function will never return anything. It'll run forever.
console.log('Hello, world!'); //this will never be executed.


function reject(message: string): never {
  throw new Error(message);
}
reject('...');
console.log('Hello World'); // This will never be executed

EXERCISES

type Bird = {
    fly: () => void; //this is a function that receives nothing and returns nothing.
};

type Fish = {
    swim: () => void;
};

type Pet = Bird | Fish;

type Days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

// First code snippet
let user = getUser();
console.log(user && user.address ? user.address.street : undefined);
//let user = getUser();
console.log(user?.address?.street);


// Second code snippet
let x = foo !== null && foo !== undefined ? foo : bar();
let x = foo ?? bar();

4- CLASSES, INTERFACES AND OBJECT-ORIENTED PROGRAMMING

class Account {
    id: number;
    owner: string;
    balance: number;
} //this throws an error because it has not initializer and is not definitely 
 //assigned in the constructor.

*/


class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        }

    deposit(amount: number): void{
        if (amount<= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }

}