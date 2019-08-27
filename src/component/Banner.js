import React, { Component } from "react";
import Image from "./Image";
import logo from "../Images/banner1.jpg";
import styles from "./Nav.module.css";
import Button from "./Button";
import {Link} from "react-router-dom";
export default class Banner extends Component {
  render() {
    return (
      <div className={styles.Backgroundcontent}>
        <div className={styles.imageholder}>
          <Image image={logo} />
        </div>
        <div className={styles.Header}>
          <div className={styles.Heading}>Where do you want to go ?</div>
          <div className={styles.contents}>
            This will be the least expensive ride you have ever made.
          </div>
          <div className={styles.button}>
            
           <Link to="/Offeraride"> <Button color="white" borderRadius="20px">Offer a ride</Button></Link>
          </div>
        </div>
      </div>
     
    );
  }
}
