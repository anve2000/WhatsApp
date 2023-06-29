import React, {useState, useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon, MoreVert } from "@mui/icons-material";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  border: "2px solid black",
});

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }

  &:first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Header = () => {
  const [openDrawer, setopenDrawer] = useState(false);

  const toggleDrawer=()=>{
    setopenDrawer(true);
  }


  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu openDrawer={openDrawer} setopenDrawer={setopenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer  open={openDrawer} setopen={setopenDrawer}/>
    </>
  );
};

export default Header;
