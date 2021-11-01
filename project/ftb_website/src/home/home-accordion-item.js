import React, {Component} from "react";

/* Child Components */
import HomeAccordionTable from "./home-accordion-table";

/* Counter Variable to track accordion items */
let counter = 0;

class HomeAccordionItem extends Component
{
    /* The renderObj has the accordionHeaderId,  data-bs-target, buttonClassName, bodyController id and bodyControllerClassName */
    renderObj = 
    {
        accordionHeaderId: '',
        dataBsTarget: '',
        buttonClassName: '',
        bodyControllerId: '',
        bodyControllerClassName: ''
    };

    constructor(props)
    {
        super(props);
        /* Set the counter to create correctly accordion items */
        ++counter;  
        console.log('HOMEACCORDION_counter >>> ' + counter);
        console.log('HOMEACCORDION_props >>> ' +JSON.stringify(this.props));
        if(counter % 2 === 0)
        {
            this.renderObjConstructor(counter);
            console.log('HOMEACCORDION_renderObj >>> '+JSON.stringify(this.renderObj));
        }
    }
    render()
    {
        return(
            <div className="accordion-item">
                <h2 className="accordion-header" id={this.renderObj.accordionHeaderId}>
                <button className={this.renderObj.buttonClassName} type="button" data-bs-toggle="collapse" data-bs-target={this.renderObj.dataBsTarget} aria-expanded="true" aria-controls="collapseOne">
                    {this.props.team.shortName} - {this.props.team.name}
                </button>
                </h2>
                <div id={this.renderObj.bodyControllerId} className={this.renderObj.bodyControllerClassName} aria-labelledby={this.renderObj.accordionHeaderId} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <HomeAccordionTable players={this.props.team.players} key={this.props.team.shortName}/>
                </div>
                </div>
            </div>
        )
    }

    renderObjConstructor(counter)
    {
        console.log('HOMEACCORDION_props >>> ' +JSON.stringify(this.props));
        this.renderObj.accordionHeaderId = 'heading' + this.props.team.shortName;
        this.renderObj.dataBsTarget = '#' + this.props.team.shortName;
        this.renderObj.bodyControllerId = this.props.team.shortName;
        if(counter === 2)
        {
            this.renderObj.buttonClassName = 'accordion-button';
            this.renderObj.bodyControllerClassName = 'accordion-collapse collapse show';
        }
        else
        {
            this.renderObj.buttonClassName = 'accordion-button collapsed';
            this.renderObj.bodyControllerClassName = 'accordion-collapse collapse';
        }
    }


}

export default HomeAccordionItem;