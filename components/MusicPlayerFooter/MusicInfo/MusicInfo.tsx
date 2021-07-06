import Image from 'next/image'
import selectors from "../../../bll/selectors";
import { useTypedSelector } from "../../../hooks";
import utils from '../../../utils';
import style from "./MusicInfo.module.scss";

interface Props { }

const MAX_SIZE_NAME = 15;
const MAX_SIZE_ARTIST = 20;

const MusicInfo: React.FC<Props> = () => {
    const name = useTypedSelector(selectors.getMusicName);
    const artist = useTypedSelector(selectors.getMusicArtist);
    const srcImg = useTypedSelector(selectors.getMusicSrcImage);

    return (
        <div className={style.MusicInfo}>
            <Image
                src={srcImg}
                alt="Картинка песни"
                width={56}
                height={56}
            />
            <div className={style.MusicInfo__names}>
                <h2 className={style.MusicInfo__musicName}>
                    {utils.cutString(name, MAX_SIZE_NAME)}
                </h2>
                <p className={style.MusicInfo__artist}>
                    {utils.cutString(artist, MAX_SIZE_ARTIST)}
                </p>
            </div>
        </div>
    )
}

export default MusicInfo;
