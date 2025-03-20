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



let user: [number, string] = [1, 'Mosh']; //tuple
// Using intellisense again: if we want to access the first element,
// it'll offer to use 'number' methods or properties:
user[0].

*/

let user: [number, string] = [1, 'Mosh'];





