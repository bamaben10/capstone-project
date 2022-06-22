require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { getProducts, postRolls } = require('./controller')

app.use(express.static('client'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 5050

app.use(cors())
app.use(express.json())


app.get('/api/products', getProducts);
app.post('/api/products', postRolls);
// app.delete('/api/order', removeOrder);


app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})


