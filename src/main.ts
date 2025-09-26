class Coder {
    
    secondLang!: string
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string='TypeScript') {
        // not required to write this.name = name, this.music = music, this.age = age, this.lang = lang
        // this.name = name
        // this.music = music
        // this.age = age
        // this.lang = lang
    }

    getAge() {
        return this.age
    }

    getLang() {
        return this.lang
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
// console.log(Dave.name)
// console.log(Dave.music)
Dave.music='34'
// console.log(Dave.secondLang)
Dave.secondLang='Python'
// console.log(Dave.secondLang)
// console.log(Dave.getAge())
// console.log(Dave.getLang())

// Dave.lang//



class WebDev extends Coder {
    constructor(public computer:string, name:string, music: string, age: number){
        super(name, music, age);
        this.computer = computer;
        console.log(this.lang)
    }

    public getLang(): string {
        return this.lang
    }
}

const John = new WebDev('Mac', 'John', 'Pop', 25);
console.log(John.getLang());
console.log(John.computer);
console.log(John.name);
console.log(John.music);
console.log(John.getAge());
//console.log(John.)

interface Musician {    
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    constructor(public name: string, public instrument: string) {
    }
    play(action: string): string {
        return `${this.name} is playing ${this.instrument} ${action}`;
    }
}

const Page = new Guitarist('Page', 'Guitar');
console.log(Page.play('strums'));


class Peeps {
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    id:number
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John1 = new Peeps('John');
console.log(Peeps.getCount());
const John2 = new Peeps('John1');
console.log(Peeps.getCount());
const John3 = new Peeps('John11');
console.log(Peeps.getCount());
const John4 = new Peeps('John111');
console.log(Peeps.getCount());
const John5 = new Peeps('John1111');
console.log(Peeps.getCount());
const John6 = new Peeps('John11111');
console.log(Peeps.getCount());

console.log(John1.id);
console.log(John2.id);
console.log(John3.id);
console.log(John4.id);
console.log(John5.id);
console.log(John6.id);


class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = [];
    }
    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
            this.dataState = value;
            return
        } else {
            throw new Error('Param is not an array of strings');
        }
    }


}

const MyBands = new Bands();
MyBands.data = ['Guns N Roses', 'AC/DC', 'Led Zeppelin'];
console.log(MyBands.data);
MyBands.data = ['Guns N Roses', '2', 'Led Zeppelin'];
console.log(MyBands.data);
MyBands.data =[...MyBands.data, 'Metallica'];
console.log(MyBands.data);