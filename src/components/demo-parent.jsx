import React, {
  Component,
} from 'react';

import DemoChildren from './demo-children';

class DemoParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'Hello',
      sizes: [
        'small',
        'medium',
        'large',
      ],
      config: {
        x: 1,
        y: 'B',
        z: false,
      },
      count: {
        value: 0,
      },
    };
  }

  addNumber = (value) => {
    this.setState((oldState) => ({
      count: {
        value: oldState.count.value + value,
      },
    }));
  }

  render() {
    const {
      msg,
      sizes,
      config,
      count,
    } = this.state;

    return (
      <div className="demo-parent">
        <DemoChildren
            numberValue={ 12 }
            stringValue={ msg }
            list={ sizes }
            config={ config }
            count={ count.value }
            func={ this.addNumber } />
      </div>
    );
  }
}

export default DemoParent;
