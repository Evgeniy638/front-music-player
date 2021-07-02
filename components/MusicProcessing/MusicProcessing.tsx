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

    useEffect(() => {
        if (ref.current) {
            console.log(currentTime);
            ref.current.currentTime = currentTime;
        }
    }, [currentTime, ref]);

    useEffect(() => {
        if (ref.current) {
            console.log(volume)
            ref.current.volume = volume;
        }
    }, [volume, ref]);

    useEffect(() => {
        if (ref.current) {
            console.log(isPlay)
            if (isPlay) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    }, [isPlay, ref]);

    const onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        changeVisibleTime(e.currentTarget.currentTime);
    }

    return (
        <audio ref={ref} onTimeUpdate={onTimeUpdate}>
            <source src={srcAudio}  />
        </audio>
    )
}

export default MusicProcessing;
