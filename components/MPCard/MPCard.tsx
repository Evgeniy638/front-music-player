import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { MPCardProps } from "../../types";
import utils from "../../utils";
import style from "./MPCard.module.scss";

const MAX_LENGTH_NAME = 15;
const MAX_LENGTH_SUBSTRING = 20;

const MPCard: React.FC<MPCardProps> = (props) => {
    const router = useRouter();

    const onClick = () => {
        router.push({pathname: props.link});
    }

    return (
        <div className={style.MPCard} onClick={onClick}>
            <div className={style.MPCard__imageWrap}>
                <Image
                    src={props.srcImg}
                    alt={props.name}
                    layout="fill"
                />
            </div>
            <h3 className={style.MPCard__name}>
                {utils.cutString(props.name, MAX_LENGTH_NAME)}
            </h3>
            <p className={style.MPCard__substring}>
                {utils.cutString(props.substring, MAX_LENGTH_SUBSTRING)}
            </p>
        </div>
    )
}

export default MPCard;
