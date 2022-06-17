const products = [
    {
        name: 'Original Salmon Roll',
        price: 5,
        image: 'https://images.unsplash.com/photo-1573811409568-023d5d0110af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Original Salmon Roll with Fruit',
        price: 7,
        image: 'https://bubblynaturecreations.com/wp-content/uploads/2015/03/Cinnamon-Roll-Rainbow-Fruit-Pizzas-These-taste-amazing-1.jpg'
    },
    {
        name: 'Cinnamon Raisin Roll',
        price: 4,
        image: 'https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Lemon Cinnamon Roll',
        price: 8,
        image: 'https://th.bing.com/th/id/OIP.VW7_qIoU-ymd0gUHVx4ryAHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
        name: 'Chocolate Drizzle Cinnamon Roll',
        price: 6,
        image: 'https://chelsweets.com/wp-content/uploads/2020/07/glazed-cinnamon-rolls-vert-683x1024.jpg'
    },
    {
        name: 'Cinnamon Lovers Roll',
        price: 6,
        image: 'https://th.bing.com/th/id/OIP.Zgn9c1SoyjemJ-d2gPAK8wHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7'
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