import React from 'react';

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

export class Root extends React.Component{
    constructor(){
        //Always need to call super 1st if your extending from a class 
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }
    
    onGreet()
    {
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeCmp="";
        if(this.state.homeMounted){
            homeCmp= (
            <Home 
                name={"John Smith"}
                initialAge={27}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName ={this.state.homeLink}/>
            );
        }
        return(

            <div>
                <Sidebar/>        
                    <div> 
                        <Header homeLink = {this.state.homeLink}/>                    
                    <div>
                    {this.props.children}  
                    </div>
                </div>
            </div>
        );
    }

}

/*
                    <div className="container">
                        <div className="row">         
                            <div className="col-xs-10 col-xs-offset-1">
                                <button onClick={this.onChangeHomeMounted.bind(this)} className ="btn btn-primary" >(Un)Mount Home Component</button>                       
                            </div>
                        </div>
                    </div>
                    */