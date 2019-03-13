import React, {Component} from 'react'
import Parser from 'html-react-parser';
import {connect} from 'react-redux'
import obj from '../NameAllStations'

class ShowPath extends Component {

    buildWayForSeveralLines = () => {
        const {startPoint, finishPoint, path} = this.props;
        let caption = `<span>Built the way from ${startPoint} to ${finishPoint}</span>`;
        let str = 'Then you need change the line to the ';
        let arr = Object.keys(obj);
        let station = [];
        for (let i = 0; i < path.length - 1; i) {
            for (let j = 0; j < obj[arr[path[i]]].length; j++) {
                for (let k = 0; k < obj[arr[path[i + 1]]].length; k++) {
                    if (obj[arr[path[i]]][j] === obj[arr[path[i + 1]]][k]) {
                        station.push(obj[arr[path[i]]][j]);
                    }
                }
            }
            station.push('delimiter');
            i++;
        }
        let i = 1;
        str += arr[path[i]] + ' at the nearest station: ';
        for (let j = 0; j < station.length; j++) {
            if (j === station.length - 1) {
                break;
            }
            if (station[j] === 'delimiter') {
                i++;
                str += '\n';
                str += 'Then you need change the line to the ';
                str += arr[path[i]] + ' at the nearest station: ';

            } else if (station[j] !== 'delimiter') {
                str += station[j] + ', ';
            }
        }
        return (
            <div className="show-path">
                <p>{Parser(caption)}</p>
                <p>You need go down to the station {startPoint}</p>
                <p>{str}</p>
                <p>and get to the station {finishPoint}</p>
            </div>
        )
    };

    buildWayForOneLine = () => {
        let caption = `<span>Built the way from ${this.props.startPoint} to ${this.props.finishPoint}</span>`;
        return (
            <div className="show-path">
                <p>{Parser(caption)}</p>
                <p>This is your {Object.keys(obj)[this.props.path[0]]} line. Follow to the {this.props.finishPoint}</p>
            </div>
        )
    };

    render() {
        const {path} = this.props;
        let len = path.length;
        return (
            <div>
                {len !== 0 ? len === 1 ? this.buildWayForOneLine() : this.buildWayForSeveralLines() : null}
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        startPoint: state.startPoint,
        finishPoint: state.finishPoint,
        path: state.path
    }
};

export default connect(putStateToProps)(ShowPath)