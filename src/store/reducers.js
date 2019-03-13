import {
    ACTION_CHANGE_START_POINT,
    ACTION_CHANGE_FINISH_POINT,
    ACTION_PUT_PATH,
    ACTION_CHANGE_WEATHER,
    ACTION_CHANGE_COUNT_SHOW_FOOT_PATH,
    ACTION_CHANGE_COUNT
} from '../index'

const initialState = {
    startPoint: '',
    finishPoint: '',
    path: [],
    weather: false,
    countShowFootPath: 0,
    count: 0
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_START_POINT:
            return {...state, startPoint: action.payload};

        case ACTION_CHANGE_FINISH_POINT:
            return {...state, finishPoint: action.payload};

        case ACTION_PUT_PATH:
            return {...state, path: action.payload};

        case ACTION_CHANGE_WEATHER:
            return {...state, weather: action.payload};

        case ACTION_CHANGE_COUNT_SHOW_FOOT_PATH:
            return {...state, countShowFootPath: action.payload};

        case ACTION_CHANGE_COUNT:
            return {...state, count: action.payload};
    }
    return state;
};
