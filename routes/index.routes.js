const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index', { title: 'Express' }));

// router.post('/filter', (req,res) => {
//     console.log(req.body)
//     res.redirect('/')
// })

module.exports = router;
