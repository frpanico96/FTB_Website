import React, { Component } from 'react';

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
    }

    componentDidMount(){
        ns.addObserver(NOTIF_RENDER, this, this.renderChange);
        window.history.pushState('setInitialPage','','/');
    }

    componentWillUnmount(){
        ns.removeObserver(NOTIF_RENDER, this);
    }

    render(){
        return(
            <div>
                {this.renderElement()}
            </div>
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
}

export default Main;