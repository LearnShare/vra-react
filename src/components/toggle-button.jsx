import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  toggleChecked = () => {
    this.setState((oldState) => ({
      checked: !oldState.checked,
    }));
  }

  render() {
    const {
      checked,
    } = this.state;
    const {
      refProps,
    } = this.props;

    return (
      <button
          ref={ refProps }
          onClick={ this.toggleChecked }>{ checked ? 'ON' : 'OFF' }</button>
    );
  }
}

ToggleButton.propTypes = {
  refProps: PropTypes.any,
};

ToggleButton.defaultProps = {
  refProps: React.createRef(),
};

export default ToggleButton;

// const ToggleButtonRef = React.forwardRef((props, ref) => (
//   <ToggleButton
//       refProps={ ref } />
// ));

// export default ToggleButtonRef;
