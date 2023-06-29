import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common.utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")`
  height: 50px;
  width: 50px;
  objectfit: "cover";
  border-radius: 50%;
  padding: 0 14px;
`;

const Container = styled("Box")`
  display: flex;
`;

const TimeStamp = styled("Box")`
  font-size: 12px;
  margin-left: auto;
  margin-right: 10px;
  color:#00000099;
`;

const Text= styled('Box')`
font-size: 14px;
margin-left: auto;
color:rgba(0,0,0,0.6);
`

// const Image = styled('img') ({
//   width: 50,
//   height: 50,
//   objectFit: 'cover',
//   borderRadius: '50%',
//   padding: '0 14px'
// });

const Convo = ({ user }) => {
  const { account, setperson, newMessageFlag } = useContext(AccountContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        recieverId: user.sub,
      });
      setMessage({ text: data.message, timestamp: data?.updatedAt });
    };

    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setperson(user);
    await setConversation({ senderId: account.sub, recieverId: user.sub });
  };

  // console.log('USER',user);
  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>

      <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{user.name}</Typography>
            {message?.text && (
              <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
            )}
          </Container>
          <Box>
            <Text>
              {message?.text?.includes("localhost") ? "media" : message.text}
            </Text>
          </Box>
      </Box>
    </Component>
  );
};

export default Convo;
