import React from "react";
import { Drawer, Typography, Box,styled} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none',
}

const Header = styled(Box)`
    background: #008069;
    height:108px;
    color:#FFFFFF;
    display:flex;

    &>p, &>svg{
        margin-top:auto;
        padding:15px;
        // border:2px solid blue;
        font-weight:600px;
    }
`;

const Component = styled(Box)`
    background-color:#ededed;
    height:85%;
`

const InfoDrawer = ({ open, setopen }) => {
  const handleClose = () => {
    setopen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={() => {
        handleClose();
      }}
      PaperProps={{sx:drawerStyle}}
      style={{zIndex:1500}}
    >

    <Header>
        <ArrowBack onClick={()=>setopen(false)}/>
        <Typography style={{fontSize:'18px'}} >Profile</Typography>
    </Header>
    <Component>
        <Profile/>
    </Component>

    </Drawer>
  );
};

export default InfoDrawer;
