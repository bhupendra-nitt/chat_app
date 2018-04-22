import React from 'react';
import PropTypes from 'prop-types';

const IncomingMessage = ({message}) => {
  return (
    <div style={{
      textAlign: 'left',
      color: 'grey'
    }}>
     {message.message}
    </div>
  );
}; 

IncomingMessage.propTypes = {
  message: PropTypes.object
};

export default IncomingMessage;