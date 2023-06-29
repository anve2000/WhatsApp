import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  display:flex;
  width:100%;
  align-items:center;
`;

const Wrapper = styled(Box)`
    width:100%;
    background-color:#f0f2f5;
    position:relative;
    margin:0 13px;
`;

const Icon = styled(Box)`
  position: absolute;
  padding: 5px;
  color: #919191;

`;

const InputField = styled(InputBase)`
    width:100%;
    padding:16px;
    padding-left:65px;
    height:15px;
    font-size:17px;
`;

const Search = ({searchText,setsearchText}) => {
  const getTextValue=(e)=>{
      setsearchText(e.target.value);
      // console.log(e.target.value);
  }

  // const call=()=>{
  //   console.log('like');
  // }

  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField onChange={(e)=>{getTextValue(e);}} placeholder="Search or start new chat" />
      </Wrapper>
    </Component>
  );
};

export default Search;
