const products = [
    {
        name: 'Original Salmon Roll',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Original Cinnamon Roll with fruit',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Cinnamon raisin roll',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'lemon cinnamon roll',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'chocolate drizzle cinnamon roll',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'cinnamon lovers roll',
        price: 10,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
]


module.exports={
    getProducts: (req,res) => {
        console.log('it worked');
    
        if(req.query.search){
            const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
            res.status(200).send(filterProducts)
        } else {
            res.status(200).send(products)
        }
    }
}