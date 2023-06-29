const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async()=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@anveshawhatsappclone.qy605yl.mongodb.net/`;
    // try{
    //     await mongoose.connect(URL,{useUnifiedTopology:true});
    //     console.log('Database connected.')
    // }
    // catch(e){
    //     console.log('Error with database ',e);
    // }


    mongoose.connect(URL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('ERROR ANVESHA',err));
}

module.exports = Connection;