import React from 'react';

import HelloWorld from './components/hello-world';
import ToggleButton from './components/toggle-button';

function App() {
  return (
    <div className="app">
      <HelloWorld msg="Hello World from React" />
      <ToggleButton />
    </div>
  );
}

export default App;
