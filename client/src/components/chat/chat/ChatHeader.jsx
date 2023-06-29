import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const OnlineStatus = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  &>svg{
    padding:8px;
    font-size:24px;
    color:black;
  }
`;

const ChatHeader = ({person}) => {

  const {activeUsers} = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <OnlineStatus>
          {activeUsers?.find(user=>user.sub===person.sub)?'online':'offline'}

        </OnlineStatus>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
