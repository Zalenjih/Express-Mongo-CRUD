const express = require("express");
const router = express.Router();

const model = require("../model/task")();

router.get('/', (req, res) => {
    model.find({}, (err, tasks) => {
        if (err) throw err;
        res.render('index', {
            title: "CRUD",
            tasks: tasks
        });
    });
});

router.post('/addData', (req, res) =>{
   let body = req.body;
    body.status = false;
    
    model.create(body, (err, task) =>{
        if (err) throw err;
        res.redirect('/');
    })
});

router.get('/turn/:id', (req, res) =>{
        let id = req.params.id;
        model.findById(id, (err, task) =>{
            if (err) throw err;
            task.status = !task.status;
            task.save().then(()=> res.redirect('/'))
        })
});

router.get('/delete/:id', (req, res) =>{
    let id= req.params.id;
    model.remove({_id:id}, (err, task) =>{
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;
