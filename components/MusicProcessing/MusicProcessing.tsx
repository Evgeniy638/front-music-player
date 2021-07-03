import React, { RefObject, useEffect } from "react";
import selectors from "../../bll/selectors";
import { useActions, useTypedSelector } from "../../hooks";

interface Props {

}

const MusicProcessing: React.FC<Props> = () => {
    const ref: RefObject<HTMLAudioElement> = React.createRef();

    const srcAudio = useTypedSelector(selectors.getMusicSrcAudio);
    const volume = useTypedSelector(selectors.getMusicVolume);
    const currentTime = useTypedSelector(selectors.getMusicCurrentTime);
    const isPlay = useTypedSelector(selectors.isPlayMusic);

    const {changeVisibleTime} = useActions();
    const {changeDuration} = useActions();
    const {changeCurrentTime} = useActions();
    const {stopMusic} = useActions();

    useEffect(() => {
        console.log("изменения currentTime", currentTime, ref)
        if (ref.current) {
            ref.current.currentTime = currentTime;
        }
    }, [currentTime]);

    useEffect(() => {
        console.log("изменения volume", volume, ref)
        if (ref.current) {
            ref.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        console.log("изменения isPlay", isPlay, ref)
        if (ref.current) {
            if (isPlay) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    }, [isPlay]);

    useEffect(() => {
        const htmlAudio = ref.current;

        return () => {
            if (htmlAudio !== null) {
                changeCurrentTime(htmlAudio.currentTime);
            }
        }
    }, []);

    const onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        changeVisibleTime(e.currentTarget.currentTime);
    }

    const onLoadedMetadata: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        changeDuration(e.currentTarget.duration);
    }

    const onEnded: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        stopMusic();
    }

    return (
        <audio 
            ref={ref} 
            onTimeUpdate={onTimeUpdate} 
            onLoadedMetadata={onLoadedMetadata} 
            onEnded={onEnded}
        >
            <source src={srcAudio} />
        </audio>
    )
}

export default MusicProcessing;
