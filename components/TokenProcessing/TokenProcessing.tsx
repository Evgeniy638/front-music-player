import { useEffect } from "react";
import getConfig from 'next/config';
import { useRouter } from "next/dist/client/router";
import { constants } from "../../constants";
import { setAccessToken } from "../../api";

interface Props { }

const clientId = getConfig().publicRuntimeConfig.CLIENT_ID;
const BASE_URL = getConfig().publicRuntimeConfig.BASE_URL;

const TokenProcessing: React.FC<Props> = () => {
    const router = useRouter();

    useEffect(() => {
        console.log(router);
        if (router.pathname.includes("/login")) return ()=>{}

        const token = localStorage.getItem(constants.KEY_ACCESS_TOKEN);

        if (token === null) {
            const queryParams = `response_type=code&` +
                `client_id=${clientId}&` +
                `redirect_uri=${BASE_URL}/auth/callback`;

            window.location.href = `https://accounts.spotify.com/authorize?${queryParams}`;
        } else {
            setAccessToken(token);
        }
        return ()=>{}
    }, []);

    return null;
}

export default TokenProcessing;
