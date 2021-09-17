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
    this.setState((oldState) => {
      const newState = {
        checked: !oldState.checked,
      };

      const {
        onChange,
      } = this.props;
      if (onChange) {
        onChange(newState);
      }

      return newState;
    });
  }

  render() {
    const {
      checked,
    } = this.state;

    return (
      <button
          type="button"
          onClick={this.toggleChecked}>{ checked ? 'ON' : 'OFF' }</button>
    );
  }
}

ToggleButton.propTypes = {
  onChange: PropTypes.func,
};

ToggleButton.defaultProps = {
  onChange: () => {},
};

export default ToggleButton;
