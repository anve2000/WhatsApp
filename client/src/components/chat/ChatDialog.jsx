import { Dialog, Box, styled } from "@mui/material";
import React, { useContext } from "react";
import Menu from "./Menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import Header from "./Menu/Header";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
  // marginTop: '12%',
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 400px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  border: 2px solid black;
  height: 100%;
`;

const ChatDialog = (props) => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>

        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />};
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
