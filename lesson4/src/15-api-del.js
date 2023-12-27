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

app.delete('/api/tour/:id', (req, res) => {
    const idx = tours.findIndex(tour => tour.id === parseInt(req.params.id))
    if(idx < 0) return res.json({ error: "No such tour exists" })
    tours.splice(idx, 1)
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