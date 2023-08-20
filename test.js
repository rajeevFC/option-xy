let arr= [3,4,1];
// console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));

//
//remove duplicate from array.
//first filer & indexof

// let arr2= [1,3,3,2,9,5,6];

// let uArr =arr2.filter((v,i)=>{
    
    // console.log(v+"-"+arr2.indexOf(v)+"-"+i);
    
    // return arr2.indexOf(v)==i;
    
// })

// console.log(uArr)

//o/p unique value

// 2nd way
// let ar3 = [1,2,2,3,3,4];
// let nU =[...new Set(ar3)] 
// 
// console.log("unique value",nU);

// -------
// Factorial problem 
// Enter a number:4
// display:factorial is 16;

// 4factorial:4!->(4*3*2*1)
// n*(n-1)
//recursive function

n= parseInt("Enter a number:");
factorial =1;
for(n>=1;n--;){
    factorial = factorial*n;
}
console.log("Factorail="+factorial);