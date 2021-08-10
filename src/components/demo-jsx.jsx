import React, {
  Component,
} from 'react';

class DemoJsx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueA: 1,
      valueB: 'hello',
      checked: false,
      list: [
        'A',
        'B',
        'C',
      ],

      inputType: 'password',
      infoClasses: ['info', 'warning'],
    };

    this.listenerOne = this.listenerOne.bind(this);
  }

  strong() {
    return (
      <strong>strong</strong>
    );
  }

  listenerOne(event) {
    console.log(event.type, 'one');
  }

  listenerTwo = (event) => {
    console.log(event.type, 'two');
  }

  render() {
    const span = <span>span</span>;

    const mark = (
      <mark>mark</mark>
    );

    const listItems = (
      <>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </>
    );

    const {
      valueA,
      valueB,
      checked,
      list,
      inputType,
      infoClasses,
    } = this.state;

    return (
      <div className="jsx-demo">
        <h1>JSX</h1>
        <h2>1. JSX in JavaScript</h2>
        <p>{ span } { mark } { this.strong() }</p>
        <ul>{ listItems }</ul>
        <h2>2. JavaScript in JSX</h2>
        <p>{ valueA + 2 } { `${valueB} world` }</p>
        <p>{
          checked
            ? <span>ON</span>
            : <span>OFF</span>
        }</p>
        <ol>{
          list.map((value) => (
            <li>{ value }</li>
          ))
        }</ol>
        <h2>3. attrs</h2>
        <input type={inputType} />
        <button
            tabIndex="2">tabIndex</button>
        <button
            className="primary">Primary</button>
        <p
            className={infoClasses}>info warning</p>
        <h2>4. events</h2>
        <button
            onClick={this.listenerOne}>One</button>
        <button
            onClick={this.listenerTwo}>Two</button>
      </div>
    );
  }
}

export default DemoJsx;
