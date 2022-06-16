// find boiler plate code in reference code
// confirm server can run using nodemon
// create an array to hold the orders
// put dummy data into the orders array
// create get endpoint that sends the order array back to the client
// use postman to test the get endpoint


const express = require('express')
const cors = require('cors')
const app = express()
const { getProducts } = require('./controller')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
// })

app.use(cors())
app.use(express.json())


app.get('/api/products', getProducts);


const SERVER_PORT = 5050

app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`);
})


// database one table for products

// or create array of objects that will hold our products

// create db on heroku, db uri, and use npm i.env