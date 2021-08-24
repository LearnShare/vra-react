import React, {
  Component,
} from 'react';

class DemoState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
    };
  }

  sum() {
    const {
      a,
      b,
    } = this.state;

    return a + b;
  }

  addTwo = () => {
    this.setState((oldState) => ({
      a: oldState.a + 2,
    }));
  }

  render() {
    const {
      a,
      b,
    } = this.state;

    return (
      <div className="demo-state">
        <p>a: { a }, b: { b }</p>
        <p>sum: { this.sum() }</p>
        <button
            onClick={ this.addTwo }>a + 2</button>
      </div>
    );
  }
}

export default DemoState;
