// Simple variable

let userName: string = "himel";
let id: number = 44;
let isValid: boolean = false;
let value:any = "any value";

let ids: number[] = [1,2 ,3 ,4];
let arr: any[] = [1, "bla", false];

// Tuple
let person: [number, string, boolean] = [1, 'himel', true];
let employee: [number, string][];

employee = [
    [1, 'himel'],
    [3, 'mamun'],
    [4, 'hasib'],
]

// Union
let _id: string | number;
_id = "this is working as well";
_id = 32323;

// enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Left)

enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

console.log(`Direction1.Down`, Direction1.Down)

// Objects

const user: {
    uName: string,
    id: number,
    age: number,
} = {
    uName: "himel",
    id: 23,
    age: 23
}

// or

type Car = {
    cName: string,
    cPrice: number
}

const car: Car = {
    cName: "BMW",
    cPrice: 3444
}

// Type assertion

let cId: any = 2;
let customerId = <number>cId;
customerId = cId as number

// Functions

function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log(`addNumbers(3, 5)`, addNumbers(3, 5));
