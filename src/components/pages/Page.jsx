import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Service } from "./Service";
import { Skill } from "./Skill"; 
import { Contact } from "./Contact";
import {Portfolio} from "./Portifolio";
import {Blog} from './Blog';

export const Pages =()=>{
    return(
        <>
        <Router>
            <Header />
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/service' component={Service} />
                 <Route exact path='/about' component={About} />
                 <Route exact path='/skill' component={Skill} />
                 <Route exact path='/contact' component={Contact} />
                 <Route exact path='/Portfolio' component={Portfolio} />
                 <Route exact path='/testimonials' component={Blog} />
            </Switch>
        </Router>

        </>
    )
}
