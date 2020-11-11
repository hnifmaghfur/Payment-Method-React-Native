import {combineReducers} from 'redux';
import Auth from './Auth';
import Users from './Users';
import UsersSearch from './UsersSearch';
import Topup from './Topup';
import ProfilePw from './ProfilePw';
import Register from './Register';

const reducers = combineReducers({
  Auth,
  Users,
  UsersSearch,
  Topup,
  ProfilePw,
  Register,
});

export default reducers;
