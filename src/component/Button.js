import React, { Component } from 'react'
import styles from './Button.module.css'
export default class Button extends Component {
    render() {
        return (
            <div >
            <button className={this.props.borderRadius==="20px"?(this.props.color==="white"?styles.button:styles.buttonWithBlackColor):styles.button1} >{this.props.children}</button> </div>
        )
    }
}
