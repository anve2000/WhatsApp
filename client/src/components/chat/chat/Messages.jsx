import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { emptyChatImage } from "../../../constants/data";
import Footer from "./Footer";
import Message from "./Message";
import { newMessage, getMessages } from "../../../service/api";
import {io} from 'socket.io-client'


const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  // background-color:red;
  height: 80vh;
  //border:2px solid black;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding:1px 80px;
`;


const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file,setFile]=useState("");
  const [image,setImage]=useState("");
  // const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  const { account, socket,newMessageFlag, setNewMessageFlag } = useContext(AccountContext);


  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncomingMessage({...data, createdAt:Date.now()})
    })
  },[])

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[messages])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data);
    }
    getMessageDetails();
  }, [person._id,conversation?._id,newMessageFlag]);

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages((prev)=>[...prev,incomingMessage]);
  },[incomingMessage,conversation]);

  const receiverId = conversation?.members?.find(member => member !== account.sub);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message={};

      if(!file){
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        }
      }
      else{
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        }
      }

      socket.current.emit('sendMessage',message);

      await newMessage(message);
      setNewMessageFlag(prev=>!prev);
      setValue("");
      setImage("");
      setFile("");
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => 
          {
            return (
            <Container ref={scrollRef}>
                  <Message message={message} />
            </Container>
            )
          })}
      </Component>
      <Footer file={file} setFile={setFile} image={image} setImage={setImage} value={value} sendText={sendText} setValue={setValue} />
    </Wrapper>
  );
};

export default Messages;
