import React from 'react';
import {Table, TableRow, TableBody, TableCell, TableHead} from '@material-ui/core'
export default class Logs extends React.Component {


    render() {

        const {current, logs} = this.props;

        let currentCoffee = Object.keys(current).reduce(function (total, currentValue) {
            return {
                state : current[currentValue].coffee_machine.state,
                time_coffee_machine : current[currentValue].coffee_machine.time,
                fill_level : current[currentValue].scale.fill_level,
                time_fill_level: current[currentValue].scale.time,
            }

        },0);
        let i = 0;
        return(
            <div>
                <div id={'test'}/>
                <h1>Current</h1>
                <pre>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>state</TableCell>
                            <TableCell>timestamp coffee machine</TableCell>
                            <TableCell>fill_level</TableCell>
                            <TableCell>timestamp scale</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{currentCoffee.state}</TableCell>
                                <TableCell>{currentCoffee.time_coffee_machine}</TableCell>
                                <TableCell>{currentCoffee.fill_level}</TableCell>
                                <TableCell>{currentCoffee.time_fill_level}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </pre>
                <h1>History</h1>


                <pre>
                    <Table>
                        <TableHead key={'1'}>
                            <TableRow>
                                <TableCell>state</TableCell>
                                <TableCell>timestamp</TableCell>
                                <TableCell>fill_level</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody key={'2'}>

                            {
                                Object.keys(logs).map(currentMachine => {
                                    let eachMachine = logs[currentMachine];

                                    return(
                                        Object.keys(eachMachine).map(day =>{
                                            let eachDay = eachMachine[day];

                                            return(
                                                Object.keys(eachDay).map(time =>{
                                                    let eachTime = eachDay[time];
                                                        i=i+1;
                                                        return(
                                                            <TableRow key={'r'+i}>
                                                                <TableCell key={'r'+i+'-'+eachTime.state}>{eachTime.state}</TableCell>
                                                                <TableCell key={'r'+i+'-'+eachTime.timestamp}>{eachTime.timestamp}</TableCell>
                                                                <TableCell key={'r'+i+'-'+eachTime.fill_level}>{eachTime.fill_level}</TableCell>
                                                            </TableRow>

                                                        );


                                                }, this)
                                            )
                                        }, this)
                                    )


                                }, this)
                            }
                        </TableBody>
                    </Table>
                </pre>
            </div>

        )


    }
}