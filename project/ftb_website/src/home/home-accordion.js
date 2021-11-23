import React,{Component} from "react";

/* Child Components */
import HomeAccordionItem from "./home-accordion-item";

class HomeAccordion extends Component
{


    constructor(props)
    {
        super(props);
        

        /* Binding */
        this.renderTeams = this.renderTeams.bind(this);
    }

    render()
    {
        
        return(
            <div className="accordion" id="accordionExample">
                {this.renderTeams()}
            </div>
        )
    }

    renderTeams = () =>
    {
        console.log(JSON.stringify(this.props.teams));
        const teamList = this.props.teams.map(
            (team) => <HomeAccordionItem team={team} key={team.name}/> );

        return (teamList);
    }

    renderChampionships = () => 
    {
        //console.log(JSON.stringify(this.props))
    }

}

export default HomeAccordion;