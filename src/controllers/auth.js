const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('OK login');
});



module.exports =  router;