import React from "react";
import { Box, Typography, styled, Divider} from "@mui/material";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
  background-color: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Image= styled('img')`
  width:400px;
  margin-top:100px;
`

const Title = styled(Typography)`
  font-size:32px;
  margin:25px 0 10px 0;
  font-family:inherit;
  font-weight:300;
  color:#41525d;
  margin-top:25px 0 10px 0;
`


const Subtitle = styled(Typography)`
  font-size:14px;
  color:#667781;
  font-weight:400; 
  font-family:inherit;
`;

const StyleDivider = styled(Divider)`
margin: 40px 0;
opacity: 0.4;
`

//inorder for font-weight to work, font-family needs to be inherited;

const EmptyChat = () => {
  return (
    <Component>
      <Box>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web</Title>
        <Subtitle>
          Now send and receive messages without keeping your phone online.
        </Subtitle>
        <Subtitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.{" "}
        </Subtitle>
        <StyleDivider/>

      </Box>
    </Component>
  );
};

export default EmptyChat;
