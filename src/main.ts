const stringEcho = (arg:string):string => arg

const echo = <T>(arg:T):T => arg

const isObj =<T>(arg:T):boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
} 

const isTrue = <T>(arg:T):{arg:T,is:boolean} => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg:arg,is:false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg:arg,is:false}
    }
    return {arg:arg,is:!!arg}
}

console.log(isTrue(true))
console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(1))
console.log(isTrue(''))
console.log(isTrue('test'))
console.log(isTrue([]))
console.log(isTrue([1,2,3]))
console.log(isTrue({}))
console.log(isTrue({name: 'John'}))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue(new Date()))
console.log(isTrue(new Error()))
console.log(isTrue(new Promise((resolve, reject) => resolve('test'))))
console.log(NaN)
console.log(isTrue(NaN))


interface BoolCheck<T> {
    value:T,
    is:boolean
}

const checkBoolValue = <T>(arg:T):BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value:arg,is:false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value:arg,is:false}
    }
    return {value:arg,is:!!arg}
}

console.log(checkBoolValue(true))
console.log(checkBoolValue(false))
console.log(checkBoolValue(0))
console.log(checkBoolValue(1))
console.log(checkBoolValue(''))
console.log(checkBoolValue('test'))

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user:T):T => {
    return user
}

console.log(processUser({id: 1, name: 'John'}))
console.log(processUser({name: 'John','id':2,'email':'john@gmail.com'}))


const getUserProperty = <T extends HasId, k extends keyof T>(users:T[],key:k) : T[k][]=>{
    return users.map(user => user[key])
}

console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane',email:'john@gmail.com'}],'email'))
console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane'}],'id'))
// console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane'}],'email'))
console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane'}],'name'))
console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane'}],'id'))
// console.log(getUserProperty([{id: 1, name: 'John'},{id: 2, name: 'Jane'}],'email'))
