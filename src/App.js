import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Account from './pages/Account';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/' component={Account} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
