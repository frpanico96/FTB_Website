import React, { Component } from 'react';

class ListItem extends Component{



    render(){
        console.log('ListItemProps -> ' + JSON.stringify(this.props));
        return(

            <li className="nav-item">
                <a className="nav-link active" 
                    aria-current="page" 
                    href={this.props.listItem.url}>{
                    this.props.listItem.label}
                </a>
            </li>
        )

    }

}

export default ListItem;