import {connect} from 'react-redux';
import CounterView from './CounterView';
import {
  increment,
  reset,
  random,
} from './CounterState';
import { pushRoute } from '../../modules/navigation/NavigationState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  }),
  {
    increment,
    reset,
    random,
    pushRoute,
  }
)(CounterView);
