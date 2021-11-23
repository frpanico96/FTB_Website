import React, { Component }  from "react";


class HomeAccordionTableColumn extends Component
{

    // constructor(props)
    // {
    //     super(props)
    // }

    render()
    {
        return(
            <th scope="col" id={this.props.column.name}>{this.props.column.label}</th>
        )
    }

}

export default HomeAccordionTableColumn;