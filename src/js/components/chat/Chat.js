import React, { Component } from 'react';
import io from 'socket.io-client';
import ChatWindow from './ChatWindow';
import ChatStore from '../../stores/ChatStore';
import ChatActions from '../../actions/ChatActions';
import { getSocket } from '../../Api/api';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: ChatStore.getCurrentUserId(),
      receiverId: ChatStore.getCurrentReceiverId(),
      message: ChatStore.getMessage(),
      messageList: ChatStore.getMessageList()
    };
    getSocket.on('RECEIVE_MESSAGE', (data) => ChatActions.handleIncomingMessage(data));
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ChatStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ChatStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      message: ChatStore.getMessage(),
      messageList: ChatStore.getMessageList(),
      receiverId: ChatStore.getCurrentReceiverId()
    })
  }

  render() {
    const { receiverId, currentUserId, message, messageList } = this.state; 
    return (
      <ChatWindow
        receiverId={receiverId}
        currentUserId={currentUserId}
        updateMessage={(e) => ChatActions.updateMessage(e)}
        handleSendClick={(e) => ChatActions.handleSendClick({
          author: currentUserId,
          message: message,
          receiver: receiverId,
          time: Date.now()
        })}
        message={message}
        messageList={messageList}
      />
    ) 
  }
};

export default Chat;
