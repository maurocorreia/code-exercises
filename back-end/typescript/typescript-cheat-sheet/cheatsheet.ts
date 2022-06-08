/*          TypeScript CHEAT SHEET V 0.1 - [ON PROGRESS]          */


        // Common packages and commands.
/*
npm install -D @tsconfig/node14 – Installing TypeScript compiller.
npm install -D @types/node - Installing package for node to stop being a crybaby.
npx tsc --init | tsc --init - To generate tsconfig.json file.

npx tsc | tsc - To transpile all .ts files into .js files.
node fileName.js - To execute the transpiled files.
*/


        // Primitive types.
const truth: boolean = true;
const zero: number = 0;
const phrase: string = "Phrase.";

/* Void is used when there's no return in a function. */
function hello():void {
    console.log('Hi');
}

/* Enum is a special type, used when you have related values.
   It starts with 0, and if you put any value it'll continue in the next item, one by one. */
enum SchoolGrades {
    A = 1,
    B,
    C,
}

const myGrade: SchoolGrades = SchoolGrades.B; // Output: myGrade = 2;


        // Object types.s
/* ARRAY | OBJECT | CLASS | INTERFACE | GENERICS */