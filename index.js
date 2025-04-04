  
 const p1=new Promise((resolve,reject)=>
    setTimeout(() => {
        resolve("namaste")
    },5000))

    const p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("namastejiiiiiiii")
        },3000)
 })
 //await always use inside a async
 async function getdata() {
    console.log("hello world")
    const val1=await p1
    console.log(val1)

    const val2=await p2
    console.log(val2)
 }
 getdata()
