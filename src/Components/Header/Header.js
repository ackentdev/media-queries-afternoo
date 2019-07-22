import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return <header>
            <div>
                <div className="logo">
                    <a href="#/page-top">Start Bootstrap</a>
                </div>
                <button> MENU </button>
                <nav>
                    <ul>
                        <li><a href="#/services">Services</a></li>
                        <li><a href="#/portfolio">Portfolio</a></li>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/team">Team</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    }
}