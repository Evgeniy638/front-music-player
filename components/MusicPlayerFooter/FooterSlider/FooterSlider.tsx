import style from "./FooterSlider.module.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Fab } from "@material-ui/core";
import { useActions, useTypedSelector } from "../../../hooks";
import selectors from "../../../bll/selectors";
import React from "react";
import CustomSlider from "../../CustomSlider/CustomSlider";
import utils from "../../../utils";

interface Props {

}

const FooterSlider: React.FC<Props> = () => {
    const musicVisibleTime = useTypedSelector(selectors.getMusicVisibleTime);
    const duration = useTypedSelector(selectors.getMusicDuration);
    const isPlay = useTypedSelector(selectors.isPlayMusic);

    const { changeCurrentTime } = useActions();
    const { playMusic } = useActions();
    const { stopMusic } = useActions();

    const onChangeTimeSlider = (event: any, currentTime: number | number[]) => {
        if (duration === 0) {
            return false;
        }

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
        <div className={style.FooterSlider}>
            <Fab onClick={onClick} size="small">
                {isPlay ? <PauseIcon /> : <PlayArrowIcon />}
            </Fab>
            <div className={style.FooterSlider__slider}>
                {utils.transformSecondsToMMSS(musicVisibleTime)}
                <CustomSlider
                    onChange={onChangeTimeSlider}
                    value={musicVisibleTime}
                    max={duration}
                />
                {utils.transformSecondsToMMSS(duration)}
            </div>
        </div>
    )
}

export default FooterSlider;
