const express = require('express')
const app = express()
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

const comments = [
    {
        username: `Lucas`,
        comment: `Wow. Cool, brah.`
    },
    {
        username: `Jay`,
        comment: `Really? Nice, brah.`
    },
    {
        username: `William`,
        comment: `Ugh. Not cool, brah.`
    },
    {
        username: `Ellis`,
        comment: `Watah. Tomorra, I go near Southend.`
    }
]

app.get(`/comments`, (req,res) => {
    res.render(`comments/index`, { comments })
})

app.get('/', (req,res) => {
    res.send("GET / Tacos response")
})

app.post('/tacos', (req,res) => {
    const { type, amount } = req.body
    console.log(type, amount)
    console.log(req.body)
    res.send(`You sent ${amount} ${type}`)
})

app.listen(3000, () => {
    console.log('Port 3000')
})