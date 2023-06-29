import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { GetApp } from "@mui/icons-material";
import { formatDate, downloadLink } from "../../../utils/common.utils";
import { AccountContext } from "../../../context/AccountProvider";
import { iconPDF } from "../../../constants/data";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;

  flex-wrap: wrap;
  word-break: keep-all;
  border-radius: 10px;
  margin: 10px;
  margin-left: auto;
`;

const Other = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  word-break: keep-all;
  border-radius: 10px;
  margin: 10px;
  margin-right: auto;
`;

const Text = styled(Box)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Box)`
  font-size: 10px;
  color: #919191;
  margin-top: 8px;
  word-break: keep-all;
`;

const Message = ({ message }) => {
  console.log("message: ", message);
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <InputMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
          {/* <Time>{formatDate(message.createdAt)}</Time> */}
        </Own>
      ) : (
        <Other>
          {message.type === "file" ? (
            <InputMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Other>
      )}
    </>
  );
};

const InputMessage = ({ message }) => {
  return (
    <Box style={{position:'relative'}}>
      {message?.text?.includes(".pdf") ? (
        <Box style={{display:'flex'}}>
          <img src={iconPDF} alt="pdf" style={{width:'80px'}}/>
          <Typography style={{fontSize:10}}>{message.text}</Typography>
        </Box>
      ) : (
        <img
          style={{ height: "300px", width: "300px" }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Time>
        <GetApp 
          onClick={(e)=>{console.log('CLICKED');downloadLink(e,message.text)}}
          style={{marginRight:10, border:'1px solid grey', borderRadius:'50%', fontSize:'small'}}
        />
        {formatDate(message.createdAt)}</Time>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      {/* <Time>{formatDate(message.createdAt)}</Time> */}
    </>
  );
};

export default Message;
