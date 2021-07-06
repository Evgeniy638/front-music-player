import React from "react";
import ExtraControls from "./ExtraControls/ExtraControls";
import FooterSlider from "./FooterSlider/FooterSlider";
import MusicInfo from "./MusicInfo/MusicInfo";
import style from "./MusicPlayerFooter.module.scss";

interface Props { }

const MusicPlayerFooter: React.FC<Props> = () => {

    return (
        <div className={style.MusicPlayerFooter}>
            <MusicInfo/>
            <FooterSlider/>
            <ExtraControls/>
        </div>
    )
}

export default MusicPlayerFooter;
