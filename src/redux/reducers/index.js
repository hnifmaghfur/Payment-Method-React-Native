import {combineReducers} from 'redux';
import Auth from './Auth';
import Users from './Users';
import Search from './Search';
import Topup from './Topup';
import Register from './Register';
import Transfer from './Transfer';

const reducers = combineReducers({
  Auth,
  Users,
  Search,
  Topup,
  Transfer,
  Register,
});

export default reducers;
