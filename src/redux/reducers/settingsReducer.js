import Actions from './../actions/Actions';

export default settingsReducer = (state = false, action) => {
    switch (action.type) {
        case Actions.TOGGLE_SETTINGS:
            return !state;
        default:
            return state;
    }
}