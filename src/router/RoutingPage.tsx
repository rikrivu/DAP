import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import AboutUs from '../views/AboutUs/AboutUs'
import ContactUs from '../views/ContactUs/ContactUs'
import OtherTools from '../views/OtherTools/OtherTools'
export default function RoutingPage() {
    return (
        <div>
            
                <Switch>
                    {/* <Route path="/" exact component={LandingPage}></Route>
                    <Route path="/datamining" component={Nimbus}></Route> */}
                    {/* <Route path="/about" component={AboutUs}></Route>
                    <Route path="/contactus" component={ContactUs}></Route>
                    <Route path="/othertools"  component={OtherTools}></Route> */}
                    {/* <Route path="/nlp"  component={nlp}></Route> */}
                </Switch>
            
        </div>
    )
}

