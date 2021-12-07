import React, {Component} from "react";
/* Child Components */
import HomeAccordion from "./home-accordion";
import HomeAccordionTable from "./home-accordion-table";
import { championshipColumns } from "./home-accordion-table-definitions";


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
        standings: '['
        +'{"position": "1","shortName":"MT1", "name":"Team1", "W":"3", "L": "0"},'
        +'{"position": "2","shortName":"MT2", "name":"Team2", "W":"2", "L": "1"},'
        +'{"position": "3","shortName":"MT3", "name":"Team3", "W":"1", "L": "2"}'
        +']'
    }
];

/* Instance of Child Components/Class */
let isLoading = true;

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
        /* Method call to populate  */
        this.switchTeam(null);

        /* Binding */
        this.switchTeam = this.switchTeam.bind(this);

    }

    componentDidMount()
    {
        window.addEventListener("switch-team-event", this.switchTeam);
    }

    componentWillUnmount()
    {
        
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
                                <HomeAccordion teams={this.state.teams} isLoading={isLoading}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">My Championships</h5>
                                <HomeAccordionTable rows={this.rowChampionship} columns={championshipColumns} isLoading={isLoading}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

    switchTeam(event)
    {
        let championshipId = mockTeams[0].championshipsId;
        if(event !== null && event!== undefined)
        {
            championshipId = mockTeams[mockTeams.findIndex(element => element._id === event.detail.teamId)].championshipsId;
        }
        let championship = mockChampionship[mockChampionship.findIndex(element => element._id === championshipId)];
        if(championship !== null && championship !== undefined && championship.standings !== null && championship.standings !== undefined)
        {
            let standings = JSON.parse(championship.standings);
            let rowChampionship = [];
            standings.forEach(element => {
                let tempObj = [];
                console.log('HOME-CARD_ELEMENT ' + JSON.stringify(element));
                for(const key in element)
                {
                    console.log(`HOME-CARD_KEYVALUEPAIR ${key} - ${element[key]}`);
                    tempObj.push({name: key, value: element[key]});
                }
                rowChampionship = [...rowChampionship, tempObj];
            });
            this.rowChampionship = rowChampionship; 
            isLoading = false;
            console.log('HOME_CARD_ROWS >>> ' + JSON.stringify(rowChampionship));
        }
        
    }



}

export default HomeCard;