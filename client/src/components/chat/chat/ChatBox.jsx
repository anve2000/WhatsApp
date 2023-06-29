import React, { useContext, useEffect,useState } from "react";
import ChatHeader from "./ChatHeader";
import { Box } from "@mui/material";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation,setconversation] = useState({});

  useEffect(() => { 
    // console.log(account.name,'  ',person.name);
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        recieverId: person.sub,
      });
      // console.log(conversation,setconversation);
      
      setconversation(data);
      // console.log('res data',data);
    };

    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "70%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
