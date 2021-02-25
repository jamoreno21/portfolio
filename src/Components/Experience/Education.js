import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <h1 style={{paddingLeft:"25%", fontWeight:"bold"}}>
                    Education History:
                </h1>
                <h4>Coastal Carolina Community College - <i>Some College</i></h4>
                <p>Jacksonville, NC </p>
                <h6 style={{ color: 'gray' }}><i>January  2020 - March 2020</i></h6>
                <p>I attended CCCC from Jan-Mar of 2020. Due to my heavy workload as the MTU Chief I was only able to complete 1 class.</p>

                <hr></hr>

                <h4>Phillip O. Berry Academy of Technology - <i>High School Diploma</i></h4>
                <p>Charlotte, NC </p>
                <h6 style={{ color: 'gray' }}><i>August 2012 - June 2016</i></h6>
                <p>I attended Philip O. Berry from 2012-2016. I was heavily involved with the school's JROTC program and eventually became the Cadet Battalion Commander of the program. Volunteered with many events and even organized some through the P.O.B JROTC program. </p>
                <hr></hr>
                <h4>Awards & Certifications:</h4>
                
                <ul>
                    <li>Good Conduct Medal</li>
                    <li>National Defense Medal </li>
                    <li>Global War on Terrorism Medal </li>
                    <li>Korea Defense Service Medal </li>
                    <li>(2) Sea Service Deployment Medal </li>
                    <li>(6) Letters of Appreciation for volunteer service </li>
                    <li>(1) Letter of Appreciation for the Okinawan Chief of Police </li>
                    <li>Certified Combat Life Saver  </li>
                    <li>Agile Project Management: Agile Delivery </li>
                    <li>Growth Driven Design certification </li>

                </ul>
            </div>
        )
    }
};

export default Education;