import React from 'react';
import { browserHistory } from "react-router";
import data from "../../data.json";
import { UserVehicle } from "../UserVehicle";


export class Mperform extends React.Component{

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
                            <div className="mperformimg1">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[0].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[0].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-2">
                            <div className="mperformimg2">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[1].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[1].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-3">
                            <div className="mperformimg3">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[2].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[2].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-4" >
                            <div className="mperformimg4">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[3].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[3].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-5">
                            <div className="mperformimg5">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[4].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[4].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-6">
                            <div className="mperformimg6">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[5].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[5].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-7" >
                            <div className="mperformimg7">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[6].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[6].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-8">
                            <div className="mperformimg8">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[7].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[7].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-9">
                            <div className="mperformimg9">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[8].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[8].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-10" >
                            <div className="mperformimg10">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[9].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[9].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-11">
                            <div className="mperformimg11">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[10].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[10].derivname}</p>
                            </div>
                        </div>
                        <div className="grid-12">
                            <div className="mperformimg12">
                            <img className="imgs" src={value.vehicles[0].models[9].deriv[11].derivimg}></img>
                                <p className="text3">{value.vehicles[0].models[9].deriv[11].derivname}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }

}



