import React, { RefObject, useEffect } from "react";
import selectors from "../../bll/selectors";
import { useActions, useTypedSelector } from "../../hooks";

interface Props {

}

let audio: HTMLAudioElement;

const MusicProcessing: React.FC<Props> = () => {
    const srcAudio = useTypedSelector(selectors.getMusicSrcAudio);
    const volume = useTypedSelector(selectors.getMusicVolume);
    const currentTime = useTypedSelector(selectors.getMusicCurrentTime);
    const isPlay = useTypedSelector(selectors.isPlayMusic);

    const {changeVisibleTime} = useActions();
    const {changeDuration} = useActions();
    const {changeCurrentTime} = useActions();
    const {stopMusic} = useActions();

    const onTimeUpdate = () => {
        changeVisibleTime(audio.currentTime);
    }

    const onLoadedMetadata = () => {
        changeDuration(audio.duration);
    }

    const onEnded = () => {
        stopMusic();
    }

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        }

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("ended", onEnded);

        return () => {
            changeCurrentTime(audio.currentTime);
        }
    }, []);

    useEffect(() => {
        audio.src = srcAudio;
    }, [srcAudio]);

    useEffect(() => {
        audio.currentTime = currentTime;
    }, [currentTime]);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        if (isPlay) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlay]);

    return null;
}

export default React.memo(MusicProcessing);
