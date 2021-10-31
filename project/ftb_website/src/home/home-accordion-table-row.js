import React,{Component} from "react";


class HomeAccordionTableRow extends Component
{
    render()
    {
        return(
            <tr className="home-table-row">
            <th scope="row">{this.props.player.number}</th>
            <td>{this.props.player.role}</td>
            <td>{this.props.player.name}</td>
            <td>{this.props.player.avgPts}</td>
            </tr>
        )
    }
}

export default HomeAccordionTableRow;