import { ActionMusic, MusicTypeActions, StateMusic } from './../types/typeMusic';

const initialState: StateMusic = {
    name: "Monster",
    artist: "RADIO TAPOK",
    srcImage: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
    srcAudio: "https://files-storeee.herokuapp.com/upload/123.mp3",
    volume: 1,
    prevVolume: 1,
    currentTime: 0,
    visibleTime: 0,
    duration: 0,
    isPlay: false
}

export const reducerMusic = (state: StateMusic = initialState, action: ActionMusic): StateMusic => {
    switch (action.type) {
        case MusicTypeActions.CHANGE_CURRENT_TIME:
            return {
                ...state,
                currentTime: action.currentTime
            };
        case MusicTypeActions.CHANGE_VISIBLE_TIME:
            return {
                ...state,
                visibleTime: action.visibleTime
            };
        case MusicTypeActions.CHANGE_DURATION:
            return {
                ...state,
                duration: action.duration
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
        case MusicTypeActions.TOGGLE_VOLUME:
            return {
                ...state,
                prevVolume: state.volume,
                volume: state.volume > 0 ?0 :state.prevVolume
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
