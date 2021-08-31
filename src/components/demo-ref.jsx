import React, {
  Component,
} from 'react';

import HelloWorld from './hello-world';
import ToggleButton from './toggle-button';

class DemoRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.helloWorldRef = React.createRef();
    // this.childRef = React.createRef();
  }

  autoHint = (element) => {
    element.setAttribute('placeholder', element.name);
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.current.focus();
    }

    // if (this.childRef) {
    //   console.log(this.childRef.current.textContent);
    // }
  }

  mute = () => {
    if (this.helloWorldRef) {
      // 访问自定义组件的属性和方法
      console.log(this.helloWorldRef.current);
      this.helloWorldRef.current.mute();
    }
  }

  buttonText = (element) => {
    console.log(element.textContent);
  }

  render() {
    return (
      <div
          className="demo-ref">
        <input
            type="text"
            ref={ this.inputRef } />
        <br />
        <input
            type="password"
            name="password"
            ref={ this.autoHint } />
        <HelloWorld
            msg="hello"
            ref={ this.helloWorldRef } />
        <button
            onClick={ this.mute }>mute</button>
        <br />
        <ToggleButton
            refProps={ this.buttonText } />
      </div>
    );
  }
}

export default DemoRef;
