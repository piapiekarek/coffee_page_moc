import React from 'react';
import {Grid} from '@material-ui/core'
import CoffeeCup from "./CoffeeCup";

import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/de';

export default class Main extends React.Component {
    render() {
        const {current} = this.props;

        let currentCoffee = Object.keys(current).reduce(function (total, currentValue) {
            let entry = {
                state : current[currentValue].state,
                fill_level : current[currentValue].fill_level,
                time: current[currentValue].time,
            }

            return entry;
        },0);

        return (
            <Grid container justify="center" spacing={16}>
                <Grid item>
                        <CoffeeCup current={current}/>
                        F&uuml;llstand: {currentCoffee.fill_level} %<br/>
                        Status: {currentCoffee.state} <br/>
                        Zuletzt gekocht um: <Moment locale="de" tz="Europe/Paris" format="LTS">{currentCoffee.time}</Moment> <br/>
                        Das war: <Moment locale="de" tz="Europe/Paris" fromNow>{currentCoffee.time}</Moment> <br/>
                </Grid>
            </Grid>
        );

    }
}