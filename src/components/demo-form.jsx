import React, {
  Component,
} from 'react';

import './demo-form.scss';

class DemoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uppercase: '',

      options: [
        {
          id: 1,
          label: 'A',
        },
        {
          id: 2,
          label: 'B',
        },
        {
          id: 3,
          label: 'C',
        },
      ],

      form: {
        username: 'admin',
        comment: 'it\'s nice',
        date: '2021-09-12',
        rememberMe: false,
        checkboxGroup: [
          {
            id: 1,
            label: 'A',
            checked: false,
          },
          {
            id: 2,
            label: 'B',
            checked: false,
          },
          {
            id: 3,
            label: 'C',
            checked: true,
          },
        ],
        selected: 'B',
      },
    };
  }

  updateValue = (event) => {
    this.setState({
      uppercase: event.target.value.toUpperCase(),
    });
  }

  // 更新表单数据
  updateForm = (event) => {
    const {
      target,
    } = event;
    const {
      name,
      type,
      checked,
      value,
    } = target;

    // 根据元素类型选择值
    let inputValue = value;
    switch (type) {
      case 'checkbox':
      case 'radio':
        inputValue = checked;
        break;
      default:
    }

    this.setState((oldState) => ({
      form: {
        ...oldState.form,
        [name]: inputValue, // 按名称更新数据
      },
    }));
  }

  // 更新 checkbox group
  updateCheckboxGroup = (event, id) => {
    const data = [
      ...this.state.form.checkboxGroup,
    ];
    const {
      checked,
    } = event.target;

    for (const i in data) {
      const item = data[i];

      if (item.id === id) {
        data[i].checked = checked;
        break;
      }
    }

    this.setState((oldState) => ({
      form: {
        ...oldState.form,
        checkboxGroup: data,
      },
    }));
  }

  // 劫持并处理表单提交逻辑
  submitForm = (event) => {
    event.preventDefault();

    console.log(this.state.form);
  }

  listItems() {
    const items = [];
    const {
      form,
    } = this.state;

    for (const key in form) {
      items.push(
        key === 'checkboxGroup'
          ? (
            <li
                key={key}>{ `${key}: ${JSON.stringify(form[key])}` }</li>
          )
          : (
            <li
                key={key}>{ `${key}: ${form[key]}` }</li>
          ),

      );
    }

    return items;
  }

  render() {
    const {
      options,
      form,
    } = this.state;
    const {
      username,
      comment,
      date,
      rememberMe,
      checkboxGroup,
      selected,
    } = form;

    return (
      <div className="demo-form">
        <h1>Form</h1>
        <label>
          <span>uppercase</span>
          <input
              type="text"
              name="uppercase"
              value={this.state.uppercase}
              onChange={this.updateValue} />
        </label>
        <ul>{ this.listItems() }</ul>
        <form
            onSubmit={this.submitForm}>
          <label>
            <span>username</span>
            <input
                type="text"
                name="username"
                value={username}
                onChange={this.updateForm} />
          </label>
          <label>
            <span>textarea</span>
            <textarea
                name="comment"
                value={comment}
                onChange={this.updateForm}></textarea>
          </label>
          <label>
            <span>date</span>
            <input
                type="date"
                name="date"
                value={date}
                onChange={this.updateForm} />
          </label>
          <h3>checkbox/radio & group</h3>
          <label>
            <span>checkbox</span>
            <input
                type="checkbox"
                name="rememberMe"
                value={rememberMe}
                onChange={this.updateForm} />
          </label>
          <label>
            <span>select</span>
            <select
                name="selected"
                value={selected}
                onChange={this.updateForm}>
              {
                options.map((item) => (
                  <option
                      key={item.value}
                      value={item.value}>{ item.label }</option>
                ))
              }
            </select>
          </label>
          <label>
            <span>checkbox group</span>
            {
              checkboxGroup.map((item) => (
                <div
                    key={item.id}>
                  <input
                      type="checkbox"
                      name="checkboxGroup"
                      checked={item.checked}
                      onChange={(event) => this.updateCheckboxGroup(event, item.id)} />
                  <span>{ item.label }</span>
                </div>
              ))
            }
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DemoForm;
