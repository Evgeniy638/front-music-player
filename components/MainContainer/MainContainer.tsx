import React from "react";
import MusicPlayerHead from "../MusicPlayerHead/MusicPlayerHead";
import getConfig from 'next/config';
import { setBaseUrl } from "../../api";

import style from "./MainContainer.module.scss";

setBaseUrl(getConfig().publicRuntimeConfig.BASE_URL);

interface IPropsMainContainer {
    children: JSX.Element
}

const MainContainer= (props: IPropsMainContainer) => {
    return (
        <>
            <MusicPlayerHead/>
            <div className={style.MainContainer}>
                <nav className={style.MainContainer__nav}>

                </nav>
                <main className={style.MainContainer__main}>
                    {props.children}
                </main>
                <footer className={style.MainContainer__footer}>

                </footer>
            </div>
        </>
    );
}

export default MainContainer;
