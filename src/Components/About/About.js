import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class About extends Component {
render(){
    return(
      <div style= {{width: '100%', margi: 'auto'}}>
          {/* Creating a grid for page layout */}
          <Grid className="Home-grid">
              <Cell col={12}>
                 <img 
                 src ="https://i.ibb.co/Hq2zrT0/image1.jpg" alt="self-Image" className="self-Image"
                 /> 
                 <div className='imgTxt'>
                     <h1>Aspiring Full Stack Developer</h1>
                     
                     <hr/>
                     <p>Hello! I'm just a United States Marine Coprs Veteran going into my next chapter of life into the technology feild. I am passionately pursuing a career as a Full Stack Software Developer. </p>
                     <div className="social-links">

                         {/* Linked In  */}
                         <a href="https://www.linkedin.com/in/john-moreno-7141131a9/" rel="noopener noreferrer" target="_blank">
                             <i className="fa fa-linkedin-square"  aria-hidden="true" />
                         </a>
                         {/* Git Hub */}
                         <a href="https://github.com/jamoreno21" rel="noopener noreferrer" target="_blank">
                             <i className="fa fa-github-square"  aria-hidden="true" />
                         </a>
                         
                     </div>
                     <p>Copyright &copy; 2021 John A. Moreno</p>
                 </div>
              </Cell>
          </Grid>
          </div>  
    )
}
};

export default About;