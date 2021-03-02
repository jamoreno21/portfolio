import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Experience/Education';
import Expirience from '../Experience/Experience';


class Resume extends Component {
    render() {
        return (
            <div>
                {/* Splitting the page up to make a resume using a grid */}
                <Grid>
                    {/* Using Size 4 from MDL grid */}
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://i.ibb.co/hRPkKg1/image2.jpg" alt='self picture' style={{ height: '300px', borderRadius: '60px',paddingTop:"30px"}} />

                        </div>
                        <h2 style={{ paddingTop: "2em", textAlign:"center"}}>John A. Moreno </h2>
                        <h3 style={{ color: "gray", textAlign:"center"}}>Jr. Full Stack Developer</h3>
                        <hr style={{ borderTop: "5px solid black" }}></hr>
                        <h4 style={{textAlign:"center"}}><b>Career Objective:</b></h4>
                        <br></br>
                        <h4 style={{textAlign:"center"}}>A highly motivated Road2Hire graduate seeking long term employment as a Junior Full Stack Software Developer.</h4>
                        <br></br>
                        <hr style={{ borderTop: "5px solid black" }}></hr>
                        <h4 style={{textAlign:"center"}}>jatmoreno98@gmail.com</h4>
                    </Cell>
                    <Cell className="right-col" col={8}>
                        <Expirience />
                        <Education />
                    </Cell>
                </Grid>

                <p style={{paddingLeft:'38%', fontWeight:"bold", fontSize:"20px"}}>Copyright &copy; 2021 John A. Moreno</p>
            </div>
        )
    }
};

export default Resume;

