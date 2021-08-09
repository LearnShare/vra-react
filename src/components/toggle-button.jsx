import React, {
  Component,
} from 'react';

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

    return (
      <button
          type="button"
          onClick={this.toggleChecked}>{ checked ? 'ON' : 'OFF' }</button>
    );
  }
}

export default ToggleButton;
