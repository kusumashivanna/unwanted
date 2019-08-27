import React, { Component } from 'react'
import Header from './Header';
import BannerNext from './BannerNext';
import FindARideNext from "./FindARideNext"

export default class Findaride extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BannerNext/>
                <FindARideNext/>
            </div>
        )
    }
}
