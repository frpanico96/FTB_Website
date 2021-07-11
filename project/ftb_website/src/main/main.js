import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";
//Service
import NotificationService, {NOTIF_RENDER} from '../service/notification-service';

//Components
import Form from "../form/form";
import Home from "../home/home";


let ns = new NotificationService();

class Main extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            loginPage : true,
            homePage  : false
        }
        //Binding
        this.renderElement = this.renderElement.bind(this);
        this.renderChange = this.renderChange.bind(this);
        this.parseUrl = this.parseUrl.bind(this);
        this.swithchComponent = this.swithchComponent.bind(this);
        //this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_RENDER, this, this.renderChange);
        this.swithchComponent(window.location.href);
    }

    componentWillUnmount(){
        ns.removeObserver(NOTIF_RENDER, this);
    }

    render(){
        return(
            <Router>
                <div>
                    {this.renderElement()}
                </div>
            </Router>
        )
    }

    renderElement = () => {
        if(this.state.loginPage){
            return (
            <Form />
            );
        } else if(this.state.homePage){
            return (
            <Home/>
            )
        }
    }
    renderChange = () => {
        if(this.state.loginPage){
            this.setState({
                loginPage : false,
                homePage  : true
            });
        }
    }
    parseUrl = (url) => {
        /*eslint-disable*/
        let parsedUrl = url.toString().split('/');
        return parsedUrl;
    }
    swithchComponent = (url) => {
        let parsedUrl = this.parseUrl(url);
        let indexHome = parsedUrl.indexOf('home');
        console.log(indexHome);
        if(indexHome > -1){
            this.setState({
                loginPage : false,
                homePage  : true
            })
        }else{
            console.log('/home not found');
        }
    }


}

export default Main;