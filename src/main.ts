let myname = 'Dave' // implicit type inference

let myage: number;
myage = 31 // explicit type inference

myname='John'
myage=32

console.log(myname,myage)

const sum = (a : number,b : string)  => {
    return a+b
}

let album : string | number;

album = 'The Dark Side of the Moon'
album = 1973
album=NaN

let isactive: boolean | number|string;
isactive=true
isactive=1
isactive='active'


let postId : string | number;

let re:RegExp = /\w+/g

