import React, { Component } from 'react';
import io from 'socket.io-client';

import FriendList from './FriendList';
import ChatWindow from './ChatWindow';

class App extends Component {
    constructor(props) {
      super(props);
      this.socket = io('localhost:3000');
      this.handleSendClick = this.handleSendClick.bind(this);
      this.socket.on('RECEIVE_MESSAGE', (data) => this.handleIncomingMessage(data));
    }

  handleSendClick() {
    this.socket.emit('SEND_MESSAGE', {
      author: 'b',
      message: 'test',
      receiver: 'c',
      time: Date.now()
    });
  };

  handleIncomingMessage(data) {
    console.log(data);
  }

    render () {
        return (
        <div>
            <FriendList/>
            <div>
              <ChatWindow
                handleSendClick={(e) => this.handleSendClick(e)}/> 
                </div>
        </div>
    );
    }
};

export default App;