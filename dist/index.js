"use strict";
// Simple variable
let userName = "himel";
let id = 44;
let isValid = false;
let value = "any value";
let ids = [1, 2, 3, 4];
let arr = [1, "bla", false];
// Tuple
let person = [1, 'himel', true];
let employee;
employee = [
    [1, 'himel'],
    [3, 'mamun'],
    [4, 'hasib'],
];
// Union
let _id;
_id = "this is working as well";
_id = 32323;
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(`Direction1.Down`, Direction1.Down);
// Objects
const user = {
    uName: "himel",
    id: 23,
    age: 23
};
const car = {
    cName: "BMW",
    cPrice: 3444
};
// Type assertion
let cId = 2;
let customerId = cId;
customerId = cId;
// Functions
function addNumbers(x, y) {
    return x + y;
}
console.log(`addNumbers(3, 5)`, addNumbers(3, 5));
