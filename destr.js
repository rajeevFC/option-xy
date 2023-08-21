console.log("destructure")

const obj ={name:"rajeev", pin:"12312312"};
const {name,pin} = obj;

// console.log("obj destrucuring",name,pin)
// o/p > rajeev 12312312
// 2
// array destructuring
const arr =[12,2323]
const [x,y] =arr;
console.log("value", x,y)

// o/p => 12 2323
// ----------
//  compare two array

let arr1=[4,5,8,10];
let arr2 =[14,8,10,5];   //arr2[index]==arr2[arr2.indexOf(value)]


// console.log(arr2.includes(arr1)); o/p false

let result = arr2.length ===arr1.length && arr1.every((currentValue)=>{
    if(arr2.indexOf(currentValue)>-1){
   return (currentValue ==arr2[arr2.indexOf(currentValue)])

    }

})

console.log("array match",result);

// o/p true if two given array same else false
// ------
// remove duplicate from array

let isUniqueArr =[1,2,3,2,4,5,100,20,100]

// console.log(new Set(isUniqueArr)) //1 way solution

// console.log( [...new Set(isUniqueArr)])  //2nd way 



// ----
// program to reverse integer number in js
let trainNumber =-123902;


// let reverseTrainNumber =trainNumber.toString().split("").reverse().join("");
// console.log(reverseTrainNumber);

// -----

const revNum = (trainNumber)=>{
    let reverseTrainNumber =trainNumber.toString().split("").reverse().join("");
    if(reverseTrainNumber.endsWith('-')){
        reverseTrainNumber ='-'+reverseTrainNumber;
        return parseInt(reverseTrainNumber);

    }else{
    return reverseTrainNumber;
    }

}

console.log("reverse train",revNum(trainNumber))
