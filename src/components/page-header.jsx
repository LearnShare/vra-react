import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';

class PageHeader extends Component {
  render() {
    const {
      token,
      userData,
      hasLogin,
      userId,
      hasUserType,
    } = this.props;

    const userDataString = userData
        && JSON.stringify(userData);
    const isAdmin = hasUserType('admin');

    return (
      <div className="page-header">
        <h2>page-header</h2>
        <h3>store.state</h3>
        <ul>
          <li>token: { token }</li>
          <li>userData: { userDataString }</li>
          <li>hasLogin: { hasLogin ? 'true' : 'false' }</li>
          <li>isAdmin: { isAdmin ? 'true' : 'false' }</li>
          <li>userId: { userId }</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    token,
    userData,
  } = state;

  return {
    token,
    userData,
    hasLogin: !!(token && userData),
    userId: userData && userData.id,
    hasUserType: (type) => {
      if (!userData) {
        return false;
      }

      const {
        userTypes,
      } = userData;
      return userTypes
          && userTypes.indexOf(type) >= 0;
    },
  };
};

export default connect(mapStateToProps)(PageHeader);
