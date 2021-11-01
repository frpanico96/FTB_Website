import React, {Component} from "react";
/* Child Components */
import HomeAccordion from "./home-accordion";

/* Mock Teams and Championships */
const mockTeams = 
[
    {
        _id : '1',
        name: 'MyTeam1',
        shortName: 'MT1',
        championshipsId: '0',
        players:
            [
                {
                    _id : '01',
                    number: '1',
                    role: 'G',
                    name: 'MT1player1',
                    avgPts: '23.23'
                },
                {
                    _id : '02',
                    number: '2',
                    role: 'F',
                    name: 'MT1player2',
                    avgPts: '23.23'
                },
                {
                    _id : '03',
                    number: '3',
                    role: 'C',
                    name: 'MT1player3',
                    avgPts: '28.22'
                }
            ]
    },
    {
        _id: '2',
        name: 'MyTeam2',
        shortName: 'MT2',
        championshipsId: '1',
        players:
        [
            {
                _id : '11',
                number: '1',
                role: 'G',
                name: 'MT2player1',
                avgPts: '23.23'
            },
            {
                _id : '12',
                number: '2',
                role: 'F',
                name: 'MT2player2',
                avgPts: '23.23'
            },
            {
                _id : '13',
                number: '3',
                role: 'C',
                name: 'MT2player3',
                avgPts: '28.22'
            }
        ]
    },
    {
        _id: '3',
        name: 'MyTeam3',
        shortName: 'MT3',
        championshipsId: '2',
        players:
        [
            {
                _id : '21',
                number: '1',
                role: 'G',
                name: 'MT3player1',
                avgPts: '23.23'
            },
            {
                _id : '22',
                number: '2',
                role: 'F',
                name: 'MT3player2',
                avgPts: '23.23'
            },
            {
                _id : '23',
                number: '3',
                role: 'C',
                name: 'MT3player3',
                avgPts: '28.22'
            }
        ]
    }   
];

const mockChampionship = 
[
    {
        _id : '0',
        name: 'Championship 1',
        standings: '[{"_id": "1","shortName":"MT1", "name":"MyTeam1","position": "1", "W":"3", "L": "0"}]'
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
                                <HomeAccordion teams={this.state.teams}/>
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



}

export default HomeCard;