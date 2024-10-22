const db = require('../config/db');
const getBlogs = async (req, res) => {
    try {

        const data = await db.query( 'SELECT * FROM blog');
        if(!data){
            return res.status(404).send({
                suceess:false,
                message:"No data found"
            })
        }
        res.status(200).send({
            success:true,
            message:"All Blog data",
            data : data[0]
        })

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