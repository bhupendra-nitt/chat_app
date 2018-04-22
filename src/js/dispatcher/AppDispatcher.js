import { Dispatcher } from 'flux';

import Constants from '../Constants';

export default Object.assign(new Dispatcher(), {
  handleServerAction(action) {
    this.dispatch({
      source: Constants.ActionSources.SERVER_ACTION,
      action
    });
  },

  handleViewAction(action) {
    this.dispatch({
      source: Constants.ActionSources.VIEW_ACTION,
      action
    });
  }
});
