import React from "react";
import MusicPlayerHead from "../MusicPlayerHead/MusicPlayerHead";
import getConfig from 'next/config';
import { setBaseUrl } from "../../api";

setBaseUrl(getConfig().publicRuntimeConfig.BASE_URL);

interface IPropsMainContainer {
    children: JSX.Element
}

const MainContainer= (props: IPropsMainContainer) => {
    return (
        <>
            <MusicPlayerHead/>
            {props.children}
        </>
    );
}

export default MainContainer;
