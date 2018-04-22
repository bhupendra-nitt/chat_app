import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../Constants';

let currentUserId = 1;
let currentReceiverId = 2;
let message = '';
let messages = [];

const ChatStore = Object.assign({}, BaseStore, {

  getCurrentUserId() {
    return currentUserId;
  },  
  getCurrentReceiverId() {
    return currentReceiverId
  },

  getMessage() {
    return message;
  },

  getMessageList() {
    return messages;
  },

  dispatcherToken: AppDispatcher.register((payload)=> {
    const action = payload.action;
    switch(action.actionType) {
      case Constants.ActionTypes.SELECT_FRIEND_FROM_LIST: {
        currentReceiverId = action.id;
        break;
      }

      case Constants.ActionTypes.HANDLE_MSG_UPDATE: {
        message = action.msg;
        break;
      }

      case Constants.ActionTypes.HANDLE_INCOMING_MSG: {
        const receivedMessage = action.msg;
        if (receivedMessage.receiver !== currentReceiverId) {
         messages.push(action.msg);
        }
        break;
      }

      case Constants.ActionTypes.HANDLE_SEND_MSG_CLICK: {
        message = '';
        messages.push(action.data);
      }

      case Constants.ActionTypes.UPDATE_CURRENT_USER_ID: {
        currentUserId = action.currentUserId;
        break;
      }

      default:
        return true;
    }
    ChatStore.emitChange();
    return true;
  })
});

export default ChatStore;