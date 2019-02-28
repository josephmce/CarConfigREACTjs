import React from "react";
import data from "../data.json";

export class Header extends React.Component {
    //ES6 - Check out
    constructor(props) {
        super();
        this.state = {
            //You shouldn't assign props to your state, except for the case where this is the initial value
            data,
        };
    }

    
        render() {
        return(
            <div className="toprow">
            {
                this.state.data.map((value) =>
                <div>
                <p className="title">{value.vehicles[0].name} </p><span className="headeruserinfo">{value.vehicles[0].models[0].modelname}</span><span className="headeruserinfo">- {value.users[0].name[0].forename} {value.users[0].name[0].surname}</span> 
                </div>
                )
            }
            </div>
        );
        }
    }
