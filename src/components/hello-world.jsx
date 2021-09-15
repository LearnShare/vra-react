import React from 'react';

function HelloWorld(props) {
  return (
    <div
        className="hello-world">
      { props.children }
    </div>
  );
}

export default HelloWorld;
