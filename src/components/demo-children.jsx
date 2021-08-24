import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

class DemoChildren extends Component {
  static defaultProps = {
    numberValue: null,
    stringValue: '',
    list: [],
    config: {},
    count: 0,
    func: () => {},
  };

  add = () => {
    this.props.func(2);
  }

  render() {
    const {
      numberValue,
      stringValue,
      list,
      config,
      count,
    } = this.props;

    return (
      <div className="demo-children">
        <p>numberValue: { numberValue }</p>
        <p>stringValue: { stringValue }</p>
        <p>list:</p>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li
                    key={ index }>{ item }</li>
              );
            })
          }
        </ul>
        <p>config:</p>
        <ul>
          {
            Object.keys(config).map((key) => {
              return (
                <li
                    key={ key }>{ config[key] }</li>
              );
            })
          }
        </ul>
        <p>
          <span>count: { count }&nbsp;</span>
          <button
              onClick={ this.add }>+ 2</button>
        </p>
      </div>
    );
  }
}

DemoChildren.propTypes = {
  numberValue: PropTypes.number,
  stringValue: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  config: PropTypes.object,
  count: PropTypes.number,
  func: PropTypes.func,
};

export default DemoChildren;
