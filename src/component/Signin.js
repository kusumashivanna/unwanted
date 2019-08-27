import React, { Component } from 'react'
import Header from './Header';
import BannerNext from './BannerNext';
import SignInPage from"./SignInPage"
export default class Signin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BannerNext/>
                <SignInPage/>
            </div>
        )
    }
}
