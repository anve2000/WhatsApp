import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import AccountProvider from "./context/AccountProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientID = '820440994634-rdclftr8fbjkbkfhkc4pbvfl5urg8epn.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
