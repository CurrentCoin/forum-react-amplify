import React, { useState, useEffect } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import Button from 'react-bootstrap/Button';
import AuthApp from './AuthApp';
import AuthComment from './AuthComment';
import { Hub } from '@aws-amplify/core';

import styled from 'styled-components';
import './App.css';

const NiceButton = styled.div`
  margin-top: 2vh;
  margin-bottom: 1vh;  
`

const AppLoginPost = (props) => {
    const [user, setUser] = useState(null)
    const [authme, setAuthme] = useState(false);        
  
    useEffect(() => {
    const updateUser = async () => {
      try {
          const myuser = await Auth.currentAuthenticatedUser();
          setUser(myuser);
      }
        catch {
            setUser(null)
        }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events

   // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag 
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, []);

    if (user !== null) {
        return <AuthComment pid={props.id}/>        
    }

    if (authme) {
        return <AuthComment pid={props.id}/>
    }
    
    return (
        <NiceButton>
            <Button  variant="warning" onClick={() => setAuthme(true)}>
              Sign In to Comment
            </Button>
          </NiceButton>
    )
}

export default AppLoginPost;

