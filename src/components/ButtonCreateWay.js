import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import obj from '../NameAllStations'
import CrossPointInAllLine from '../NameAllStations'
import {bindActionCreators} from 'redux'
import {putPath,changeCountShowFootPath,changeCount} from '../store/action'

class ButtonCreateWay extends Component {

    state = {
        startLine: [],
        finishLine: [],
        parent: new Array(Object.keys(CrossPointInAllLine).length),
        path: []
    };

    createWay = () => {
        this.props.changeCountShowFootPath(0);
        this.props.changeCount(0);
        if (this.props.startPoint === '' || this.props.finishPoint === '') {
            alert('fill il all the fields')
        } else {
            this.state.startLine = [];
            this.state.finishLine = [];
            this.setState({
                startLine: this.state.startLine,
                finishLine: this.state.finishLine
            });
            let {startLine, finishLine} = this.state;
            for (let i = 0; i < Object.keys(obj).length; i++) {
                for (let j = 0; j < obj[Object.keys(obj)[i]].length; j++) {
                    if (obj[Object.keys(obj)[i]][j] === this.props.startPoint) {
                        startLine.push(i);
                        this.setState({
                            startLine: startLine
                        })
                    }
                    if (obj[Object.keys(obj)[i]][j] === this.props.finishPoint) {
                        finishLine.push(i);
                        this.setState({
                            finishLine: finishLine
                        })
                    }
                }
            }
            if (this.testForOneLine(startLine, finishLine) !== false) {
                this.state.path = [];
                this.state.path.push(this.testForOneLine(startLine, finishLine));
                this.setState({
                    path: this.state.path
                });
                this.props.putPath(this.state.path)
            } else {
                this.bfs();
            }
        }
    };

    testForOneLine = (firstArr, secondArr) => {
        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < secondArr.length; j++) {
                if (firstArr[i] === secondArr[j]) {
                    return firstArr[i];
                }
            }
        }
        return false;
    };

    bfs = () => {
        let CrossPointInAllLine = {
            0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            1: [0, 2, 4, 5, 6, 7, 8, 10],
            2: [0, 1, 3, 4, 5, 6, 7, 8, 10],
            3: [0, 2, 4, 5, 6, 7, 8, 10],
            4: [0, 1, 2, 3, 5, 6, 7, 8, 10],
            5: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
            6: [0, 1, 2, 3, 4, 5, 7, 8, 10],
            7: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10],
            8: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
            9: [0, 5, 7, 8],
            10: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        };
        let queue = [];
        let used = new Array(Object.keys(CrossPointInAllLine).length);
        used.fill(false);
        this.state.parent.fill(0);
        let start = this.state.startLine[0];
        used[start] = true;
        this.state.parent[start] = start;
        queue.push(start);
        while (queue.length > 0) {
            start = queue.shift();
            for (let i = 0; i < CrossPointInAllLine[Object.keys(CrossPointInAllLine)[start]].length; i++) {
                let v = CrossPointInAllLine[Object.keys(CrossPointInAllLine)[start]][i];
                if (used[v] !== true) {
                    this.state.parent[v] = start;
                    used[v] = true;
                    queue.push(v)
                }
            }
        }
        this.setState({
            parent: this.state.parent
        });
        this.state.path = [];
        this.printWay(this.state.finishLine[0])
    };

    printWay = (count) => {
        if (this.state.parent[count] !== count) {
            this.printWay(this.state.parent[count])
        }

        this.state.path.push(count);
        this.setState({
            path: this.state.path
        });
        this.props.putPath(this.state.path)
    };

    render() {
        return (
            <Button className='ui button' onClick={this.createWay} style={{width: '20%'}}>
                Create Way
            </Button>
        )
    }
}

const putStateToProps = (state) => {
    return {
        startPoint: state.startPoint,
        finishPoint: state.finishPoint
    }
};

const putActionsToProps = (dispatch) => {
    return {
        putPath: bindActionCreators(putPath, dispatch),
        changeCountShowFootPath: bindActionCreators(changeCountShowFootPath, dispatch),
        changeCount: bindActionCreators(changeCount, dispatch)
    }
};

export default connect(putStateToProps,putActionsToProps)(ButtonCreateWay)