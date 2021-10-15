import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';

class PageUser extends Component {
  render() {
    const {
      setUserData,
      setToken,
      clear,
    } = this.props;

    return (
      <div className="page-user">
        <h2>page-user</h2>
        <h3>actions</h3>
        <button
            onClick={ () => { setUserData({
              id: 222,
              name: 'nobody',
              userTypes: [
                'user',
              ],
            }); } }>setUserData</button>
        <button
            onClick={ () => { setToken('new-token'); } }>setToken</button>
        <button
            onClick={ clear }>clear</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setToken: (token) => ({
    type: 'set-token',
    token,
  }),
  setUserData: (userData) => ({
    type: 'set-userdata',
    userData,
  }),
  clear: () => ({
    type: 'clear',
  }),
};

export default connect(null, mapDispatchToProps)(PageUser);
