import React, { useEffect, useState } from "react";
import MusicPlayerHead from "../MusicPlayerHead/MusicPlayerHead";
import getConfig from 'next/config';
import { setBaseUrl } from "../../api";

import style from "./MainContainer.module.scss";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../bll/reducers";

setBaseUrl(getConfig().publicRuntimeConfig.BASE_URL);

interface IPropsMainContainer {
    children: JSX.Element
}

const MainContainer= (props: IPropsMainContainer) => {
    const count = useSelector((state: RootState) => state.reducerCount.count);

    const dispatch = useDispatch();

    useEffect(() => {
        const increment = () => {
            dispatch({type: "INCREMENT"})
        }

        window.addEventListener("click", increment);

        return () => {
            window.removeEventListener("click", increment);
        }
    });

    return (
        <>
            <MusicPlayerHead/>
            <div className={style.MainContainer}>
                <nav className={style.MainContainer__nav}>
                    <Navbar/>
                </nav>
                <main className={style.MainContainer__main}>
                    {props.children}
                </main>
                <footer className={style.MainContainer__footer}>
                    {count}
                </footer>
            </div>
        </>
    );
}

export default MainContainer;
