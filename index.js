class Cart{
    constructor(){
        this.entry=[]
    }
    addCart(name,amount){
        for (var i = 0 ; i < this.entry.length ; i++){
            if ( this.entry[i][0] === name){
             this.entry[i][1] += amount   
            }
            
        }
        this.entry.push([
            this.name = name ,
            this.amount = amount])
    }
    showCart(){
        console.log(this.entry)
    }
}

const cart = new Cart()
console.log(cart)