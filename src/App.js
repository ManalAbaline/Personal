import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './composants/main';
import {Link} from 'react-router-dom';



function App() {
  return (
    <div>
    <Layout>
        <Header className="header-style" transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="cv">CV</Link>
                <Link to="projets">Projects</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="cv">CV</Link>
                <Link to="projets">Projects</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>

        <Content >
            <div className="page-content"/>
            <Main />
        </Content>
        </Layout>
</div>
  );
}

export default App;
