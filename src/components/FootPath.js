import React, {Component} from 'react'
import {connect} from 'react-redux'
import {YMaps, Map, GeoObject} from 'react-yandex-maps';
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {changeCount} from '../store/action'

class FootPath extends Component {
    state = {
        startLat: 0,
        startLon: 0,
        finishLat: 0,
        finishLon: 0,
        distance: 0,
        count: 0
    };

    toRad = (value) => {
        return value * Math.PI / 180;
    };
    calculateDistance = () => {
        let {startLat, startLon, finishLat, finishLon} = this.state;
        let R = 6371;
        let dLat = this.toRad(finishLat - startLat);
        let dLon = this.toRad(finishLon - startLon);
        startLat = this.toRad(startLat);
        finishLat = this.toRad(finishLat);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(startLat) * Math.cos(finishLat) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c);
    };
    createWay = () => {
        if (this.props.startPoint !== '' && this.props.finishPoint !== '') {
            axios.get(`https://api.tfl.gov.uk/StopPoint/Search/${this.props.startPoint}`)
                .then(json => {
                        this.setState({
                            startLat: json.data.matches[0].lat,
                            startLon: json.data.matches[0].lon
                        });
                    }
                );
            axios.get(`https://api.tfl.gov.uk/StopPoint/Search/${this.props.finishPoint}`)
                .then(json => {
                        this.setState({
                            finishLat: json.data.matches[0].lat,
                            finishLon: json.data.matches[0].lon
                        });
                    }
                );
            setTimeout(() => {
                this.setState({
                    distance: this.calculateDistance()
                });
            }, 500);
            let myCount = 0;
            this.props.changeCount(myCount);
        } else {
            alert('please fill in all fields')
        }
    };

    render() {
        let rain = <p className="rain">I don't know what you want from me! Look at the weather site, lazy ass!</p>;
        let {startLat, startLon, finishLat, finishLon, distance} = this.state;
        let {weather, count} = this.props;
        const mapState = {center: [(startLat + finishLat) / 2, (startLon + finishLon) / 2], zoom: 11};
        {weather === true && count === 1 ? this.createWay() : null}
          return (
            <div className="sun">
                {weather ?
                    <div><p>Distance between two station: {distance} km</p>
                        <p>You can open yandex  maps and walk to the destination on foot</p>
                        < YMaps >
                            < Map state={mapState}>
                                < GeoObject
                                    geometry={{
                                        type: 'LineString',
                                        coordinates: [[startLat, startLon], [finishLat, finishLon]],
                                    }}
                                    options={{
                                        strokeColor: '0000FF',
                                        strokeWidth: 5,
                                        draggable: true
                                    }}
                                />
                            </Map>
                        </YMaps></div>
                    : rain }
            </div>
        )
    }
}

const putStateToProps = (state) => { //из стэйт выдёргивает поля и добавляет их в пропс
    return {
        startPoint: state.startPoint,
        finishPoint: state.finishPoint,
        path: state.path,
        weather: state.weather,
        count: state.count
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeCount: bindActionCreators(changeCount, dispatch)
    }
};

export default connect(putStateToProps, putActionsToProps)(FootPath)
