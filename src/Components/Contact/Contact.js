import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-me">
                <Grid className="contact-grid">
                    {/* Creating 2 Cells to split the page in half vertically */}
                    <Cell col={6}>
                        <h1>John A. Moreno</h1>
                        <img
                            src="https://i.ibb.co/SK2b2WD/image3.jpg" alt="spearfishing picture" />
                        <p>Lets get in touch virtually!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me:</h2>
                        <hr />
                        <div className="contact-list">
                            <List className="List">
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontWeight:'bold'}}>
                                        <i className="fa fa-phone-square" />(704)-996-XXXX</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontWeight:'bold'}}>
                                        <i className="fa fa-envelope-square" />jatmoreno98@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>{/* Linked In  */}
                                    <a href="https://www.linkedin.com/in/john-moreno-7141131a9/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                    <ListItemContent style={{fontSize: '25px', fontWeight:'bold'}}>Lets connect on linked In!</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    {/* Git Hub */}
                                    <a href="https://github.com/jamoreno21" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                    <ListItemContent style={{fontSize: '25px', fontWeight:'bold'}}>Check out more of my work on GitHub</ListItemContent>
                                </ListItem>
                            </List>


                        </div>
                        
                    </Cell>
                    <br></br>
                        <div>
                  <p className="p1">Copyright &copy; 2021 John A. Moreno</p>
                  </div>
                </Grid>
                
            </div>
        )
    }
};

export default Contact;