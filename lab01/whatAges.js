const http = require('http');
const url = require('url');

const port = process.env.PORT || 8081

const getCurrentYear = () => new Date().getFullYear();

const server = http.createServer((req, res) => {
    // Phân tích URL để lấy tham số từ query string
    const queryObject = url.parse(req.url, true).query;

    // Lấy giá trị của tham số 'name' và 'year'
    const name = queryObject.name || 'Unknown';
    const birthYear = parseInt(queryObject.year) || 0;

    // Tính toán tuổi
    const currentYear = getCurrentYear();
    const age = currentYear - birthYear;

    // Tạo chuỗi thông tin tuổi
    const ageInfo = `${name} is ${age} years old`;

    // Gửi phản hồi với thông tin tuổi
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(ageInfo);
});

server.listen(port, () => console.log(`App listening on port http://127.0.0.1:${port}`));
