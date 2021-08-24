import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

function HelloWorld({
  msg,
}) {
  return <p>{ msg }</p>;
}

HelloWorld.propTypes = {
  msg: PropTypes.string,
};

HelloWorld.defaultProps = {
  msg: '',
};

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static defaultProps = {
    msg: '',
  };

  render() {
    const {
      msg,
    } = this.props;

    return (
      <div className="message-box">
        <p>{ msg }</p>
      </div>
    );
  }
}

MessageBox.propTypes = {
  msg: PropTypes.string,
};

class DemoProps extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="demo-props">
        <HelloWorld msg="hello msg" />
        <MessageBox />
      </div>
    );
  }
}

export default DemoProps;
