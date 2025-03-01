import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">
          Chat Between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
      </header>

      <main className="App-main">
        <ChatLog entries={chatMessages}/>
      </main>

    </div>
  );
};

export default App;
