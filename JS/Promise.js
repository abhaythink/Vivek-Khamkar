//Promise-1
// let flag= false;
// let promise = new Promise((res,rej) => {
//     if(flag){
//         setTimeout(()=> {
//         res("Hello Vivek");
//     }, 3000)
//     }else{
//         rej("Error in message");
//     }
// })

// promise.then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

//Promise chaining

// let flag= false;
// let promise = new Promise((res,rej) => {
//     if(flag){
//         setTimeout(()=> {
//         res(10);
//     }, 3000)
//     }else{
//         rej("Error in message");
//     }
// })

// promise.then((res)=>{
//     console.log(res); 
//     return res *2;
  
// })
// .then((res)=> {
//     console.log(res);
//     return res * 3
// })
// .then((res)=> {
//     console.log(res);
//     return res * 4 
// })
// .catch((err)=>{
//     console.error(err);
// })

//Promise with finally

// let flag= true;
// let promise = new Promise((res,rej) => {
//     if(flag){
//         setTimeout(()=> {
//         res("Hello Vivek");
//     }, 3000)
//     }else{
//         rej("Error in message");
//     }
// })

// promise.then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })
// .finally(()=> {
//     console.log("This is a finally block")
// })



// Async and Await

async function getData(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

let apiRes = await getData();

// console.log(apiRes.userId);
// console.log(apiRes.id);
// console.log(apiRes.title);
// console.log(apiRes.completed)
apiRes.age = 20;
console.log(apiRes);
