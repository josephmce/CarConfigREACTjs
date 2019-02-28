import React from 'react';
import { browserHistory } from "react-router";
import data from "../../data.json";
import { UserVehicle } from "../UserVehicle";


export class Eightseries extends React.Component{

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

            <div className="josephmain">
                <UserVehicle/>
                {this.state.data.map((value) =>
                <div className="config">
                    <div className="gridContainer">
                    <div className="grid-1" >
                            <div className="eightseriesimg1">
                            <img className="imgs" src={value.vehicles[0].models[7].deriv[0].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[7].deriv[0].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-2">
                            <div className="eightseriesimg2">
                                <img className="imgs" src={value.vehicles[0].models[7].deriv[1].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[7].deriv[1].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-3">
                            <div className="eightseriesimg3">
                                <img className="imgs" src={value.vehicles[0].models[7].deriv[2].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[7].deriv[2].derivname}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }

}



