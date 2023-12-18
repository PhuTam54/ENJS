const http = require('http')
const url = require('url');

const port = process.env.PORT || 8081

const server = http.createServer((req, res) => {
    // Phân tích URL để lấy tham số từ query string
    const queryObject = url.parse(req.url, true).query;

    // Lấy giá trị của tham số 'name' và 'title'
    const name = queryObject.name || 'Unknown';
    const title = queryObject.title || 'Mr/Ms';

    // Tạo chuỗi chào theo định dạng yêu cầu
    const greeting = `Hello ${title} ${name}`;

    // Gửi phản hồi với chuỗi chào
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greeting);
});

server.listen(port, () => 
    console.log(`App listening on port http://127.0.0.1:${port}`)
);
