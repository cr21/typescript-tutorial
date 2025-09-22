let stringArr = ['one','two','three']


let guitars = ['strat','Les Paul','Gibson', 5150]
let mixedData = ['EVH', 1984, true]

guitars[0]=1984
console.log(guitars)
guitars.push('Jimi')
console.log(guitars)


let tet =[]

tet=[1,'chirag',true, null,[]]
console.log(tet)

let mutuple:[string, number, boolean ]=['Dave',1984,true]
console.log(mutuple)
mutuple[0]='chirag'


let myobj:object

myobj = mutuple
console.log(typeof myobj)
console.log(typeof mutuple)

myobj= {'name':'chirag','age':21}
console.log(typeof myobj)
console.log(myobj)


myobj = {}

const exampleobj = {
    name:'chirag',
    age:true
}

interface guitarist  {
    name?:string,
    active?:boolean,
    albums:(string | number)[]
}

const evh:guitarist = {
    name:'Eddie Van Halen',
    albums:['Van Halen',515,'For Unlawful Carnal Knowledge']
}


let jp:guitarist = {        

    albums:['John Petrucci', 'Petrucci']
}

const greetGuitarist = (guitarist:guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello'
}

console.log(greetGuitarist(evh))
console.log(greetGuitarist(jp))

// ENUMS
enum Grade {
    U=1,
    D=2,
    C=3,
    B=4,
    A=5
}

let myGrade:Grade = Grade.A
console.log(myGrade)