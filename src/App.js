import React from 'react';
import './App.css';
import { askForPermissioToReceiveNotifications } from './pushNotification';

function App() {
  return (
    <div className="App">
      <h1>FRONT END MSN</h1>
      <button onClick={askForPermissioToReceiveNotifications}>Receber notificação</button>
    </div>
  );
}

export default App;
