const blogRouter = require('./blog');

function route(app) {
    app.use('/api/blogs', blogRouter);
}

module.exports = route;