const Conversation = require('../model/Conversation')
const Message = require('../model/Message')



module.exports.newMessage=async(req,res)=>{
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        res.status(200).json('Message has been sent successfully');

    }
    catch(e){
        console.log(e);
        return res.status(500).json(e.message);
    }
}

module.exports.getMessages = async(req,res)=>{
    try{
        const message = await Message.find({conversationId:req.params.id});
        return res.status(200).json(message);
    }
    catch(e){
        return res.status(500).json(e.message);
    }
}