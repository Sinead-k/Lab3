import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Create } from './components/create';
import { Read } from './components/read';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
     
      <Router>

     <div className="App">

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <br></br>
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/create' component={Create} exact/>
          <Route path='/read' component={Read} exact/>

        </Switch>


          {/* <Header></Header>
          <Content></Content>
          <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;
