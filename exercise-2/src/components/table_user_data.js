import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      isHover: false
    }
  }

  onMouseEnterHandler(id) {
    this.setState({
      id: id, isHover: true
    });
  }

  onMouseLeaveHandler(id) {
    this.setState({
      id: id, isHover: false
    });
  }

  onClickHandler(id) {
    let user = this.props.users.find(u => u.id === id);
    this.props.changeCurrentUser(user);
  }

  renderButton(id) {
    if (this.state.id === id && this.state.isHover) {
      return <div>
        <span onClick={() => this.onClickHandler(id)}>
          <i className='fa fa-edit' style={{color: 'blue', cursor: 'pointer', marginRight: 10}}></i>
        </span>
        <span>
          <i className='fa fa-trash' style={{color: 'blue', cursor: 'pointer'}}></i>
        </span>
      </div>
    }
  }

  renderUserData() {
    const {users} = this.props;
    const rows = users.map((user, index) => {
      return (
        <tr key={`user-${index}`}
          onMouseEnter={() => this.onMouseEnterHandler(user.id)}
          onMouseLeave={() => this.onMouseLeaveHandler(user.id)}>
          <td className='text-left' width="20%">{user.name}</td>
          <td className='text-left' width="20%%">{user.email}</td>
          <td className='text-center' width="10%">{this.renderButton(user.id)}</td>
        </tr>
      );
    });

    return rows;
  }

  render() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <td className='text-left'>{'Name'}</td>
            <td className='text-left'>{'Email'}</td>
            <td className='text-center'>{'Action'}</td>
          </tr>
        </thead>
        <tbody>
          {this.renderUserData()}
        </tbody>
      </table>
    );
  }
}

TableUserData.propTypes = {
  users: PropTypes.array,
  changeCurrentUser: PropTypes.func
};
