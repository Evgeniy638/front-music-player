import selectors from "../../../bll/selectors";
import { useActions, useTypedSelector } from "../../../hooks";
import CustomSlider from "../../CustomSlider/CustomSlider";
import style from "./ExtraControls.module.scss";

import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const getVolumeIcon = (volume100: number) => {
    if (volume100 > 50) {
        return VolumeUpIcon;
    }

    if (volume100 > 0) {
        return VolumeDownIcon;
    }

    return VolumeOffIcon;
}

interface Props { }

const ExtraControls: React.FC<Props> = () => {
    const volume: number = useTypedSelector(selectors.getMusicVolume);
    const volume100: number = Math.round(volume * 100);

    const VolumeIcon = getVolumeIcon(volume100);

    const { changeVolume } = useActions();
    const { toggleVolume } = useActions();

    const onChange = (event: any, value: number | number[]) => {
        const volume100 = Array.isArray(value) ? value[0] : value;

        changeVolume(volume100 / 100);
    }

    const onClickVolumeIcon = () => {
        toggleVolume();
    }

    return (
        <div className={style.ExtraControls}>
            <div className={style.ExtraControls__slider}>
                <VolumeIcon onClick={onClickVolumeIcon} style={{cursor: 'pointer'}}/>
                <CustomSlider
                    onChange={onChange}
                    value={volume100}
                />
            </div>
        </div>
    )
}

export default ExtraControls;
