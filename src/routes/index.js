const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {
        title: "CRUD",
        task: []
    });
});

module.exports = router;