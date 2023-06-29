const multer= require('multer');
const {GridFsStorage} =  require('multer-gridfs-storage');
const dotenv = require('dotenv');

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
    url:`mongodb+srv://${USERNAME}:${PASSWORD}@anveshawhatsappclone.qy605yl.mongodb.net/`,
    options: { useNewUrlParser: true },
    file:(req,file)=>{
        const match = ["image/jpg","image/jpeg","image/png"];

        if(match.indexOf(file.memeType)===-1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
});


module.exports=multer({storage});