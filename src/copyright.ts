// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime',thisYear);
// year.textContent=thisYear

// 1st var
// let year:HTMLElement | null ;
// year= document.getElementById('year');
// let thisYear:string ;
// thisYear= new Date().getFullYear().toString();
// if(year){
//     year.setAttribute('datetime',thisYear);
//     year.textContent=thisYear
// }




// 2nd var

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear:string = new Date().getFullYear().toString();
year.setAttribute('datetime',thisYear);
year.textContent=thisYear
console.log(year)