const db = require('../config/db');
const getBlogs = async (req, res) => {
    try {

        const data = await db;

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in getAll blog API",
            error
        })
    }
}

module.exports = {getBlogs}