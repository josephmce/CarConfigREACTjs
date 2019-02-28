import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import data from "./data.json";
// Fake Data
import { jsonResponse } from "data2";


import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Oneseries } from "./components/Derivs/Oneseries";
import { Twoseries } from "./components/Derivs/Twoseries";
import { Threeseries } from "./components/Derivs/Threeseries";
import { Fourseries } from "./components/Derivs/Fourseries";
import { Fiveseries } from "./components/Derivs/Fiveseries";
import { Sixseries } from "./components/Derivs/Sixseries";
import { Sevenseries } from "./components/Derivs/Sevenseries";
import { Eightseries } from "./components/Derivs/Eightseries";
import { Xmodels } from "./components/Derivs/Xmodels";
import { Mperform } from "./components/Derivs/Mperform";
import { M } from "./components/Derivs/M";
import { Iperform } from "./components/Derivs/Iperform";
import { Iseries } from "./components/Derivs/Iseries";
import { Z4 } from "./components/Derivs/Z4";
import { Deriv } from "./components/Derivs/Deriv";

class App1 extends React.Component {
    
    constructor(props) {
        super();
        //React Property that sets our state
        this.state = {
            //You shouldn't assign props to your state, except for the case where this is the initial value
            data
        };
    }

    render(){

        var user = {
            name: "Anna",
            hobbies: ["Football", "Basketball"]
        };
        return(
            <Router history ={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"Oneseries"} component={Oneseries} something="foo"/>
                    <Route path={"Twoseries"} component={Twoseries}/>
                    <Route path={"Threeseries"} component={Threeseries}/>
                    <Route path={"Fourseries"} component={Fourseries}/>
                    <Route path={"Fiveseries"} component={Fiveseries}/>
                    <Route path={"Sixseries"} component={Sixseries}/>
                    <Route path={"Sevenseries"} component={Sevenseries}/>
                    <Route path={"Eightseries"} component={Eightseries}/>
                    <Route path={"Xmodels"} component={Xmodels}/>
                    <Route path={"Mperform"} component={Mperform}/>
                    <Route path={"M"} component={M}/>
                    <Route path={"Iperform"} component={Iperform}/>
                    <Route path={"Iseries"} component={Iseries}/>
                    <Route path={"Z4"} component={Z4}/>
                    <Route path={"home"} component={Home}/>
                    <Route path={"deriv"} component={Deriv} user={user} data2={jsonResponse}/>
                </Route>
                <Route path={"home"} component={Home}/>
            </Router>
        );
    }

}
render(<App1 />, window.document.getElementById('app1'));