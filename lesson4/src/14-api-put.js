const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 3000

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
]
app.get('/api/tours', (req, res) => {
    res.json(tours)
})

app.put('/api/tour/:id', (req, res) => {
    const p = tours.find(p => p.id === parseInt(req.params.id))
    if(!p) return res.status(410).json({ error: "No such tour exists" })
    if(req.body.name) p.name = req.body.name
    if(req.body.price) p.price = req.body.price
    res.json({ success: true })
})

app.use('*', (req, res) => {
    res.send(
        `<p>Use a tool like <a href="http://www.getpostman.com">Post man</a>` +
        `or <a>curl</a> to try the following:</p>` +
        `<pre>` +
        `GET /api/tours\n` +
        `DELETE /api/tours/0\n` +
        `GET /api/tours\n`
    )
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}/api/tours`)
)