import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class About extends Component {
render(){
    return(
      <div style= {{width: '100%', margi: 'auto'}}>
          <Grid className="Home-grid">
              <Cell col={12}>
                 <img 
                 src ="https://i.ibb.co/Hq2zrT0/image1.jpg" alt="self-Image" className="self-Image"
                 /> 
                 <div className='imgTxt'>
                     <h1>Aspiring Full Stack Developer</h1>
                     
                     <hr/>
                     <p>Hello! I'm just a United States Marine Coprs Veteran going into my next chapter of life into the technology feild. I am passionately pursuing a career as a Full Stack Software Developer. </p>
                 </div>
              </Cell>
          </Grid>
          </div>  
    )
}
};

export default About;