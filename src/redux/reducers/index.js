import {combineReducers} from 'redux';
import Auth from './Auth';
import Users from './Users';
import Search from './Search';
import Topup from './Topup';
import Register from './Register';
import Transfer from './Transfer';
import Device from './Device';
import Receiver from './Receiver';
import History from './History';
import HistoryAll from './HistoryAll';

const reducers = combineReducers({
  Auth,
  Users,
  Search,
  Topup,
  Transfer,
  Register,
  Device,
  Receiver,
  History,
  HistoryAll,
});

export default reducers;
