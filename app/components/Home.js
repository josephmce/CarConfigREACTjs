import React from "react";
import PropTypes from 'prop-types'
import data from "../data.json";
import { browserHistory } from "react-router";

import { UserVehicle } from "./UserVehicle";


export class Home extends React.Component {
    
    //ES6 - Check out
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
    //First method in the lifecycle hook that will get executed
    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        console.log("Component did mount!");
    }
    componentWillReceiveProps(nextProps) {
        console.log("Componnent will receive props", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        //if(nextState.status ===1){
        //    return false;
        //}
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
    onMakeOlder() {
        //Very important method. This method allows you to change the state. Whenever you call this method react JS will trigger a re-rendering of the UI.
        //It takes a JS Object
        this.setState({
            age: this.state.age + 1
        });
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }
    onNavigateOneseries(){
        browserHistory.push("/Oneseries");
    }
    onNavigateTwoseries(){
        browserHistory.push("/Twoseries");
    }
    onNavigateThreeseries(){
        browserHistory.push("/Threeseries");
    }
    onNavigateFourseries(){
        browserHistory.push("/Fourseries");
    }
    onNavigateFiveseries(){
        browserHistory.push("/Fiveseries");
    }
    onNavigateSixseries(){
        browserHistory.push("/Sixseries");
    }
    onNavigateSevenseries(){
        browserHistory.push("/Sevenseries");
    }
    onNavigateEightseries(){
        browserHistory.push("/Eightseries");
    }
    onNavigateXmodels(){
        browserHistory.push("/Xmodels");
    }
    onNavigateMperform(){
        browserHistory.push("/Mperform");
    }
    onNavigateM(){
        browserHistory.push("/M");
    }
    onNavigateIperform(){
        browserHistory.push("/Iperform");
    }
    onNavigateIseries(){
        browserHistory.push("/Iseries");
    }
    onNavigateZ4(){
        browserHistory.push("/Z4");
    }
   

    render() {
        return (
            <div className="josephmain">
                <div>
                   
                </div>
                <UserVehicle/>
                {
                        this.state.data.map((value) =>
                <div className="config">
                    <div className="gridContainer">
                        <div className="grid-1" >
                            <div className="vehicleimg1" onClick={this.onNavigateOneseries}>
                                <img className="imgs" src={value.vehicles[0].models[0].image}></img>
                            <p className="text3">{value.vehicles[0].models[0].modelname}</p>                                
                            </div>
                        </div>
                        <div className="grid-2">
                            <div className="vehicleimg2" onClick={this.onNavigateTwoseries}>
                                <img className="imgs" src={value.vehicles[0].models[1].image}></img>
                                <p className="text3">{value.vehicles[0].models[1].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-3">
                            <div className="vehicleimg3" onClick={this.onNavigateThreeseries}>
                                <img className="imgs" src={value.vehicles[0].models[2].image}></img>    
                                <p className="text3">{value.vehicles[0].models[2].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-4">
                            <div className="vehicleimg4" onClick={this.onNavigateFourseries}>
                                <img className="imgs" src={value.vehicles[0].models[3].image}></img> 
                                <p className="text3">{value.vehicles[0].models[3].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-5">
                            <div className="vehicleimg5" onClick={this.onNavigateFiveseries}>
                            <img className="imgs" src={value.vehicles[0].models[4].image}></img> 
                                <p className="text3">{value.vehicles[0].models[4].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-6">
                            <div className="vehicleimg6" onClick={this.onNavigateSixseries}>
                            <img className="imgs" src={value.vehicles[0].models[5].image}></img> 
                                <p className="text3">{value.vehicles[0].models[5].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-7">
                            <div className="vehicleimg7" onClick={this.onNavigateSevenseries}>
                            <img className="imgs" src={value.vehicles[0].models[6].image}></img> 
                                <p className="text3">{value.vehicles[0].models[6].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-8">
                            <div className="vehicleimg8" onClick={this.onNavigateEightseries}>
                            <img className="imgs" src={value.vehicles[0].models[7].image}></img>
                                <p className="text3">{value.vehicles[0].models[7].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-9">
                            <div className="vehicleimg9" onClick={this.onNavigateXmodels}>
                            <img className="imgs" src={value.vehicles[0].models[8].image}></img> 
                                <p className="text3">{value.vehicles[0].models[8].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-10">
                            <div className="vehicleimg10" onClick={this.onNavigateMperform}>
                            <img className="imgs" src={value.vehicles[0].models[9].image}></img> 
                                <p className="text3">{value.vehicles[0].models[9].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-11">
                            <div className="vehicleimg11" onClick={this.onNavigateM}>
                            <img className="imgs" src={value.vehicles[0].models[10].image}></img> 
                                <p className="text3">{value.vehicles[0].models[10].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-12">
                            <div className="vehicleimg12" onClick={this.onNavigateIperform}>
                            <img className="imgs" src={value.vehicles[0].models[11].image}></img> 
                                <p className="text3">{value.vehicles[0].models[11].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-13">
                            <div className="vehicleimg13" onClick={this.onNavigateIseries}>
                            <img className="imgs" src={value.vehicles[0].models[12].image}></img> 
                                <p className="text3">{value.vehicles[0].models[12].modelname}</p>
                            </div>
                        </div>
                        <div className="grid-14">
                            <div className="vehicleimg14" onClick={this.onNavigateZ4}>
                            <img className="imgs" src={value.vehicles[0].models[13].image}></img> 
                                <p className="text3">{value.vehicles[0].models[13].modelname}</p>
                            </div>
                        </div>
                    </div>
                </div>
                 )
                } 
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};


/*
<br/>
                    <hr/>
                        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                        <hr/>
                        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />                       
                        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
                        <hr/>
                        */



//Button on click could also be this ~~~~~ <button onClick={this.onMakeOlder.bind(this)} className ="btn btn-primary">Make me older!</button>

//{this.props.name}, Age: {this.state.age} <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>

//Status: {this.state.status}