import Constants from '../Constants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { getSocket } from '../Api/api';

export default {
  selectFriendFromList(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.SELECT_FRIEND_FROM_LIST,
      id
    });
  },
  updateMessage(msg) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.HANDLE_MSG_UPDATE,
      msg
    }); 
  },
  handleIncomingMessage(msg) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.HANDLE_INCOMING_MSG,
      msg
    });  
  },
  handleSendClick(data) {
    getSocket.emit('SEND_MESSAGE', data);
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.HANDLE_SEND_MSG_CLICK,
      data  
    });  
  },
  updateCurrentUserId(currentUserId) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.UPDATE_CURRENT_USER_ID,
      currentUserId
    });   
  }
};
