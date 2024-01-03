const BlogModel = require('../app/models/Blog');

module.exports.getAllBlogs = async () => {
    return await BlogModel.find();
};

module.exports.createBlog = async (blog) => {
    return await BlogModel.create(blog);
};

module.exports.getBlogById = async (id) => {
    return await BlogModel.findById(id);
};

module.exports.updateBlog = async (id, blog) => {
    return await BlogModel.findByIdAndUpdate(id, blog);
};

module.exports.deleteBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
};