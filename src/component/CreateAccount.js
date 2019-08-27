import React, { Component } from "react";
import Image from "./Image";
import IconWithInput from"./IconWithInput"
import styles from "./square.module.css";
import un from "../Images/round_perm_identity_black_18dp.png"
import gm from "../Images/round_email_black_18dp.png"
import pwd from "../Images/icons8-forgot-password-30.png"
import fb from "../Images/facebook-circled.png";
import google from "../Images/icons8-google-plus-circled-50.png";
import linkedin from "../Images/linkedin-circled.png";
import Button from "./Button"
import {Link} from "react-router-dom";
export default class CreateAccount extends Component {
  render() {
    return (
      <div className={styles.square}>
        <div className={styles.header}>Create Account</div>
        <div className={styles.logo}>
          <Image image={fb} />
        </div>
        <div className={styles.logo}>
          <Image image={google} />
        </div>
        <div className={styles.logo}>
          <Image image={linkedin} />
        </div>
      
      <div className={styles.content}>or</div>
      <div className={styles.content}>use your email for signup</div>
      <div className={styles.insquarecontent}>
      <IconWithInput
            icon={un}
            type="text"
            placeholder="User Name"
            border="none"
          />
      </div>
      <div className={styles.insquarecontent}>
      <IconWithInput
            icon={gm}
            type="text"
            placeholder="Gmail"
            border="none"
          />
      </div>
      <div className={styles.insquarecontent}>
      <IconWithInput
            icon={pwd}
            type="text"
            placeholder="Password"
            border="none"
          />
      </div>
      <div className={styles.insquarecontent}>
      <IconWithInput
            icon={pwd}
            type="text"
            placeholder="Confirm Password"
            border="none"
          />
      </div>
      <div className={styles.insquarecontent}>
          <Link to="/Userlogin"><Button borderRadius="0px">Sign Up</Button></Link>
    </div>
    <div className={styles.content}>Have already an account?<Link to="/Sign_in"><div className={styles.footer}>Login now</div></Link>
      </div>
      </div>
      
    );
  }
}
