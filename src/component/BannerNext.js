import React, { Component } from "react";
import Image from "./Image";
import logo from "../Images/banner1.jpg";
import styles from "./Nav.module.css";
import Button from "./Button";
import {Link} from "react-router-dom";
import { className } from "postcss-selector-parser";
export default class BannerNext extends Component {
  render() {
    return (
      <div className={styles.Backgroundcontent}>
        <div className={styles.imageholder}>
          <Image image={logo} />
        </div>
        </div>
     
    );
  }
}
