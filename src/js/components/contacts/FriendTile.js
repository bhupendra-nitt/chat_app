import React from 'react';
import PropTypes from 'prop-types';

const FriendTile = (props) => {
    const { friend, selectReceiver, shouldRender } = props;
    if(shouldRender) {
    return (
        <div style={{
            fontSize: '16px',
            padding: '5px',
            border: '1px solid #d3d3d3'}}
            onClick={() => selectReceiver(friend.id)}
            >
            {friend.name}
        </div>
    );
  }
  return null;
};

FriendTile.defaultProps = {
    friend: {}
};

FriendTile.propTypes = {
    friend: PropTypes.object,
    selectReceiver: PropTypes.func.isRequired,
    shouldRender: PropTypes.bool.isRequired
};

export default FriendTile;
