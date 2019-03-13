import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeWeather, changeCountShowFootPath,changeCount} from '../store/action'
import {Button, Icon} from 'semantic-ui-react'

class AskAboutWeather extends Component {

    state = {
        goodWeather: true,
        badWeather: false,
        myCount: 1
    };

    changeGoodWeather = () => {
        this.props.changeWeather(this.state.goodWeather);
        this.props.changeCountShowFootPath(this.state.myCount);
        this.props.changeCount(this.state.myCount)
    };

    changeBadWeather = () => {
        this.props.changeWeather(this.state.badWeather);
        this.props.changeCountShowFootPath(this.state.myCount);
        this.props.changeCount(this.state.myCount)
    };

    render() {
        return (
            <div className = 'ask-about-weather'>
                <span>Do you want to know what the weather today??</span>
                <div onClick={this.changeBadWeather}><Icon name='rain' color = 'blue' size='large'/></div>
                <div onClick={this.changeGoodWeather}><Icon name='sun outline' color = 'yellow' size='large'/></div>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        weather: state.weather
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeWeather: bindActionCreators(changeWeather, dispatch),
        changeCountShowFootPath: bindActionCreators(changeCountShowFootPath, dispatch),
        changeCount: bindActionCreators(changeCount, dispatch)
    }
};
export default connect(putStateToProps, putActionsToProps)(AskAboutWeather)
