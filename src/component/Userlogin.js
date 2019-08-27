import React, { Component } from 'react'
import HeaderLogin from './HeaderLogin';
import Banner from './Banner';
import Banner1 from './Banner1';

import shorttrip from "../Images/subbanner1.jpeg";
import shorttrip1 from "../Images/subbanner3.jpeg";
import longtrip from "../Images/subbanner2.jpeg";

export default class Userlogin extends Component {
    render() {
        return (
            <div>
                <HeaderLogin/>
                <Banner/>
                <Banner1
          shorttrip={shorttrip}
          imageposition={1}
          heading={"SHORT TRIPS"}
          contents={
            "More convenience for meetings, art exhibitions or gym time group gathering in nearby towns"
          }
          button={"Offer a ride"}
        />
        <Banner1
          shorttrip={longtrip}
          imageposition={2}
          heading={"LONGER TRIPS"}
          contents={
            "You deserve 2, 3 serveral days of rest, no worries with car, relax and enjoy!"
          }
          button={"Find a ride"}
        />
        <Banner1
          shorttrip={shorttrip1}
          imageposition={1}
          heading={"MAKE YOUR WAY"}
          contents={
            "choose when, where and how many times to stop, fill the stuff, empty it take friends, take Grandma to the doctor all in your time."
          }
          button={"SignUp for free"}
        />
            </div>
        )
    }
}
