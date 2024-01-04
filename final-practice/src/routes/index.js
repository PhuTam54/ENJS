const songRouter = require('./song');

function route(app) {
    app.use('/api/songs', songRouter);
}

module.exports = route;