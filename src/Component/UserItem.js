import React from "react";

class UserItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h3>{this.props.email}</h3>
        <h3>{this.props.phonenumber}</h3>
        <h3>{this.props.password}</h3>
      </div>
    );
  }
}

export default UserItem;
