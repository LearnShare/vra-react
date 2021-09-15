import React, {
  Component,
} from 'react';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/about',
        },
      ],
    };
  }

  render() {
    return (
      <nav>
        <ul>
          { this.props.renderItems(this.state.list) }
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
