import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Convo from "./Convo";
import { Box, styled, Divider } from "@mui/material";


const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;


const StyledDiv=styled(Divider)`
    margin:0 0 0 70px;
    backgroundColor:#e9edef;
    opacity:0.6;
`;

const Conversation = ({searchText}) => {
  const [users, setUsers] = useState([]);

  const { account,socket, setActiveUsers } = useContext(AccountContext);

  useEffect(()=>{
    socket.current.emit('addUser',account);
    socket.current.on('getUsers',users=>{
      setActiveUsers(users);
    })
  },[account])
  
  useEffect(() => {
    
    // console.log('search : ',searchText);
    const fetchData = async () => {
      let res = await getUsers();
      // console.log('res  ',res);
      const filterData = res.filter(user=>user.name.toLowerCase().includes(searchText.toLowerCase()));
      // console.log('filteredData',filterData);
  
      setUsers(filterData);
    }
    fetchData();
  }, [searchText]);

  return (
    <Component>
      {users && users.map((user) => {
        if (user.sub !== account.sub) {
         return ( <>
            <Divider />
            <Convo user={user} />
          </>)
        }
      })}
    </Component>
  );
};

export default Conversation;
