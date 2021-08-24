import React from 'react';

import DemoState from './components/demo-state';
import DemoProps from './components/demo-props';
import DemoParent from './components/demo-parent';

function App() {
  return (
    <div className="App">
      <h2>state</h2>
      <DemoState />
      <h2>props</h2>
      <DemoProps />
      <DemoParent />
    </div>
  );
}

export default App;
