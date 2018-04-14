import React, { Component } from 'react';
import io from 'socket.io-client';

import FriendList from './FriendList';
import ChatWindow from './ChatWindow';

class App extends Component {
  constructor(props) {
    super(props);
    const params = (new URL(document.location)).searchParams;
    const currentUserId = Number(params.get('user_id')) || 1;
    this.state = {
      currentUserId,
      receiverId: 2,
      message: '',
    };
    this.socket = io('localhost:3000');
    this.handleSendClick = this.handleSendClick.bind(this);
    this.handleReceiverSelection = this.handleReceiverSelection.bind(this);
    this.updateValueOfAutoSelect = this.updateValueOfAutoSelect.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.socket.on('RECEIVE_MESSAGE', (data) => this.handleIncomingMessage(data));
  }

  handleSendClick() {
    const { currentUserId, receiverId, message } = this.state;
    this.socket.emit('SEND_MESSAGE', {
      author: currentUserId,
      message: message,
      receiver: receiverId,
      time: Date.now()
    });
  };

  handleIncomingMessage(data) {
    let messageArray = [];
    let allMessages = JSON.parse(localStorage.getItem('allMessages'));
    if (allMessages) {
      messageArray = allMessages;
    }
    messageArray.push(data);
    localStorage.setItem('allMessages', (JSON.stringify(messageArray)));
    this.setState({ message: '' })
  }

  handleReceiverSelection(receiverId) {
    this.setState({ receiverId: receiverId });
  }

  updateValueOfAutoSelect(receiverData) {
    this.setState({receiverId: receiverData.value});
  }

  updateMessage(message) {
    this.setState({message: message});
  }

  render () {
    const { receiverId, currentUserId, message } = this.state; 
      return (
        <div className='container-fluid' style={{ paddingTop: '20px' }}>
          <div className='row'>
          <div className='col-4'>
          <FriendList
            selectReceiver={(e) => this.handleReceiverSelection(e)}
            currentUserId={currentUserId}
            updateValueOfAutoSelect={(e) => this.updateValueOfAutoSelect(e)}
          />
          </div>
          <div className='col-8'>
            <ChatWindow
              receiverId={receiverId}
              currentUserId={currentUserId}
              updateMessage={(e) => this.updateMessage(e)}
              handleSendClick={(e) => this.handleSendClick(e)}
              message={message}
            /> 
            </div>
          </div>
      </div>
   );
  }
};

export default App;