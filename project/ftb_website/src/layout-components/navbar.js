import React, { Component } from 'react';

//components
import ListItem from './list-item';

const navBarItems = [
    {
        name: 'home',
        label: 'Home',
        url: window.location.href
    },
    {
        name: 'team',
        label: 'Team',
        url: window.location.href
    },
    {
        name: 'nextmatch',
        label: 'Next Match',
        url: window.location.href
    },
    {
        name: 'rankings',
        label: 'Rankings',
        url: window.location.href
    }
];

class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="../../assets/generic-cube-logo_9569-169.jpeg" alt="Logo" width="30" height="24"></img>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {navBarItems.map(item =>(
                        <ListItem 
                            listItem={item}
                            key={item.name}/>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
        )
    }

}

export default Navbar;