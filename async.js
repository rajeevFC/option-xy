// async function test(){
    // console.log("log")
//    throw new Error("has error");
// return 0;
// }

//to async with arrow function
const test =async()=>{
    return 0;
}


const fn = test();
console.log(fn);


//async always have promse //aslo always have resolve state 
// you do not need to write a "return" statement
//to return a "rejected " state , throw statement
// is written to reject a Promise.

//await  we can remove then() & replace it with "await"