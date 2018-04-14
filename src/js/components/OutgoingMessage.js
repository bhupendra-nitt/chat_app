import React from 'react';
import PropTypes from 'prop-types';

const OutgoingMessage = ({ message }) => {
    return (
        <div style={{
            textAlign: 'right',
            color: 'green' }}>
            {message.message}
        </div>
    );
};

OutgoingMessage.propTypes = {
    message: PropTypes.object
};

export default OutgoingMessage;