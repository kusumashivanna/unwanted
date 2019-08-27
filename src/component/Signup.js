import React, { Component } from "react";
import Header from "../component/Header"
import BannerNext from "../component/BannerNext"
import CreateAccount from "../component/CreateAccount";
export default class Signup extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerNext />
        <CreateAccount />
      </div>
    );
  }
}
