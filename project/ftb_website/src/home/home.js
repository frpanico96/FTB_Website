import React, { Component } from 'react';
/* HttpService import */
import HttpService from '../service/http-service';
/* Child Components */
import HomeCard from './home-cards';

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
                <HomeCard/>
            </div>
            
        )
    }

}

export default Home;
