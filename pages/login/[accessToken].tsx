import { useRouter } from "next/dist/client/router";
import { setAccessToken } from "../../api";
import { constants } from "../../constants";

const Login = () => {
    const router = useRouter();
    const { accessToken } = router.query;

    if (typeof accessToken === "string") {
        setAccessToken(accessToken);
        localStorage.setItem(constants.KEY_ACCESS_TOKEN, accessToken);
        router.push({pathname: '/'},undefined, { shallow: true });
    }

    return null;
}

export default Login;
