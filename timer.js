//console.time() in javascript

// console.time('time1');
// 
// let x =10;y =3;
// console.timeLog('time1')//time has taken to reach this line code while execution.
// console.log(x*y);
// console.timeEnd('time1');
// 
// ----------------
// 

//reg expression work withour case specific


//flags or modifier
//i> Perform case-sensative search
//g>> Performs globale match that is -it doesnot stop the search after first occuraence
//m>> Performs multiline search
//s > allows(.) to match new line characters.[ES2018 onwards]
//u> Switches on unicode pattern matching
//y> Switcheds on "sticky" mode.

let msg ="This is case sensitive Case";
let ptrn =RegExp("Case","i") 
// let pos = msg.search(ptrn);
let str = msg.match(/case/gi); // return all case
// let str = msg.match(/case/g); //return match case word
console.log(str);