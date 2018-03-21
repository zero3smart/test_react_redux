import { combineReducers } from 'redux';
import markets from './reducers/markets';
import companies from './reducers/companies';
import states from './reducers/states';
import components from './reducers/components';

export default combineReducers({
  markets,
  companies,
  states,
  components
});