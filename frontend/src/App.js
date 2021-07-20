import React from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SavedQuotes from './components/SavedQuotes';
import CreatedQuotes from './components/CreatedQuotes';



function App() {

  return (
    <div>
        <CssBaseline />
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/created-quotes' component={CreatedQuotes} />
        <Route path='/saved-quotes' component={SavedQuotes} />
        {/* <SavedQuotes /> */}
    </div>
  );
}

export default App;
