import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { constants } from "../../constants";
import { ListMPCardsProps } from "../../types";
import MPCard from "../MPCard/MPCard";
import style from "./ListMPCards.module.scss";

const MIN_SIZE_CARD = 200;
const GRID_GAP = 20;

const ListMPCards: React.FC<ListMPCardsProps> = (props) => {
    const [countVisibleElements, setCountVisibleElements] = useState(0);
    const ref = useRef<HTMLDivElement | null>();

    const styleList: React.CSSProperties = {
        gridTemplateColumns: `repeat(auto-fit, minmax(${MIN_SIZE_CARD}px, 1fr))`,
        gridGap: GRID_GAP
    }

    useEffect(() => {
        const handle = () => {
            if (ref.current) {
                const width = ref.current.clientWidth - GRID_GAP - constants.SIZE_SCROLL_THUMB;
                setCountVisibleElements(Math.floor(width / (MIN_SIZE_CARD + GRID_GAP)));
            }
        }

        handle();

        window.addEventListener("resize", handle);

        return () => {
            window.removeEventListener("resize", handle);
        }
    }, []);  

    return (
        <div>
            <h2 className={style.ListMPCards__title}>
                {props.title}
            </h2>
            {
                props.substring &&
                <p className={style.ListMPCards__substring}>
                    {props.substring}
                </p>
            }
            <div 
                className={style.ListMPCards__list} 
                style={styleList}
                ref={instance => ref.current = instance}
            >
                {
                    props.list.slice(0, countVisibleElements).map(dataCard => (
                        <MPCard
                            key={dataCard.name}
                            name={dataCard.name}
                            substring={dataCard.substring}
                            srcImg={dataCard.srcImg}
                            link={dataCard.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ListMPCards;
