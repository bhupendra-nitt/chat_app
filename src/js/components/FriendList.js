import React from 'react';
import FriendTile from './FriendTile';
import { getFriendList } from '../helpers/FriendListHelper';

const FriendList = () => {
    const friendList = getFriendList;
    return (
        <div>
            {
                friendList.map((friend) => {
                return <FriendTile
                key={friend.id} 
                friend={friend}/> 
             }
                )
            }
        </div>
    );
};

export default FriendList;