import React, {Component} from "react";
/* Child Components */
import HomeAccordion from "./home-accordion";

/* Mock Teams and Championships */
const mockTeams = 
[
    {
        name: 'MyTeam1',
        shortName: 'MT1',
        players:
            [
                {
                    number: '1',
                    role: 'G',
                    name: 'MT1player1',
                    avgPts: '23.23'
                },
                {
                    number: '2',
                    role: 'F',
                    name: 'MT1player2',
                    avgPts: '23.23'
                },
                {
                    number: '3',
                    role: 'C',
                    name: 'MT1player3',
                    avgPts: '28.22'
                }
            ]
    },
    {
        name: 'MyTeam2',
        shortName: 'MT2',
        players:
        [
            {
                number: '1',
                role: 'G',
                name: 'MT2player1',
                avgPts: '23.23'
            },
            {
                number: '2',
                role: 'F',
                name: 'MT2player2',
                avgPts: '23.23'
            },
            {
                number: '3',
                role: 'C',
                name: 'MT2player3',
                avgPts: '28.22'
            }
        ]
    },
    {
        name: 'MyTeam3',
        shortName: 'MT3',
        players:
        [
            {
                number: '1',
                role: 'G',
                name: 'MT3player1',
                avgPts: '23.23'
            },
            {
                number: '2',
                role: 'F',
                name: 'MT3player2',
                avgPts: '23.23'
            },
            {
                number: '3',
                role: 'C',
                name: 'MT3player3',
                avgPts: '28.22'
            }
        ]
    }   
];

class HomeCard extends Component
{
    constructor(props)
    {
        super(props);

        /* States */
        this.state = 
        {
            teams : mockTeams,
            championships : []
        }

        /* Bindings */
        this.renderTeams = this.renderTeams.bind(this);
    }

    render()
    {
        return(
            <div className="container-fluid home">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">My Teams</h5>
                                <div className="accordion" id="accordionExample">
                                    {this.renderTeams()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">My Championships</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

    renderTeams = () =>
    {
        console.log(JSON.stringify(this.state.teams));
        const teamList = this.state.teams.map(
            (team) => <HomeAccordion team={team} key={team.name}/> );

        return (teamList);
    }

}

export default HomeCard;