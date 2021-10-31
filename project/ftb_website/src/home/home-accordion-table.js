import React, {Component} from "react";
/* Child Components */
import HomeAccordionTableRow from "./home-accordion-table-row";

class HomeAccordionTable extends Component
{
    columnsObj = 
    {
        rowNumber : '#',
        rowName : 'Name',
        rowRole : 'Role',
        rowAvgPts: 'Avg. Points'
    }

    constructor(props)
    {
        super(props);
        console.log('HOMEACCORDIONTABLE_props >>> ' + JSON.stringify(props));
        /* Bindings */
        this.renderRows = this.renderRows.bind(this);
    }

    render()
    {
        return(
            <div className="container-fluid home-accordion-table">
                <table className="table">
                    <thead>
                        <tr className="home-table-col">
                        <th scope="col">{this.columnsObj.rowNumber}</th>
                        <th scope="col">{this.columnsObj.rowRole}</th>
                        <th scope="col">{this.columnsObj.rowName}</th>
                        <th scope="col">{this.columnsObj.rowAvgPts}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderRows = () =>
    {
        const playerTable = this.props.players.map( (player) => <HomeAccordionTableRow player={player} key={player._id}/>);
        return playerTable;
    }
}

export default HomeAccordionTable;