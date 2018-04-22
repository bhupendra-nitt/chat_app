import React, { Component } from 'react';

import ChatActions from '../actions/ChatActions';
import Chat from './chat/Chat';
import ContactList from './contacts/ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    const params = (new URL(document.location)).searchParams;
    const currentUserId = Number(params.get('user_id')) || 1;
    ChatActions.updateCurrentUserId(currentUserId);
  }

  render () {
      return (
        <div className='container-fluid' style={{ paddingTop: '20px' }}>
          <div className='row'>
          <div className='col-4'>
            <ContactList/>
          </div>
          <div className='col-8'>
            <Chat/> 
            </div>
          </div>
      </div>
   );
  }
};

export default App;