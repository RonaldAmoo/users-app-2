import React from "react";

class UserItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.email}</h2>
        <h4>{this.props.phonenumber}</h4>
        <h6>{this.props.password}</h6>
      </div>
    );
  }
}

export default UserItem;
