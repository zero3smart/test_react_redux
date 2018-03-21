import { SET_COMPONENTS } from '../actions/types';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_COMPONENTS:
      return action.payload;
    default: return state;
  }
}