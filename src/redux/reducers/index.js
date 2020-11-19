import {combineReducers} from 'redux';
import Auth from './Auth';
import Users from './Users';
import Search from './Search';
import Topup from './Topup';
import Register from './Register';
import Transfer from './Transfer';
import Device from './Device';

const reducers = combineReducers({
  Auth,
  Users,
  Search,
  Topup,
  Transfer,
  Register,
  Device,
});

export default reducers;
