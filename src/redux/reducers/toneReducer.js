import Actions from './../actions/Actions';
import { SoundClips } from './../../utils/sound';

const { ting, blop } = SoundClips;

export default toneReducer = (state = {breakTone: ting, workTone: blop}, action) => {
    switch (action.type) {
        case Actions.UPDATE_TONE:
            // action.payload has the form { breakTone, workTone }, same form as the state
            return action.payload;
        default:
            return state;
    }
}