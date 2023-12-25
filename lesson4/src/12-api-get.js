const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
]
app.get('/api/tours', (req, res) => {
    res.json(tours)
})

app.get('*', (req, res) => {
    res.send('check out <a href="/api/tours">api/tours</a>!')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)