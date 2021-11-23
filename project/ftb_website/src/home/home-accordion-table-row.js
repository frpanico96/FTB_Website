import React,{Component} from "react";


class HomeAccordionTableRow extends Component
{
    constructor(props)
    {
        super(props);
        console.log('ROWS >>> ' + JSON.stringify(this.props.row));
        
        /* Binding */
        this.renderRow = this.renderRow.bind(this);
    }

    render()
    {
        return(
            <tr className="home-table-row">
                {this.renderRow()}
            </tr>
        )   
    }

    renderRow = () =>
    {
        const rows = this.props.row.map( (singleRow) => <td key={singleRow.value}>{singleRow.value}</td>);
        return rows;
    }
}

export default HomeAccordionTableRow;