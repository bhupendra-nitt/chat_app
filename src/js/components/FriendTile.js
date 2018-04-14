import React from 'react';
import PropTypes from 'prop-types';

const FriendTile = ({friend}) => {
    return (
        <div>
            {friend.name}
        </div>
    );
};

FriendTile.defaultProps = {
    friend: {}
};

FriendTile.propTypes = {
    friend: PropTypes.object
};

export default FriendTile;
