const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

//configure dotenv
dotenv.config();


const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/blog', require("./routes/blogRoutes"));
app.get('/test', (req,res) => {
    res.status(200).send('<h1>Welcome hi</h1>')
})

const PORT =process.env.PORT || 8000;

mySqlPool.query('SELECT 1').then(() => {

    console.log('Mysql connected')
    app.listen(PORT, () => {
        console.log(`Server Running on  ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error);
})

