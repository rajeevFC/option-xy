// let promise = new Promise((resolve,reject)=>{
  

//     setTimeout(()=>{
//   let data = undefined;
//   if(data){
//     resolve(data);
//   }else{
//     reject("data not found"+data)
//   }

//     },2000)
// })

// promise.then((data)=>{
//     console.log("resolve message",data)
// }).catch((err)=>{
//     console.log("erro in data"+err)
// })

// ------to call multiple promise

let pr1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
// console.log("pr1 --01")
resolve("001")
  },1000)
})


let pr2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // console.log("pr2--02")
    let data ={pname:"rajeev",pprice:"2000$"}
    resolve(data)
  },2000)
})
 let pr4 = "empt"

let pr3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // console.log("pr3--3")
    reject("error page message")
  },3000)
})
// 
// Promise.all([pr3,pr2,pr1]).then((prgMsg)=>{
  // console.log(prgMsg);
// }).catch((err)=>{
  // console.log("error"+err)
// })

// if any one throw error its stop working even if single methor have error.
// regard less of resolve are reject 
//all method will check sequesnce and display according. time has no impact in order.
// 
// Promise.allSettled([pr3,pr2,pr1,pr4]).then((prgMsg)=>{
  // console.log(prgMsg);
// }).catch((err)=>{
  // console.log("error"+err)
// })
// 
// its aray retun with err with reolve  . rejecteion will be handle settledall.
// Promise.race([pr3,pr2,pr1]).then((prgMsg)=>{
// }).catch((err)=>{
  // console.log("error"+err)
// })
// 

// ----

Promise.allSettled([pr2,pr3,pr1]).then((prgMsg)=>{
  console.log("resolve state"+JSON.stringify(prgMsg))
}).catch((err)=>{
  console.log("error"+err)
})


//race<if all resolve state .which execute first comes out race>/allSettled<for reject or resolve both state case result will give>
//all<only resolve state it work if any one promise reject this wont work. >

//empty always for rejection state
