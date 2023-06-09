import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

import React from 'react';

function App() {
    if (!localStorage.getItem('username')) return <LoginForm />;
  return (

    <>
    
    <ChatEngine
      height="100vh"
      projectID="1c8e7390-e9c6-4f76-84d0-d8b45f6821db"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
   />
    </>
  );
};


export default App;