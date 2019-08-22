import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";
import Home from './components/home/Home';
import About from './components/about/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Background />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}


export default App;
