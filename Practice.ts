let firstName: string;
let age: number;
let isMarried: boolean;

let myVariable: any = 'Hello World';
myVariable = 10;
myVariable = false;

let myVariable: number = undefined;

let myVariable = 'Hello World';

import { Bear } from 'somefile.ts';
let bear = new Bear(3);
if (bear instanceof Bear) {
    //perform some operation
}

let variable1: any = 'Hello World';
if ((variable1 as string).length) {
    //perform some operation
}

let array1: number[] = [1, 2, 3, 4, 5];

let tuple_name = [10, 'Hello World'];

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

const multiply = (num1: number, num2: number) => {
    return num1 * num2;
}

type person = {firstName: string};
const example3: person = {firstName: 'Dollan'};

interface Person {
    firstName: string,
    lastName: string,
    age: number
}

// Without barrel
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';

// demo/barrel.ts
export * from './foo'; // re-export all of its exports
export * from './bar'; // re-export all of its exports
export * from './baz'; // re-export all of its exports

import { Foo, Bar, Baz } from '../demo'; // demo/barrel.ts

import { FastFood, ItalianFood, HealthyFood} from ‘./interfaces’;
let food1: FastFood | HealthyFood;
let food2: ItalianFood;
let food3: FastFood;
let food4: FastFood & ItalianFood;

class Customer {
    customerId: number;
    public companyName: string;
    private address: string;
}
