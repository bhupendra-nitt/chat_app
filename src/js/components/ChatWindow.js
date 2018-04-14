import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

import { getFriendList } from '../helpers/FriendListHelper';
const handleAttributeChange = (changeHandler, e) => changeHandler(e.target.value);

const ChatWindow = (props) => {
  const { handleSendClick, receiverId, updateMessage, currentUserId, message } = props;
  const allMessages = JSON.parse(localStorage.getItem('allMessages'));
    return (
      <div style={{
        width: '100 %',
        height: '100%'
      }}>
      <div>
       {getFriendList[receiverId-1].name}
      </div>
      <div style={{
        width: '100%',
        height: '80%',
        border: '1px solid #d3d3d3',
        borderRadius: '5px',
        maxHeight: '500px',
        padding: '10px',
        overflow: 'scroll'}} >
        {
          map(allMessages, (message) => {
            if(message.author === currentUserId && message.receiver === receiverId) {
            return <OutgoingMessage
              key={allMessages.indexOf(message)} 
                message={message}/>
            }
            if (message.receiver === currentUserId && message.author === receiverId) {
              return <IncomingMessage
                key={allMessages.indexOf(message)}
                message={message}/>
            }
            return null;
          }) 
        }
      </div>
      <div style={{width: '100%'}}>
        <input id='m' 
        autoComplete='off' 
        style={{ width: '80%', padding: '10px' }}
        value={message}
        onChange={(e) => handleAttributeChange(updateMessage, e)}
        />
        <button
          onClick={(e) => handleSendClick(e)}
          className='btn btn-success'
          style={{
            padding: '5px',
            width: '78px',
            marginLeft: '30px',
            height: '40px'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  handleSendClick: PropTypes.func.isRequired,
  receiverId: PropTypes.number,
  updateMessage: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
  message: PropTypes.string 
};

export default ChatWindow;