import React, {
  Component,
} from 'react';

import HelloWorld from './hello-world';
import NavMenu from './nav-menu';

class DemoProps extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItems = (list) => list.map((item) => ((
    <li>
      <a
          href={ item.href }>{ item.label }</a>
    </li>
  )));

  render() {
    return (
      <div className="demo-props">
        <h1>props</h1>
        <h2>props.children</h2>
        <HelloWorld>hi there</HelloWorld>
        <h2>render props</h2>
        <NavMenu
            renderItems={ this.renderItems } />
      </div>
    );
  }
}

export default DemoProps;
