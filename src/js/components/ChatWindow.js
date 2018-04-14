import React from 'react';
import PropTypes from 'prop-types';
import { getFriendList } from '../helpers/FriendListHelper';

const ChatWindow = (props) => {
  const { handleSendClick, receiverId } = props;
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
                borderRadius: '5px'}} />
            <div style={{width: '100%'}}>
                <input id='m' 
                autoComplete='off' 
                style={{ width: '80%', padding: '10px' }}
                />
                <button
                    onClick={(e) => handleSendClick(e)}
                    className='btn btn-success'
                    style={{
                        padding: '5px',
                        width: '78px',
                        marginLeft: '30px',
                        height: '40px'}}
                >Send</button>
            </div>
        </div>
    );
};

ChatWindow.propTypes = {
  handleSendClick: PropTypes.func.isRequired,
  receiverId: PropTypes.number 
};

export default ChatWindow;