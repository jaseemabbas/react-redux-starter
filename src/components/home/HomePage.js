/**
 * Created by jaseemabbas on 14/12/16.
 */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../actions/UserActions';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onClickLoad = this.onClickLoad.bind(this);
  }

  onClickLoad() {
    this.props.actions.loadUsers();
  }

  userRow(user, index){
    return <div key={index}>{user.title}</div>;
  }

  // When called, it should examine this.props and this.state and return a single React element. This element can be
  // either a representation of a native DOM component, such as <div />, or another composite component that you've
  // defined yourself.
  render() {
    return (
      <div>
        <h1>Users</h1>
        <button onClick={this.onClickLoad}> Click here to load </button>
        {this.props.users.map(this.userRow)}
      </div>
    );
  }

}

// React.PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
HomePage.propTypes = {
  users : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

// If mapStateToProps is specified, the component will subscribe to Redux store updates. Any time it updates,
// mapStateToProps will be called. Its result must be a plain object, and it will be merged into the component’s props.
// If you omit it, the component will not be subscribed to the Redux store. If ownProps is specified as a second argument,
// its value will be the props passed to your component, and mapStateToProps will be additionally re-invoked whenever
// the component receives new props (e.g. if props received from a parent component have shallowly changed,
// and you use the ownProps argument, mapStateToProps is re-evaluated).
function mapStateToProps(state){
  return {
    users : state.users
  };
}

// If an object is passed, each function inside it will be assumed to be a Redux action creator. An object with the
// same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly,
// will be merged into the component’s props. If a function is passed, it will be given dispatch. It’s up to you to
// return an object that somehow uses dispatch to bind action creators in your own way.
// (Tip: you may use the bindActionCreators() helper from Redux.) If you omit it, the default implementation just
// injects dispatch into your component’s props. If ownProps is specified as a second argument, its value will be
// the props passed to your component, and mapDispatchToProps will be re-invoked whenever the component receives new props.
function mapDispatchToProps(dispatch){
  return {
    // Turns an object whose values are action creators, into an object with the same keys, but with every action
    // creator wrapped into a dispatch call so they may be invoked directly.
    // Normally you should just call dispatch directly on your Store instance. If you use Redux with React, react-redux
    // will provide you with the dispatch function so you can call it directly, too.
    // The only use case for bindActionCreators is when you want to pass some action creators down to a component that
    // isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
    actions : bindActionCreators(userActions, dispatch)
  };
}

// Connects a React component to a Redux store. connect is a facade around connectAdvanced, providing a convenient API
// for the most common use cases.
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
