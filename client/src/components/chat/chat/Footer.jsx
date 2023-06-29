import React,{useState, useEffect} from "react";
import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import {uploadFile} from "../../../service/api";

const Container = styled(Box)`
  height: 55px;
  border: 2px solid blue;
  background: #ededed;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const Search = styled(Box)`
  background-color: #ffffff;
  // padding: 0 10px;
  border-radius: 18px;
  width: calc(94% - 100px);
  // border:2px solid red;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  height: 18px;
  font-size: 14px;
  // background-color:aqua;
  // border:2px solid pink;
`;

const Cliprotate = styled(AttachFile)`
  transform: rotate(50deg);
`;

const Footer = ({image,setImage,value,sendText,setValue,file,setFile}) => {

  useEffect(()=>{
    const getImage = async()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        console.log(image);
        setImage(response.data);
      }
    }

    getImage();
  },[file])  

  const onFileChange=(e)=>{
    console.log(e);
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  }

  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput"><Cliprotate/></label>
      <input onChange={(e)=>onFileChange(e)} id="fileInput" type="file"/>
      {/* <Cliprotate /> */}
      <Search>
        <InputField
          placeholder="Type a message"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {sendText(e)}}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
