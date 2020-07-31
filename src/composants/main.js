import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Acceuil from './acceuil';
import Projets from './projets';
import Contact from './contact';
import Cv from './cv';
const Main = () => (
    <Switch>
       <Route exact path ="/" component={Acceuil} ></Route>
       <Route exact path ="/projets" component={Projets} ></Route>
       <Route exact path ="/contact" component={Contact} ></Route>
       <Route exact path ="/cv" component={Cv} ></Route>
    </Switch>


);

export default Main;