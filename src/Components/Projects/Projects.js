import React, { Component } from 'react';
import { Card, CardActions, CardText, CardTitle, Button, Grid } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div>
                <p 
                style={{ fontSize: "50px", paddingTop: "15px", paddingLeft: "43%", fontWeight: "bold" }}>Projects:</p>
                <Grid style={{ gridRowGap: "30px", padding: "30px" }}>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center", paddingTop: "10px" }}>

                        <img src="https://i.ibb.co/mBh7YWR/Screen-Shot-2021-03-01-at-11-24-23-PM.png" alt="blank" style={{ height: "200px" }} />

                        <CardTitle>Ecommerce 1</CardTitle>

                        <button colored style={{ height: "30px", width: "150px", borderRadius: "10px"}}><a href="https://github.com/jamoreno21/eCommerce_Project" style={{textDecoration:"none", color:"black"}}>Source Code</a></button>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/wgWy1Vq/Screen-Shot-2021-02-26-at-1-09-08-PM.png" alt="Ecommerc e V2" style={{ paddingTop: "10px", height: "200px" }} />

                        <CardTitle>Ecommerce V2</CardTitle>

                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", marginLeft:"30%"}}>
                                <a href="https://github.com/jamoreno21/Ecommerce2" style={{textDecoration:"none", color:"black"}}>Source Code</a>
                            </button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/gSrs5tk/Screen-Shot-2021-03-01-at-3-05-31-PM.png" alt="Page demo" style={{ paddingTop: "10px", height: "200px" }} />
                        <CardTitle>Reservation Page</CardTitle>
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", marginLeft:"30%"}}><a href="https://github.com/jamoreno21/reservationPage" style={{textDecoration:"none", color:"black"}}>Source Code</a></button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/0sz4v6G/Screen-Shot-2021-02-26-at-12-50-58-PM.png" alt="blank" style={{ width: "auto", height: "200px", paddingTop: "10px" }} />
                        <CardTitle>Hamburger Menu</CardTitle>
                        {/* <CardText></CardText> */}
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", marginLeft:"30%"}}><a href="" target="_blank" style={{textDecoration:"none", color:"black"}}>Sorce Code</a></button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img
                            src="https://i.ibb.co/6JRct41/Screen-Shot-2021-02-25-at-10-51-22-PM.png" alt="blank" style={{ height: "200px", paddingTop: "10px" }} />
                        <CardTitle>Pokemon Inquirer App</CardTitle>
                        {/* <CardText></CardText> */}
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", marginLeft:"30%"}}
                            ><a href="https://github.com/jamoreno21/pokemon" target="_blank" style={{textDecoration:"none", color:"black"}}>Sorce Code</a>
                            </button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/gSDFDJs/Screen-Shot-2021-03-02-at-1-30-39-PM.png" alt="blank" style={{height:"200px", paddingTop:"10px"}}/>
                        <CardTitle>Burger Builder App</CardTitle>
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", marginLeft:"30%"}}>Source Code</button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/RNRgWfP/Screen-Shot-2021-02-26-at-12-55-04-PM.png" alt="blank" style={{ paddingTop: "10px", height: "200px" }} />
                        <CardTitle>Number Guessing Game</CardTitle>
                        {/* <CardText></CardText> */}
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", }}><a href="https://github.com/jamoreno21/guessinggame" target="_blank" style={{textDecoration:"none", color:"black"}}>Source Code</a></button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="https://i.ibb.co/f2j0Ftr/Screen-Shot-2021-03-02-at-9-10-48-AM.png" alt="blank" style={{ height: "200px", paddingTop: "10px" }} />
                        <CardTitle>Grid Practice</CardTitle>
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", }}>Source Code</button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '400px', height: '380px', margin: "auto", backgroundColor: "lightgray", alignItems: "center" }}>
                        <img src="" alt="blank" />
                        <CardTitle>Tutor Us API</CardTitle>
                        <CardText>A Simple app built in React that uses a location API to help find tutors in the students area.</CardText>
                        <CardActions border>
                            <button colored style={{ height: "30px", width: "150px", borderRadius: "10px", }}>Source Code</button>
                        </CardActions>
                    </Card>

                </Grid>
            </div>
        )
    }
};

export default Projects;