import keyMirror from 'keymirror';

export default {
  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null,
  }),
  ActionTypes: keyMirror({
    SELECT_FRIEND_FROM_LIST: null,
    HANDLE_MSG_UPDATE: null,
    HANDLE_INCOMING_MSG: null,
    HANDLE_SEND_MSG_CLICK: null,
    UPDATE_CURRENT_USER_ID: null
  })
}