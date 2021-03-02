import './App.css';
import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      {/* Importing Nav bar from Media Design Lite */}
    <Layout>
        <Header className='header-color' title="JAM" scroll>
            {/* <Navigation>
                <Link to="/">About</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation> */}
        </Header>
        <Drawer title="JAM">
            <Navigation>
            <Link to="/">About</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
