import React, { Component } from 'react';
import HttpService from '../service/http-service';

let http = new HttpService();

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
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
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
        http.sdfcLogin()
            .then(data => {
                console.log('#handleClickData -> ' + JSON.stringify(data));
            })
            .catch(error => {
                console.log('#handleClickError -> ' + JSON.stringify(error));
            })
            ;

    }
}

export default Form;