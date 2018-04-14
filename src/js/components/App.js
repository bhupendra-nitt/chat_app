import React, { Component } from 'react';
import io from 'socket.io-client';

import FriendList from './FriendList';
import ChatWindow from './ChatWindow';

class App extends Component {
    constructor(props) {
      super(props);
      const params = (new URL(document.location)).searchParams;
      const currentUserID = Number(params.get('user_id')) || 1;
      this.state = {
        currentUserID,
        receiverId: 2
      };
      this.socket = io('localhost:3000');
      this.handleSendClick = this.handleSendClick.bind(this);
      this.handleReceiverSelection = this.handleReceiverSelection.bind(this);
      this.updateValueOfAutoSelect = this.updateValueOfAutoSelect.bind(this);
      this.socket.on('RECEIVE_MESSAGE', (data) => this.handleIncomingMessage(data));
    }

  handleSendClick() {
    const { currentUserID, receiverId } = this.state;
    this.socket.emit('SEND_MESSAGE', {
      author: currentUserID,
      message: 'test',
      receiver: receiverId,
      time: Date.now()
    });
  };

  handleIncomingMessage(data) {
    console.log(data);
  }

  handleReceiverSelection(receiverId) {
    this.setState({ receiverId: receiverId });
  }

  updateValueOfAutoSelect(receiverData) {
    this.setState({receiverId: receiverData.value});
  }

  render () {
    const { receiverId, currentUserID } = this.state; 
      return (
        <div className='container-fluid' style={{ paddingTop: '20px' }}>
          <div className='row'>
          <div className='col-4'>
          <FriendList
            selectReceiver={(e) => this.handleReceiverSelection(e)}
            currentUserID={currentUserID}
            updateValueOfAutoSelect={(e) => this.updateValueOfAutoSelect(e)}
          />
          </div>
          <div className='col-8'>
            <ChatWindow
              receiverId={receiverId}
              handleSendClick={(e) => this.handleSendClick(e)}/> 
            </div>
          </div>
      </div>
   );
  }
};

export default App;