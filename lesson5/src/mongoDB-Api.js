const express = require('express')
const bodyParser = require('body-parser')
// Define schema
const Product = require('./app/models/Product')
const Blog = require('./app/models/Blog')

// Connect to DB
const db = require('./config/db');
db.connect()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// products
app.get('/api/products', (req, res) => {
    Product.find()
        .then(products => {
            res.json(products)
            })
        })

app.get('/api/product/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(products => {
            res.json(products)
            })
        })

app.post('/api/product', async (req, res) => {
    const { name, price, qty } = req.body
    try {
        const newProduct = new Product({ name, price, qty })
        const savedProduct = await newProduct.save()
        res.json(savedProduct)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.put('/api/product/:id', async (req, res) => {
    const { name, price, qty } = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, qty },
            { new: true }
        )
        if (!updatedProduct) {
            return res.status(400).json({ error: 'Product not found' });
        }
        res.json(updatedProduct)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.delete('/api/product/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id,)
        if (!deletedProduct) {
            return res.status(400).json({ error: 'Product not found' });
        }
        res.json(deletedProduct)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// blogs
app.get('/api/blogs', (req, res) => {
    Blog.find()
        .then(blogs => {
            res.json(blogs)
            })
        })

app.get('/api/blog/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blogs => {
            res.json(blogs)
            })
        })

app.post('/api/blog', async (req, res) => {
    const formData = {...req.body}
    try {
        const newBlog = new Blog(formData)
        const savedBlog = await newBlog.save()
        res.json(savedBlog)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.put('/api/blog/:id', async (req, res) => {
    const { name, price, qty } = req.body
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { name, price, qty },
            { new: true }
        )
        if (!updatedBlog) {
            return res.status(400).json({ error: 'Blog not found' });
        }
        res.json(updatedBlog)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.delete('/api/blog/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id,)
        if (!deletedBlog) {
            return res.status(400).json({ error: 'Blog not found' });
        }
        res.json(deletedBlog)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('*', (req, res) => {
    res.send('check out <a href="/api/blogs">api/blogs</a>!')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)