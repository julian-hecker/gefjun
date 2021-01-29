import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Menu} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
