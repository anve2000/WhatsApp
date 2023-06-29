import { useContext } from "react";
import { Dialog, Typography, styled, Box, List,ListItem, AppBar } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import {qrCodeImage} from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {addUser} from "../../service/api";

const Component = styled(Box)`
    display:flex;
`


const Container = styled(Box)`
    padding: 54px 0 54px 54px;
`;

const QRCode = styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
});



const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;



const Title= styled(Typography)`
    font-size:24px;
    color:#525252;
    font-weight:200;
    font-family:inherit;
`

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius:0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialogue = () => {

    const {setAccount} = useContext(AccountContext);


    const onLoginSuccessFull =async(res)=>{
       const decoded =  jwt_decode(res.credential);
       setAccount(decoded);
       console.log(decoded);
       await addUser(decoded);
    }

    
    const onLoginError = ()=>{
     }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>
                        Use WhatsApp on your computer:
                    </Title>

                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and Select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Container>

                <Box style={{position:'relative'}}>
                    <QRCode src={qrCodeImage}/>
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccessFull}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialogue; 