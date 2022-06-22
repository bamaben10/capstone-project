const express = require('express')
const cors = require('cors')
const app = express()
const { getProducts, postRolls } = require('./controller')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 5050

app.use(cors())
app.use(express.json())


app.get('/api/products', getProducts);
app.post('/api/products', postRolls);
// app.delete('/api/order', removeOrder);


const SERVER_PORT = 5050

app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`);
})


