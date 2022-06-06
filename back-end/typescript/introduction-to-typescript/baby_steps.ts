let yes: boolean = true;
let no: boolean = false;

let x: number = 1;

let string: string = 'Hello.';

function hello(): void{
    console.log('Hi.')
}

enum StudentStatus {
    Active,
    Inactive,
    Paused
}

let newStudent: StudentStatus = StudentStatus.Inactive;

/// MINOR EXERCISES

enum WeekDays {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum WindRose {
    North = "N",
    West = "W",
    East = "E",
    South = "S"
}
