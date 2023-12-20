const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel')
})

// Custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.end('404 - Not Found from PhuTam')
})

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.end('500 - Server error')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}`)
)