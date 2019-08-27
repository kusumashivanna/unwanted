import React, { Component } from "react";
import Button from "./Button";
import IconWithInput from "./IconWithInput";
import styles from "./square.module.css";
import LOC from "../Images/download.jpeg";

export default class FindARideNext extends Component {
  render() {
    return (
      <div className={styles.square}>
        <div className={styles.header}>Find a ride</div>
        <div className={styles.insquarecontent}>
          <IconWithInput
            icon={LOC}
            type="text"
            placeholder="Leaving From"
            border="none"
          />
        </div>
        <div className={styles.insquarecontent}>
          <IconWithInput
            icon={LOC}
            type="text"
            placeholder="Going To"
            border="none"
          />
        </div>
        <div className={styles.Line} />
        <div className={styles.leftcontent}>
          <div className={styles.footer}>Date and Time</div>
          <div className={styles.content}>Today 17:00</div>
        </div>
        <div className={styles.insquarecontent}>
          <Button borderRadius="0px">Continue</Button>
        </div>
      </div>
    );
  }
}
