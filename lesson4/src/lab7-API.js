const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 3000

const students = [
    { id: 0, name: 'Nguyen Van A', email: "vana@example.com", phone: '123456789', gpa: 3.5, status: 'Active' },
    { id: 1, name: 'Tran Thi B', email: "thib@example.com", phone: '987654321', gpa: 3.2, status: 'Inactive' },
]

app.get('/api/students', (req, res) => {
    res.json(students)
})

app.get('/api/student/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) return res.status(410).json({ error: "No such student exists" })

    if (!req.body) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    res.json(student)
})

app.post('/api/student', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const student = students.find(student => student.id === parseInt(req.body.id))
    if (student) return res.status(410).json({ error: "Student already exists" })

    const newStudent = {}
    if (req.body.id) newStudent.id = req.body.id
    if (req.body.name) newStudent.name = req.body.name
    if (req.body.email) newStudent.email = req.body.email
    if (req.body.phone) newStudent.phone = req.body.phone
    if (req.body.gpa) newStudent.gpa = req.body.gpa
    if (req.body.status) newStudent.status = req.body.status

    students.unshift(newStudent);
    
    res.json({ success: true })
})

app.put('/api/student/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) return res.status(410).json({ error: "No such student exists" })

    if (!req.body) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    if (req.body.id) student.id = req.body.id
    if (req.body.name) student.name = req.body.name
    if (req.body.email) student.email = req.body.email
    if (req.body.phone) student.phone = req.body.phone
    if (req.body.gpa) student.gpa = req.body.gpa
    if (req.body.status) student.status = req.body.status

    res.json({ success: true })
})

app.delete('/api/student/:id', (req, res) => {
    const idx = students.findIndex(student => student.id === parseInt(req.params.id))
    if(idx < 0) return res.json({ error: "No such student exists" })
    students.splice(idx, 1)
    res.json({ success: true })
})

app.get('*', (req, res) => {
    res.send('check out <a href="/api/students">api/students</a>!')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)