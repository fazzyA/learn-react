import React from 'react'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutUs from './AboutUs'
import Contact from './Contact'
import Home from './Home';
import List from './List';
function Main() {
    return (


        <Router>
            <nav>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>contact</Link>
            <Link className='link' to='/post'>Posts</Link>
            </nav>
              
            <Switch>
            <Route path='/about'><AboutUs /></Route>
            <Route path='/contact'><Contact /></Route>
            <Route path='/post'><List /></Route>
            <Route path='/'><Home /></Route>
            </Switch>

        </Router>
    )
}

export default Main
