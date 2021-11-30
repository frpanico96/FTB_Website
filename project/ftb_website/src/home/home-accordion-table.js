import React, {Component} from "react";
/* Child Components */
import HomeAccordionTableRow from "./home-accordion-table-row";
import HomeAccordionTableColumn from "./home-accordion-table-column";

let counter = 0;

class HomeAccordionTable extends Component
{

    constructor(props)
    {
        super(props);
        console.log('HOMEACCORDIONTABLE_props >>> ' + JSON.stringify(props));
        /* Bindings */
        this.renderTable = this.renderTable.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.renderColumns = this.renderColumns.bind(this);
    }

    render()
    {
        return(
            <div className="container-fluid">
                {this.renderTable()}
            </div>
        )
    }

    renderTable = () =>
    {
        if(this.props.isLoading)
        {
            return(<div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>)
        }
        else
        {
            return(
                <div className="container-fluid home-accordion-table">
                    <table className="table">
                        <thead>
                            <tr className="home-table-col">
                                {this.renderColumns()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    renderRows = () =>
    {
        console.log('ROWS_TABLE >>>' + JSON.stringify(this.props.rows));
        const rows = this.props.rows.map( (row) => <HomeAccordionTableRow row={row} key={counter++}/>);
        return rows;
    }

    renderColumns = () => 
    {
        const columns = this.props.columns.map( (column) => <HomeAccordionTableColumn column={column} key={column.name}/>);
        return columns
    }
}

export default HomeAccordionTable;