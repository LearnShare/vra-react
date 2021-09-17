import React, {
  Component,
} from 'react';

import ToggleButton from './components/toggle-button';

class App extends Component {
  toggleOnChange = (eventData) => {
    console.log(eventData);
  }

  render() {
    return (
      <div className="App">
        <ToggleButton
            onChange={ this.toggleOnChange } />
      </div>
    );
  }
}

export default App;
