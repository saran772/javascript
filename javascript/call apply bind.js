//function borrowing
let namee={
    firstname:"saranpreet",
    lastname:"singh",
}

let nameee={
    firstname:"rohit",
    lastname:"singh",
}

let printname=function(hometown,food){
    console.log(this.firstname + " "+ this.lastname+ " from " +hometown +" "+food)
}
//call
printname.call(namee,"delhi","momo")
//apply
printname.apply(nameee,["mumbai","biryani"])
//bind(it can return and envoked)
let printmyname=printname.bind(namee,"delhi","momo")
console.log(printmyname)
printmyname()
