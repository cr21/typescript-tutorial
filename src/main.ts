type One = string
type Two = string | number
type three = 'hello'

// convert to more or less specific
let a:One='hello'
let b=a as Two // less specific
let c = a as three // more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a:number, b:number,c:'add' | 'concat'): number|string => {
    if (c ==='add') return a+b;
    return ''+a+b;
}

let myval:string=addOrConcat(2,2,'concat') as string;
let myval2:number=addOrConcat(2,2,'concat') as number;
console.log(typeof myval2)



const img  = document.querySelector('img') as HTMLImageElement;
const myimg = document.getElementById('#img') as HTMLImageElement;
const myimg2= <HTMLImageElement>document.getElementById('#img');

img.src
myimg.src