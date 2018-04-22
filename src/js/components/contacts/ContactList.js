import React, { Component } from 'react';
import FriendList from './FriendList';
import ChatStore from '../../stores/ChatStore';
import ChatActions from '../../actions/ChatActions';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: ChatStore.getCurrentUserId()
    };
  }

  render () {
    const { currentUserId } = this.state;
    return (
      <FriendList
        selectReceiver={(e) => ChatActions.selectFriendFromList(e)}
        currentUserId={currentUserId}
      />
    );
  }
};

export default ContactList;
