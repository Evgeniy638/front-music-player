import React from "react";
import selectors from "../../bll/selectors";
import { useActions, useTypedSelector } from "../../hooks";
import CustomSlider from "../CustomSlider/CustomSlider";

interface Props { }

const MusicPlayerFooter: React.FC<Props> = () => {
    const musicVisibleTime = useTypedSelector(selectors.getMusicVisibleTime);
    const duration = useTypedSelector(selectors.getMusicDuration);
    const isPlay = useTypedSelector(selectors.isPlayMusic);

    const { changeCurrentTime } = useActions();
    const { playMusic } = useActions();
    const { stopMusic } = useActions();

    const onChangeTimeSlider = (event: any, currentTime: number | number[]) => {
        console.log("onChangeTimeSlider", currentTime)
        if (Array.isArray(currentTime)) {
            changeCurrentTime(currentTime[0]);
        } else {
            changeCurrentTime(currentTime);
        }
    }

    const onClick = () => {
        if (isPlay) {
            stopMusic();
        } else {
            playMusic();
        }
    }

    return (
        <div>
            {
                duration > 0 &&
                <>
                    <CustomSlider
                        onChange={onChangeTimeSlider}
                        value={musicVisibleTime}
                        max={duration}
                    />
                    <button onClick={onClick}>{isPlay ? "Стоп" : "Играть"}</button>
                </>
            }
        </div>
    )
}

export default MusicPlayerFooter;
