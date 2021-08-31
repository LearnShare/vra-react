import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
    };
  }

  mute() {
    this.setState({
      muted: true,
    });
  }

  render() {
    const {
      muted,
    } = this.state;
    const {
      msg,
    } = this.props;

    return (
      <p>{ muted ? '(muted)' : msg }</p>
    );
  }
}

HelloWorld.propTypes = {
  msg: PropTypes.string,
};

HelloWorld.defaultProps = {
  msg: '',
};

export default HelloWorld;
