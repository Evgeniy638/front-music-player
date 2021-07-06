import { ActionMusic, MusicTypeActions } from './../types/typeMusic';

export const changeName = (name: string): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_NAME,
        name
    }
}

export const changeCurrentTime = (currentTime: number): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_CURRENT_TIME,
        currentTime
    }
}

export const changeVisibleTime = (visibleTime: number): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_VISIBLE_TIME,
        visibleTime
    }
}

export const changeDuration = (duration: number): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_DURATION,
        duration
    }
}

export const changeSrcAudio = (srcAudio: string): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_SRC_AUDIO,
        srcAudio
    }
}

export const changeSrcImage = (srcImage: string): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_SRC_IMAGE,
        srcImage
    }
}

export const changeVolume = (volume: number): ActionMusic => {
    return {
        type: MusicTypeActions.CHANGE_VOLUME,
        volume
    }
}

export const toggleVolume = (): ActionMusic => {
    return {
        type: MusicTypeActions.TOGGLE_VOLUME
    }
}

export const playMusic = (): ActionMusic => {
    return {
        type: MusicTypeActions.PLAY
    }
}

export const stopMusic = (): ActionMusic => {
    return {
        type: MusicTypeActions.STOP
    }
}
