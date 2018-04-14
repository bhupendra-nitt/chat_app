import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
    constructor(props) {
      super(props);
      this.socket = io('localhost:3000');
      this.handleSendClick = this.handleSendClick.bind(this);
      this.socket.on('RECEIVE_MESSAGE', (data) => this.handleIncomingMessage(data));
      const addMessage = data => {
        console.log(data);
        this.setState({ messages: [...this.state.messages, data] });
        console.log(this.state.messages);
      };
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
            Hello from inside react
            
            <div>
                    <input id='m' autoComplete='off'/><button
                    onClick={(e) => this.handleSendClick(e)}
                    >Send</button>
                </div>
        </div>
    );
    }
};

export default App;