// utility type

// partial

interface Assignment{
    studentId: string,  
    title: string,
    grade: number,
    verified?: boolean

}

const updateAssignment = (assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1:Assignment = {
    studentId: '1',
    title: 'Math',
    grade: 90,
    verified: false
}

const assign2:Assignment = updateAssignment(assign1,{grade:80})
console.log(assign2)

const assign3:Assignment = updateAssignment(assign1,{grade:80,verified:true})
console.log(assign3)

const assign4:Assignment = updateAssignment(assign1,{grade:80,verified:true})
console.log(assign4)

const assign5:Assignment = updateAssignment(assign1,{grade:80,verified:true})
console.log(assign5)


const hexColorMap:Readonly<Record<string,string>> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}

console.log(hexColorMap.red)
console.log(hexColorMap.green)
console.log(hexColorMap.blue)
// hexColorMap.red='000000'
console.log(hexColorMap.red)

type Students = 'John' | 'Jane' | 'Jim' | 'Jill'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F'


const finalGrades:Record<Students,LetterGrades> = {
    John: 'A',
    Jane: 'B',
    Jim: 'C',
    Jill: 'F'
}


interface Grades {
    assign1: number,
    assign2: number
}

const gradeData :Record<Students,Grades> = {
    John: {assign1: 10, assign2: 20},
    Jane: {assign1: 20, assign2: 30},
    Jim: {assign1: 30, assign2: 40},
    Jill: {assign1: 40, assign2: 50}
}

console.log(gradeData.John.assign1)
console.log(gradeData.Jane.assign1)
console.log(gradeData.Jim.assign1)
console.log(gradeData.Jill.assign1)


const gradeDataByStudent = Object.values(gradeData).map(grade => grade.assign1 + grade.assign2)
console.log(gradeDataByStudent)



// pick and omit


type AssignResult = Pick<Assignment,'studentId' | 'grade'>


const score:AssignResult = {
    studentId: '1',
    grade: 90
}

console.log(score)

type assignPreview = Omit<Assignment,'grade' | 'verified'>

const preview:assignPreview = {
    studentId: '1',
    title: 'Math'
}

console.log(preview)


/// Exclude and Extract


type adjustedGradeResult = Exclude<LetterGrades,'F'>

const adjustedGrades:Record<Students,adjustedGradeResult> = {
    John: 'A',
    Jane: 'B',
    Jim: 'C',
    Jill: 'A'
}

console.log(adjustedGrades)

type highGrades = Extract<LetterGrades,'A' | 'B'>

const highGrades:Record<Students,highGrades> = {
    John: 'A',
    Jane: 'B',
    Jim: 'C',
    Jill: 'A'
}

console.log(highGrades)

// Non Nullable

type names = 'John' | 'Jane' | 'Jim' | 'Jill' | null | undefined

const nonNullableNames:NonNullable<names> ='Jill'

console.log(nonNullableNames)

// Return Type

type MaybeUser = {name:string} | undefined

const maybeUser:MaybeUser = {name: 'John'}

console.log(maybeUser)

// Return Type