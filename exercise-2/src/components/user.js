import React, { Component } from 'react';
import TableUserData from './table_user_data';
import UserForm from './user_form'

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: 'Gio', email: 'test1@example.com'},
        {id: 2, name: 'Oi', email: 'test2@example.com'},
        {id: 3, name: 'Xin', email: 'test3@example.com'},
        {id: 4, name: 'Dung', email: 'test4@example.com'},
        {id: 5, name: 'Lay', email: 'test5@example.com'},
        {id: 6, name: 'Em', email: 'test6@example.com'},
        {id: 7, name: 'Di', email: 'test7@example.com'}
      ],
      curTime : new Date().toLocaleString(),
      currentUser: null
    }
  }

  componentWillMount() {
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  onChangeAttribute(event, attribute) {
    let newState = this.state
    newState.currentUser[attribute] = event.target.value
    this.setState(newState);
  }

  changeCurrentUser(user) {
    let newState = this.state
    newState.currentUser = user
    this.setState(newState)
  }

  onSubmitForm(user) {
    let newState = this.state
    this
  }

  renderTableListUser() {
    return (
      <div>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <td className='text-left'><h3>{'Header'}</h3></td>
            <td className='text-right'>{this.state.curTime}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50%">
              <TableUserData
                users={this.state.users}
                changeCurrentUser={this.changeCurrentUser.bind(this)}
                currentUser={this.state.currentUser}
              />
            </td>
            <td>
              <UserForm onChangeAttribute={this.onChangeAttribute.bind(this)}
                currentUser={this.state.currentUser}/>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTableListUser()}
      </div>
    );
  }
}
