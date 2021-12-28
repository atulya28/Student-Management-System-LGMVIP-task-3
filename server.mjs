import express from 'express'
import mongoose from 'mongoose'
import Signup from './db.mjs'
import cors from 'cors'

const app = express()

const port = process.env.PORT || 8001

app.get('/', (req, res) => {
    res.status(201).send("Hola")
})

const url = "mongodb://atulit23:sanjayashaS28@cluster0-shard-00-00.cwga6.mongodb.net:27017,cluster0-shard-00-01.cwga6.mongodb.net:27017,cluster0-shard-00-02.cwga6.mongodb.net:27017/students2?ssl=true&replicaSet=atlas-laoibc-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())

app.post('/studentmarks', (req, res) => {
    const data1 = req.body
    {Signup.create(data1, (err, data) => {
        if (err) {
           res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })}
})

app.get('/studentmarks', (req, res) => {
    Signup.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, () => console.log(`listening on port ${port}`))

