import React, { Component } from "react";
import styles from "./Header.module.css";
import Image from "./Image";
import logo from "../Images/Banner.jpg"

import {Link} from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.imageHolder}>
          <div className={styles.logo}>
            <Image image={logo} />
          </div>
        </div>
        <div className={styles.nav}>
        <Link to="/Findaride">
          <div className={styles.label}>Find a ride</div></Link>
          <Link to="/Offeraride"><div className={styles.label}>Offer a ride</div></Link>
          <Link to="/Signup"><div className={styles.label}>Sign up</div></Link>
          <Link to="/Login"><div className={styles.label}>Login</div></Link>
        </div>
      </div>
    );
  }
}
