const express = require('express')
const route = require('./routes');
// Connect to DB
const db = require('./config/db');
db.connect()

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded());
app.use(express.json());

// Routes init
route(app);

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)