import React from "react";
import {Link} from "react-router";

export const Sidebar = (props) =>{
var listStyle=
{
        width:'100%'
        
}

        return(
            <ul className="josephs-nav">
                    <li><Link to={"/home"} activeClassName="active"><img className="joseph-spin" style ={listStyle} src={require('../Images/icon_1.png')} alt="Model Select"/></Link></li>
                    <li><Link to={"/Oneseries"} activeClassName="active"><img className="joseph-spin" style ={listStyle} src={require('../Images/icon_2.png')} alt="Derivative Select"/></Link></li>
                    <li><Link href="#" activeClassName="active"><img className="joseph-spin" style ={listStyle} src={require('../Images/icon_3.png')} alt="Paint Select"/></Link></li>
                    <li><Link href="#" activeClassName="active"><img className="joseph-spin" style ={listStyle} src={require('../Images/icon_4.png')} alt="Accessories Select"/></Link></li>
                    <li><Link href="#" activeClassName="active"><img className="joseph-spin" style ={listStyle} src={require('../Images/icon_5.png')} alt="Summary"/></Link></li>
            </ul>
        );
};
//Stateless components can have their state changed by another component, they do not have access to their own state