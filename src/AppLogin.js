import React, { useState } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import Button from 'react-bootstrap/Button';
import AuthApp from './AuthApp';
import AuthComment from './AuthComment';

import styled from 'styled-components';
import './App.css';

const NiceButton = styled.div`
  margin-top: 2vh;
  margin-bottom: 1vh;  
`

function AppLogin(props) {
    const [authme, setAuthme] = useState(false);

    Auth.currentCredentials()
        .then(d => console.log('data: ', d))
        .catch(e => console.log('error: ', e))

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setAuthme(true))
        .catch(err => console.log(err));
    
    if (authme) {
        //return <AuthApp/>
        return <AuthComment pid={props.pid}/>
    }
    console.log("pid");
    console.log(props.pid);
    return (
        <NiceButton>
            <Button  variant="warning" onClick={() => setAuthme(true)}>
              Sign In to Comment
            </Button>
          </NiceButton>
    )
}        

export default AppLogin;

