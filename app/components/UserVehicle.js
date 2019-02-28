import React from 'react';
import { browserHistory } from "react-router";
import data from "../data.json";

export class UserVehicle extends React.Component{

    constructor(props) {
        super();
        //React Property that sets our state
        this.state = {
            //You shouldn't assign props to your state, except for the case where this is the initial value
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName,
            data
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },);
        console.log("Constructor");

    }
    onNavigateHome(){
        browserHistory.push("/home");
    }

    render(){
        return(

            <div>
                <div className="header-module">
                {
                        this.state.data.map((value) =>
                    <p className="text1">Your {value.vehicles[0].models[0].modelname}
                    </p>
                     )
                    }   
                </div>
                <div className="header-module">                   
                    {
                        this.state.data.map((value) =>
                        <p className="text2">{value.users[0].name[0].forename} {value.users[0].name[0].surname}</p> 
                        )
                    }                   
                </div>
            </div>
        );
    }

}



