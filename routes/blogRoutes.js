const express =require('express');
const { getBlogs } = require('../controllers/blogController');

const router = express.Router();

//get all blogs

router.get('/getall', getBlogs)

module.exports = router;
