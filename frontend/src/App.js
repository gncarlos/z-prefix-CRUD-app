import React from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreatedQuotes from './components/CreatedQuotes';



function App() {

  return (
    <div>
        <CssBaseline />
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/created-quotes' component={CreatedQuotes} />
    </div>
  );
}

export default App;
