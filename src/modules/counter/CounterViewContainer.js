import {connect} from 'react-redux';
import CounterView from './CounterView';
import {
  increment,
  reset,
  random,
} from './CounterState';

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
  }
)(CounterView);
