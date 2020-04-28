import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/tweets">
                Tweets
              </Link>
            </li>
            <li>
              <Link className="link" to="/addUs ">
                Add User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
