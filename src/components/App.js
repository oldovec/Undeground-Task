import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../style/App.css';
import InputPoint from './InputPoint'
import Header from './Header'
import ShowPath from './ShowPath'
import FootPath from './FootPath'
import AskAboutWeather from './AskAboutWeather'

class App extends Component {
    render() {
        return (
            <div className="main">
                <Header/>
                <InputPoint/>
                <ShowPath/>
                {this.props.path.length !== 0 ? <AskAboutWeather/> : null}
                {this.props.countShowFootPath === 1 ? <FootPath/> : null}
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        path: state.path,
        countShowFootPath: state.countShowFootPath
    }
};
export default connect(putStateToProps)(App)
