const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.disable('x-powered-by')

app.get('*', (req, res) => {
    res.type('text/plain')
    res.send(`Open your dev tools and examine your headers; ` +
    `you'll notice there is no x-powered-by header`)
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}`)
)