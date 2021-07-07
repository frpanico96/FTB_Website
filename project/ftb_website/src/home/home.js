import React, { Component } from 'react';
import HttpService from '../service/http-service';

const http = new HttpService();

class Home extends Component{

    render(){
        return(
            <div className="container-fluid">
                <h1>Ciao Daniele</h1>
            </div>
        )
    }

}

export default Home;
