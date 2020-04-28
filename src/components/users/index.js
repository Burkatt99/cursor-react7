import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_ITEM_USER } from "../../constans/user_type";
import { addUser, getUser } from "../../actions/actions";
import "./style.css";

class Users extends Component {
  state = {
    name: "",
    image: "",
    username: "@",
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeUserName = (e) => {
    this.setState({ username: e.target.value });
  };
  changeImg = (e) => {
    this.setState({ image: e.target.value });
  };

  addUsers = () => {
    this.props.addUser({
      name: this.state.name,
      username: this.state.username,
      avatar: this.state.image,
    });
  };

  componentDidMount = () => {
    this.props.getUser();
  };
  render() {
    return (
      <div className="addUser">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
            placeholder="Name..."
          ></input>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUserName}
            placeholder="Username..."
          ></input>
          <input
            type="text"
            value={this.state.image}
            onChange={this.changeImg}
            placeholder="Avatar..."
            id="avatar"
          ></input>
          <button onClick={this.addUsers}>Add</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.todo.users,
  };
}

export default connect(mapStateToProps, { addUser, getUser })(Users);
