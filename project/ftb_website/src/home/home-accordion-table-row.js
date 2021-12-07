import React,{Component} from "react";


let counter = 0;

class HomeAccordionTableRow extends Component
{

    constructor(props)
    {
        super(props);
        
        
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
        console.log('ROWS >>> ' + JSON.stringify(this.props.row));
        let rows;
        if(this.props.row !== null && this.props.row !== undefined)
        {
            rows = this.props.row.map( (singleRow) => <td key={counter++}>{singleRow.value}</td>);
        }
        return rows;
    }
}

export default HomeAccordionTableRow;