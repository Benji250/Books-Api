require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Helllo world')
})

app.listen(PORT, () => {

})