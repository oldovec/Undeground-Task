import {
    ACTION_CHANGE_START_POINT,
    ACTION_CHANGE_FINISH_POINT,
    ACTION_PUT_PATH,
    ACTION_CHANGE_WEATHER,
    ACTION_CHANGE_COUNT,
    ACTION_CHANGE_COUNT_SHOW_FOOT_PATH
} from '../index'

export const changeStartPoint = (newStartPoint) => {
    return {
        type: ACTION_CHANGE_START_POINT,
        payload: newStartPoint
    }
};

export const changeFinishPoint = (newFinishPoint) => {
    return {
        type: ACTION_CHANGE_FINISH_POINT,
        payload: newFinishPoint
    }
};

export const putPath = (newPath) => {
    return {
        type: ACTION_PUT_PATH,
        payload: newPath
    }
};

export const changeWeather = (newWeather) => {
    return {
        type: ACTION_CHANGE_WEATHER,
        payload: newWeather
    }
};

export const changeCountShowFootPath = (newCountShowFootPath) => {
    return {
        type: ACTION_CHANGE_COUNT_SHOW_FOOT_PATH,
        payload: newCountShowFootPath
    }
};

export const changeCount = (newCount) => {
    return {
        type: ACTION_CHANGE_COUNT,
        payload: newCount
    }
};
