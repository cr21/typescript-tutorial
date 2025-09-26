// index signrature

interface TransactionObj {
    readonly [index: string]:number
    Pizza: number,
    Books: number,
    Job: number,
}

// interface TransactionObj {
//     readonly [index: string]:number
// }



const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    'dave':1
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj):number => {
    let total = 0;
    for(const transaction in transactions) {
        total += transactions[transaction] ?? 0;
    }
    return total;
}

console.log(todaysNet(todaysTransactions));

console.log(prop);
console.log(todaysTransactions[prop]);
// todaysTransactions.Pizza = 40;
console.log(todaysTransactions['Chirag']);


interface Student {
    [key: string]: string|number|number[]|undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Chirag',
    GPA: 3.5,
    classes: [100,200]
}

console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}
console.log('--------------------------------')
Object.keys(student).forEach(key => {
    console.log(`${key}: ${student[key as keyof Student]}`)
})
console.log('--------------------------------')
Object.values(student).forEach(value => {
    console.log(`${value}`)
})
console.log('--------------------------------')
Object.entries(student).forEach(([key,value]) => {
    console.log(`${key}: ${value}`)
})
console.log('--------------------------------')
Object.keys(student).map(key => {
    console.log(student[key as keyof  Student])
})
console.log('--------------------------------')

const logStudentKey = (student:Student, key:keyof Student):void => {
    console.log(`Student ${key}: ${student[key as keyof Student]}`)
}
student.test = 'test'
logStudentKey(student, 'name')
logStudentKey(student, 'GPA')
logStudentKey(student, 'classes')
logStudentKey(student, 'test')


type Streams = 'salary' | 'youtube' | 'other'

type Incomes = Record<Streams,number|string>

const incomes: Incomes = {
    salary: 1000,
    youtube: '1000',
    other: 1000
}
for (const key in incomes) {
    console.log(`${key}: ${incomes[key as keyof Incomes]}`)
}







