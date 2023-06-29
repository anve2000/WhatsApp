import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import {  Box } from "@mui/material";
import Conversation from "./Conversation";

const Menu = () => {
  const [searchText, setsearchText] = useState("");
  return (
    <Box>
      <Header />
      <Search searchText={searchText} setsearchText={setsearchText}/>
      <Conversation searchText={searchText}/>
    </Box>
  )
}

export default Menu;
