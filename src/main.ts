// type or alias
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type guitarist =  {
    name?:string,
    active?:boolean,
    albums:StringOrNumberArray
}

type userId = StringOrNumber;

// literal type
let myName:'Dave';

let userName:'Dave'|'John';

userName='John'

// functions

const add = (a:number, b:number):number => {
    return a+b;
}

const logMessage = (msg:string):void => {
    console.log(msg);
}

// objects
let person:{name:string, age:number} = {name:'Dave', age:40};

logMessage(person.name);
logMessage(add(1,2).toString());

let subtract = function (c:number, d:number):number {
    return c-d;
}
logMessage(subtract(1,2).toString());

type mathFunction = (a:number, b:number) => number;
// interface mathFunction {
//     (a:number, b:number):number;
// } 


let multiply:mathFunction=(a,b)=>a*b;

let divide:mathFunction=function(a,b){return    a/b};

logMessage(multiply(2,2).toString());
logMessage(divide(1,2).toString());


// optional parameters

const addAll = (a:number, b:number, c?:number):number => {
    if(c) return a+b+c;
    return a+b;
}

const sumAll = (a:number, b:number, c:number=3):number => {
    return a+b+c;
}

logMessage(addAll(1,2,3).toString());
logMessage(sumAll(1,2).toString());

// default parameters


// rest parameters
const total = (a:number,...nums:number[]):number => {
    return nums.reduce((acc,curr)=>acc+curr, a);
}

logMessage(total(10,1,2,3,4,5).toString());

// destructuring

const isNumber = (value:any):boolean => {
    return typeof value === 'number' ? true : false;
}

logMessage(isNumber(1).toString());

// type guards
const createError = (errMsg:string):never => {
    throw new Error(errMsg);
}
const numberOrString =   (value:number|string):string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('Value can only be a string or a number');
}