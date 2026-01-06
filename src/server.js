import express from "express"

const app = express()

const hostName = "localhost"
const port = 3000

app.get('/', function (req, res){
    res.send('<h1>Hello World!</h1>')
})

app.listen(port , hostName, () => {
    console.log(`Listening on port ${port} at http://localhost:${port}`)
})