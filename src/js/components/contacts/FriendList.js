import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { partial } from 'lodash';

import FriendTile from './FriendTile';
import { getFriendList } from '../../helpers/FriendListHelper';
const handleAttributeChange = (changeHandler, e) => changeHandler(e.value);

const FriendList = (props) => {
  const { selectReceiver, currentUserId } = props;
  const friendList = getFriendList.map(friend=> {
    return { value: friend.id, label: friend.name }
  });
  return (
      <div>
        <span style={{ color: 'green' }}>{`Hello, ${getFriendList[currentUserId-1].name}`}</span>
        <Select
          style={{ width: '100%' }}
          name='name'
          options={friendList}
          onChange={partial(handleAttributeChange, selectReceiver)} 
        />
        {
          getFriendList.map((friend) => {
            return <FriendTile
            key={friend.id} 
            shouldRender={friend.id !== currentUserId}
            friend={friend}
            selectReceiver={(e) => selectReceiver(e)}
          /> 
        }
       )
      }
    </div>
  );
};

FriendList.propTypes = {
  selectReceiver: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired
};

export default FriendList;
