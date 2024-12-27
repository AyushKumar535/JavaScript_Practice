const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "java course",
        price : 1999
    },
    {
        itemName : "data science course",
        price : 11999
    }
]
const pricetopay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(pricetopay)