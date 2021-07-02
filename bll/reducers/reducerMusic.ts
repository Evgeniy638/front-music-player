import { ActionMusic, MusicTypeActions, StateMusic } from './../types/typeMusic';

const initialState: StateMusic = {
    name: "",
    srcImage: "",
    srcAudio: "",
    volume: 100,
    currentTime: 0,
    isPlay: false
}

export const reducerMusic = (state: StateMusic = initialState, action: ActionMusic): StateMusic => {
    switch (action.type) {
        case MusicTypeActions.CHANGE_CURRENT_TIME:
            return {
                ...state,
                currentTime: action.currentTime
            };
        case MusicTypeActions.CHANGE_NAME:
            return {
                ...state,
                name: action.name
            };
        case MusicTypeActions.CHANGE_SRC_AUDIO:
            return {
                ...state,
                srcAudio: action.srcAudio
            };
        case MusicTypeActions.CHANGE_SRC_IMAGE:
            return {
                ...state,
                srcImage: action.srcImage
            };
        case MusicTypeActions.CHANGE_VOLUME:
            return {
                ...state,
                volume: action.volume
            };
        case MusicTypeActions.PLAY:
            return {
                ...state,
                isPlay: true
            };
        case MusicTypeActions.STOP:
            return {
                ...state,
                isPlay: false
            };

        default:
            return state;
    }
}
