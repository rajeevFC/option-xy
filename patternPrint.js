//print *
// *
// **
// ***
// ****
// *****

// no of row:5 no of col:5

// steps 

// for(var row=1;row<=5; row++){
    // for( var col=1;col<=row;col++){
        // console.log("*");

    // }
    // console.log("\n")
// }
// let string ="";
// for (let i = 1; i <= 5; i++) {
    // for (let j = 1; j <= 5-i+1; j++) {
        // string+=j
    // }
    // string+= "\n";
// }
// console.log(string);



var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let arr = [];

        for(let j=1;j<nums.length;j++){
                    if(nums[i]+nums[j]==target)
                    {
                        arr.push(i,j)
                    }

        }
console.log("test",arr)
    }
    // console.log("result",arr)

};
twoSum([1,2,3,12],15)