import React, { Component } from 'react';


class Form extends Component{

    render(){
        return(
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Welcome Message</h5>
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
                                    <div class="col-sm-2" align="center"></div>
                                    <div class="col-sm-8" align="center">
                                        <button type="submit" className="btn btn-info">Sign In</button>
                                    </div>
                                    <div class="col-sm-2" align="center"></div>
                                </div>
                                <div className="row">
                                    <div class="col-sm-2" align="center"></div>
                                    <div class="col-sm-8" align="center">
                                        <button type="submit" className="btn btn-dark">Sign Up</button>
                                    </div>
                                    <div class="col-sm-2" align="center"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;