const Conversation = require("../model/Conversation");

module.exports.newConversation = async (req, res) => {
  try {
    
    const senderId = req.body.senderId;
    const recieverId = req.body.recieverId;
    // console.log("NewConvo called" , senderId,' ',recieverId);
    // console.log('exi',exist);
    const exist = await Conversation.findOne({
      members: { $all: [recieverId, senderId] },
    });

    // console.log("ex", exist);
    if (exist) {
      return res.status(200).json("conversation already exist");
    }
    const newConversation = new Conversation({
      members: [senderId,recieverId]
    });

    // console.log('newConversation: ',newConversation);

    await newConversation.save();
    return res.status(200).json("conversation saved successfully");
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports.getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const recieverId = req.body.recieverId;
    // console.log(senderId,' ',recieverId);
    let conversations = await Conversation.find({});
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, recieverId] },
    });
    // console.log('found @server ',conversation);
    // console.log(conversations);
    return res.status(200).json(conversation);
  } catch (e) {
    return res.status(500).json(e.message);s
  }
};
