export interface StateMusic {
    artist: string
    name: string
    srcImage: string
    volume: number
    prevVolume: number
    srcAudio: string
    currentTime: number
    visibleTime: number
    isPlay: boolean
    duration: number
}

export enum MusicTypeActions {
    CHANGE_NAME = "CHANGE_NAME",
    CHANGE_SRC_IMAGE = "CHANGE_SRC_IMAGE",
    CHANGE_VOLUME = "CHANGE_VOLUME",
    TOGGLE_VOLUME = "TOGGLE_VOLUME",
    CHANGE_SRC_AUDIO = "CHANGE_SRC_AUDIO",
    CHANGE_CURRENT_TIME = "CHANGE_CURRENT_TIME",
    CHANGE_VISIBLE_TIME = "CHANGE_VISIBLE_TIME",
    CHANGE_DURATION = "CHANGE_DURATION",
    PLAY = "PLAY",
    STOP = "STOP"
}

interface IActionChangeName {
    type: MusicTypeActions.CHANGE_NAME,
    name: string
}

interface IActionChangeSrcImage {
    type: MusicTypeActions.CHANGE_SRC_IMAGE,
    srcImage: string
}

interface IActionChangeVolume {
    type: MusicTypeActions.CHANGE_VOLUME,
    volume: number
}

interface IActionToggleVolume {
    type: MusicTypeActions.TOGGLE_VOLUME
}

interface IActionChangeSrcAudio {
    type: MusicTypeActions.CHANGE_SRC_AUDIO,
    srcAudio: string
}

interface IActionChangeCurrentTime {
    type: MusicTypeActions.CHANGE_CURRENT_TIME
    currentTime: number
}

interface IActionChangeVisibleTime {
    type: MusicTypeActions.CHANGE_VISIBLE_TIME
    visibleTime: number
}

interface IActionPlay {
    type: MusicTypeActions.PLAY
}

interface IActionStop {
    type: MusicTypeActions.STOP
}

interface IActionChangeDuration {
    type: MusicTypeActions.CHANGE_DURATION,
    duration: number
}

export type ActionMusic = IActionChangeName | 
    IActionChangeSrcImage |
    IActionChangeVolume |
    IActionToggleVolume |
    IActionChangeSrcAudio |
    IActionChangeCurrentTime |
    IActionChangeVisibleTime |
    IActionChangeDuration |
    IActionPlay |
    IActionStop; 
