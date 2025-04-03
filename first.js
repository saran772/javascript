
const cart=["shirts","pants","kurtas"]

 api.createorder(cart,function(){
    api.payment(function(){
        api.paymentsucessfullydone()
    })
}
 )
