import React from 'react'
import LoginDialogue from './account/LoginDialogue';
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from "./chat/ChatDialog";

const Header = styled(AppBar)`
    height:125px;
    background-color:#21BB81;
    box-shadow:none;
`


const LoginHeader = styled(AppBar)`
    height:220px;
    background-color:#21BB81;
    box-shadow:none;
`

const Component = styled(Box)`
    height:100vh;
    background-color:#dcdcdc;
`

const Messenger = () => {

  const { account } = useContext(AccountContext);
  // console.log(account);

  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>
        
              </Toolbar>
            </Header>
            <ChatDialog Account={account.email} />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialogue />
          </>
      }

    </Component>
  )
}

export default Messenger;
