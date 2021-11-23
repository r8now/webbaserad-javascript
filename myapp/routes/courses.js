// Requirements and setup
const express = require('express');
const router = express.Router();
const fs = require('fs');

// GET all courses
router.get('/', (req, res, next) => {
    fs.readFile('./data/courses.json', 'utf8', (error, data) => {
        res.send(data);
    });
});

// GET one course based on id
router.get('/:id', (req, res, next) => {
    fs.readFile('./courses.json', 'utf8', (error, data) => {
        let json = JSON.parse(data);
        let course;
        for(let index = 0; index < json.length; index++) {
            if (json[index]._id.toString() === req.params.id) {
                course = json[index];
            }
        }
        res.send(course);
    });
});

// DELETE one course based on id
router.delete('/:id', (req, res, next) => {
    fs.readFile('./courses.json', 'utf8', (error, data) => {
        let json = JSON.parse(data);
        let del = -1;
        let newText;
        for (let index = 0; index < json.length; index++) {
            if (json[index]._id.toString() === req.params.id) {
                del = index;
            }
        }
        if (del >= 0) {
            json.splice(del, 1);
            newText = JSON.stringify(json);
            fs.writeFile('./courses.json', newText);
        }
        res.send("Deleted.");
    });
});

module.exports = router;