import React, { Component } from 'react';
import HttpService from '../service/http-service';

const http = new HttpService();

class Form extends Component{

    constructor(props){
        super(props);

        //Binding
        this.handleClick = this.handleClick.bind(this);

    }

    render(){
        return(
            <div className="card">
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
                                            className="btn btn-info">
                                                Sign In
                                            </button>
                                    </div>
                                    <div className="col-sm-2" align="center"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2" align="center"></div>
                                    <div className="col-sm-8" align="center">
                                        <button type="submit" className="btn btn-dark">Sign Up</button>
                                    </div>
                                    <div className="col-sm-2" align="center"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleClick = (event) =>{

        event.preventDefault();
        var inputs = {}; 
        inputs['username'] = document.getElementById('form-username').value;
        inputs['password'] = document.getElementById('form-password').value;
        console.log('inputsObj -> ' + JSON.stringify(inputs));
        http.dbLogin(inputs)
            .then(data => {
                console.log('#handleClickData -> ' + JSON.stringify(data));
                if(data[0]){
                    console.log('intoStatement');
                    var accountObj = data[0];
                    console.log('accountId -> ' + accountObj['_id']);
                    window.location.href = '/home/'+accountObj['_id'];
                }
            })
            .catch(error => {
                console.log('#handleClickError -> ' + error);
            });

    }
}


export default Form;