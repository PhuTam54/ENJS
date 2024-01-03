const blogService = require("../../services/BlogService");

class BlogController {
    getAllBlogs = async (req, res) => {
        try {
            const blogs = await blogService.getAllBlogs()
            res.json({ data: blogs, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    createBlog = async (req, res) => {
        try {
            const blog = await blogService.createBlog(req.body)
            res.json({ data: blog, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    getBlogById = async (req, res) => {
        try {
            const blog = await blogService.getBlogById(req.params.id)
            res.json({ data: blog, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    updateBlog = async (req, res) => {
        try {
            const blog = await blogService.updateBlog(req.params.id, req.body)
            res.json({ data: blog, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    deleteBlog = async (req, res) => {
        try {
            const blog = await blogService.deleteBlog(req.params.id)
            res.json({ data: blog, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
}

module.exports = new BlogController()