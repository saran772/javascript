const p1=new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("p1 succes") },2000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p2 succes") },3000);
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("p3 succes") },5000);
})

Promise.allSettled([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
  console.error(err)
  console.log(err.errors)
})