import React, {Component} from 'react'
import SearchExampleStandard from './SearchExampleStandard'
import {connect} from 'react-redux'
import ButtonCreateWay from './ButtonCreateWay'
class InputPoint extends Component {

    render() {
        return (
            <div className = 'main-input-point'>
                <div className = 'input-point'>
                    <div>
                        <label>indicate start station</label>
                        <SearchExampleStandard type = {'1'}/>
                    </div>
                    <p></p>
                    <div>
                        <label>indicate finish station</label>
                        <SearchExampleStandard type = {'2'}/>
                    </div>
                </div>
                <ButtonCreateWay/>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        startPoint: state.startPoint,
        finishPoint: state.finishPoint,
        weather: state.weather,
        count: state.count
    }
};

export default connect(putStateToProps)(InputPoint)