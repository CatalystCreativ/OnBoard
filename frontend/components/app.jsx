import React from 'react';
import Splash from './splash';
import { HashRouter } from 'react-router-dom';
import SessionForm from './session/session_form';
import SignUp from './session/sign_up';

export default function App(){
    return (
        <>  
          <Splash/>
          <SignUp/>
          <SessionForm/>
        </>
    )    
}