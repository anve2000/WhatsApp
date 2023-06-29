const grid = require('gridfs-stream');
const mongoose = require('mongoose');

const url="http://localhost:8000";

let gfs,gridFsBucket;
const conn=mongoose.connection;
conn.once("open",()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:"fs"
    });
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
})

module.exports.uploadImage = async(req,res)=>{
    if(!req.file){
        return res.status(404).json('File Not Found');
    }

    const imageUrl= `${url}/file/${req.file.filename}`;
    return res.status(200).json(imageUrl);
}


module.exports.getImage = async(req,res)=>{
    try{
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    }
    catch(e){
        return res.status(500).json({msg:e.message});
    }
}