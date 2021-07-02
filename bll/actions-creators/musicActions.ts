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

