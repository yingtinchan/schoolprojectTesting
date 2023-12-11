import { Book } from "src/book/entities/book.entity";
import { hashPassword } from "src/function/hash";
import { Student } from "src/student/entities/student.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";

var Chance = require('chance');
var chance = new Chance();

const categorys = [
    'Fiction',
    'Biography',
    'Memoir',
    'Autobiography',
    'Action fiction',
    'Anthology',
    'Mystery',
    'Chapter book']

book()
teacher()
student()

async function book() {
    var url = 'http://localhost:3001/book'

    let res = await fetch(url)
    let data = await res.json()

    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            await fetch(url + '/' + data[i].book_id, { method: 'DELETE' })
        }
    }
    for (let i = 0; i < 10; i++) {
        const book = new Book();
        book.name = chance.company()
        book.category = categorys[Math.floor(Math.random() * categorys.length)];
        book.author = chance.name()
        book.description = chance.sentence()
        await fetch(url, {
            body: JSON.stringify(book),
            headers: {
                'dataType': 'json',
                'content-type': 'application/json'
            },
            method: 'POST',
        })
    }
}

async function student() {
    var url = 'http://localhost:3001/student'

    let res = await fetch(url)
    let data = await res.json()

    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            await fetch(url + '/' + data[i].id, { method: 'DELETE' })
        }
    }
    for (let i = 0; i < 10; i++) {
        const student = new Student();
        student.name = chance.name()
        student.password = await hashPassword("1111")
        student.email = student.name + "@example.com"
        student.major_id = "CS50"
        await fetch(url, {
            body: JSON.stringify(student),
            headers: {
                'dataType': 'json',
                'content-type': 'application/json'
            },
            method: 'POST',
        })
    }
}

async function teacher() {
    var url = 'http://localhost:3001/teacher'

    let res = await fetch(url)
    let data = await res.json()

    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            await fetch(url + '/' + data[i].id, { method: 'DELETE' })
        }
    }
    for (let i = 0; i < 10; i++) {
        const teacher = new Teacher();
        teacher.name = chance.name()
        teacher.password = await hashPassword("1111")
        teacher.email = teacher.name + "@example.com"
        await fetch(url, {
            body: JSON.stringify(teacher),
            headers: {
                'dataType': 'json',
                'content-type': 'application/json'
            },
            method: 'POST',
        })
    }
}


