import React from "react";
import MusicPlayerHead from "../MusicPlayerHead/MusicPlayerHead";
import getConfig from 'next/config';
import { setBaseUrl } from "../../api";

import style from "./MainContainer.module.scss";
import Navbar from "../Navbar/Navbar";
import MusicProcessing from "../MusicProcessing/MusicProcessing";
import MusicPlayerFooter from "../MusicPlayerFooter/MusicPlayerFooter";

setBaseUrl(getConfig().publicRuntimeConfig.BASE_URL);

interface IPropsMainContainer {
    children: JSX.Element
}

const MainContainer= (props: IPropsMainContainer) => {
    return (
        <>
            <MusicPlayerHead/>
            <MusicProcessing/>
            <div className={style.MainContainer}>
                <nav className={style.MainContainer__nav}>
                    <Navbar/>
                </nav>
                <main className={style.MainContainer__main}>
                    {props.children}
                </main>
                <footer className={style.MainContainer__footer}>
                    <MusicPlayerFooter/>
                </footer>
            </div>
        </>
    );
}

export default MainContainer;
