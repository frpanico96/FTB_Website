import React, { Component } from 'react';
import HttpService from '../service/http-service';

//components
import Navbar from '../layout-components/navbar';

const http = new HttpService();

class Home extends Component{

    render(){
        return(
            <div className="container-fluid">
                {/* NavBar row */}
                <div className="row">
                    <div className="col-sm-12 navbar-col">
                        <Navbar/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
