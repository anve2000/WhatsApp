const express= require('express');
const {addUser} = require ("../controller/user-controller.js");
const {getUsers} = require('../controller/user-controller');
const {newConversation,getConversation} = require('../controller/conversation-controller.js');
const { newMessage,getMessages } = require('../controller/message-controller.js');
const {uploadImage,getImage} = require('../controller/image-controller.js')
const upload = require('../middlewares/upload.js');

const router = express.Router();


console.log('route');


router.post('/add',addUser);
router.get('/users',getUsers);

router.post('/conversation/add',newConversation);
router.post('/conversation/get',getConversation);

router.post('/message/add',newMessage)
router.get('/message/get/:id',getMessages);

router.post('/file/upload',upload.single("file"),uploadImage);
router.get('/file/:filename',getImage);

module.exports=router;