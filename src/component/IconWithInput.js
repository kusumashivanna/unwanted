import React, { Component } from "react";
import styles from "./IconWithInput.module.css";
import Image from "./Image";
export default class IconWithInput extends Component {
  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.imageHolder}>
          <Image
            image={this.props.icon}
            size="cover"
            borderRadius="50%"
            height="25px"
            width="100%"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            style={{ border: this.props.border }}
          />
        </div>
      </div>
    );
  }
}
