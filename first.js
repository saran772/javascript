
const cart=["shirts","pants","kurtas"]

  createorder(cart,function(orderID){     //its a callback hell
    payment(orderID,function(paymentInfo){
      paymentsucessfullydone(paymentInfo,function(){
        updatewalletbal()
      })
    })
}
 )

 createorder(cart)
 .then((orderID)=>payment(orderID))
 .then((paymentInfo)=> paymentsucessfullydone(paymentInfo)) // this is promises and we are not depended on any function
 .then((paymentInfo)=>updatewalletbal(paymentInfo))