import React from 'react';
import PropTypes from 'prop-types';

const ChatWindow = (props) => {
    const { handleSendClick } = props;
    return (
        <div>
            <div>
                <input id='m' autoComplete='off' /><button
                    onClick={(e) => handleSendClick(e)}
                >Send</button>
            </div>
        </div>
    );
};

ChatWindow.propTypes = {
    handleSendClick: PropTypes.func.isRequired
};

export default ChatWindow;