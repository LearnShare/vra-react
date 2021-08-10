import React, {
  Component,
} from 'react';
import classNames from 'classnames';

import darkStyles from '../css/dark.module.scss';

class DemoStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 1. inline style
      styleObject: {
        fontSize: '16px',
        color: '#AAF',
      },

      // 2. style with class
      infoStyle: {
        info: true,
        warning: true,
      },
    };
  }

  render() {
    const {
      styleObject,
      infoStyle,
    } = this.state;

    return (
      <div
          className="demo-style">
        <h1>Style</h1>
        <h2>1. inline style</h2>
        <p
            style={{
              fontSize: '16px',
            }}>inline style object</p>
        <p
            style={styleObject}>style object from data</p>
        <h2>2. style with class</h2>
        <p
            className="error">error message</p>
        <p
            className={classNames(infoStyle)}>warning message</p>
        <button className="btn btn-primary">Bootstrap</button>
        <h2>3. css modules</h2>
        <p
            className={darkStyles.dark}>dark</p>
      </div>
    );
  }
}

export default DemoStyle;
