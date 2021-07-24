import React, { Component } from 'react';
import HttpService from '../service/http-service';
import NotificationService, {NOTIF_RENDER} from '../service/notification-service';

const http = new HttpService();
const ns = new NotificationService();

class Form extends Component{

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            errorMessage: ''
        };

        //Binding
        this.handleClick = this.handleClick.bind(this);

    }

    render(){
        return(
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </symbol>
                    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </symbol>
                    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </symbol>
                </svg>
                <div className="row">
                    <div className="col-sm-4 version-col align-items-star" align="left">
                    ftbstudio_version: 0.0.1
                    </div>
                    <div className="col-sm-4">
                    <div className="card">
                        <div className="visually-hidden alert alert-warning d-flex align-items-center" id="login-alert" role="alert">
                            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlinkHref="#info-fill"/></svg>
                            <div>
                                {this.state.errorMessage}
                            </div>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Welcome Message</h5>
                            <div className="form">
                                <form>
                                    <div className="form-group">
                                        <input type="email" 
                                        className="form-control" 
                                        id="form-username" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" 
                                        className="form-control" 
                                        id="form-password" 
                                        placeholder="Password"/>
                                    </div>
                                    <div className="form-btn">
                                        <div className="row">
                                            <div className="col-sm-2" align="center"></div>
                                            <div className="col-sm-8" align="center">
                                                <button type="submit" 
                                                    onClick={(event) => this.handleClick(event)} 
                                                    className="btn btn-info form-btn"
                                                    id="sign-in-btn"
                                                    disabled={this.state.loading}>
                                                        <span className="visually-hidden 
                                                        spinner-border 
                                                        spinner-border-sm" 
                                                        role="status"
                                                        aria-hidden="true"></span>
                                                        <span>Sign In</span>
                                                    </button>
                                            </div>
                                            <div className="col-sm-2" align="center"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2" align="center"></div>
                                            <div className="col-sm-8" align="center">
                                                <button type="submit"
                                                    onClick={(event) => this.handleClick(event)} 
                                                    id="sign-up-btn" 
                                                    className="btn btn-dark"
                                                    disabled={this.state.loading}>
                                                    <span className="visually-hidden 
                                                        spinner-border 
                                                        spinner-border-sm" 
                                                        role="status"
                                                        aria-hidden="true">
                                                    </span>
                                                    <span>Sign Up</span>
                                                    </button>
                                            </div>
                                            <div className="col-sm-2" align="center"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }

    handleClick = (event) =>{
        //utility Strings
        let visuallyHidden = 'visually-hidden';
        let signUp = 'sign-up-btn';
        //messageStrings
        let accountNotFound = 'Account Not Found: Username or Password wrong. If you haven\'t registerd yet do it now!';
        let alreadyRegistered = 'Account is already registered, Sign In! If you have forgotten your password contact your administrator';
        //variables to add controls and not make the code fails
        let loadingSpinner = null;
        let classListAlert = null;
        let clickedBtn = null;

        let idEvent = event.target.id;
        console.log('IdEvent -> '+ idEvent);
        event.preventDefault();
        this.setState({loading: true});
        clickedBtn = document.getElementById(idEvent);
        if(clickedBtn != null && clickedBtn.firstChild !== null && clickedBtn.firstChild !== undefined){
            loadingSpinner = clickedBtn.firstChild.classList;
            classListAlert = document.getElementById('login-alert').classList;
            if(!(classListAlert.contains(visuallyHidden))){
                classListAlert.add(visuallyHidden);
            }
            loadingSpinner.remove(visuallyHidden);
        }
        var inputs = {}; 
        inputs['username'] = document.getElementById('form-username').value;
        inputs['password'] = document.getElementById('form-password').value;
        //loading = true;
        console.log('inputsObj -> ' + JSON.stringify(inputs));
        http.dbLogin(inputs)
            .then(data => {
                console.log('#handleClickData -> ' + JSON.stringify(data));
                if(loadingSpinner !== null){
                    loadingSpinner.add('visually-hidden');
                }
                if(data[0]){
                    if(idEvent === signUp){
                        this.setState({
                            loading: false,
                            errorMessage: alreadyRegistered
                        });
                        if(classListAlert !== null){
                            classListAlert.remove(visuallyHidden);
                        }
                    } else {
                        console.log('intoStatement');
                        let accountObj = data[0];
                        console.log('accountId -> ' + accountObj['_id']);
                        window.history.pushState('redirectToHome','',+'/' + accountObj['_id'] +'/home');
                        ns.postNotification(NOTIF_RENDER,'');
                        console.log('here');
                    }
                }else{
                    //Data null elegible for SignUp
                    if(idEvent === signUp){
                        
                    } else {
                    //SignIn
                        this.setState({
                            loading: false,
                            errorMessage: accountNotFound
                        });
                        if(classListAlert !== null){
                            classListAlert.remove(visuallyHidden);
                    }
                    }
                }
            })
            .catch(error => {
                console.log('#handleClickError -> ' + error);
            });
    }
}


export default Form;