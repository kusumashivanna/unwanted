import React, { Component } from "react";
import Button from "./Button";
import Image from "./Image";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
export default class Banner1 extends Component {
  render() {
    return (
      <div>
        {this.props.imageposition === 1 ? (
          <div className={styles.Banner1}>
            <div className={styles.BannerLeft}>
              <div className={styles.imageholder}>
                <Image image={this.props.shorttrip} />
              </div>
            </div>
            <div className={styles.BannerRight}>
              <div className={styles.Heading}>{this.props.heading}</div>

              <div className={styles.content}>{this.props.contents}</div>
              <div className={styles.button}>
                {this.props.button === "Offer a ride" ? (
                  <Link to="/Offeraride">
                  
                    <Button color="black" borderRadius="20px">{this.props.button}</Button>
                  </Link>
                ) : (
                  <Link to="Signup">
                
                    <Button color="black" borderRadius="20px">{this.props.button}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.Banner1}>
            <div className={styles.BannerRight}>
              <div className={styles.Heading}>{this.props.heading}</div>

              <div className={styles.content}>{this.props.contents}</div>
              <div className={styles.button}>
                <Link to="/Findaride">
                  <Button color="black" borderRadius="20px">{this.props.button}</Button>
                </Link>
              </div>
            </div>
            <div className={styles.BannerLeft}>
              <div className={styles.imageholder}>
                <Image image={this.props.shorttrip} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
