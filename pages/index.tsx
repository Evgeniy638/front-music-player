import React, { useEffect, useState } from "react";
import { apiHealth } from "../api";
import MainContainer from "../components/MainContainer/MainContainer";

export default function Home() {
    const [health, setHealth] = useState("");

    useEffect(() => {
        apiHealth.getHealth()
            .then((health) => {
                setHealth(health);
            });
    }, []);

    return (
        <MainContainer>
            <>
                Hello world!
                <br/>
                {health}
            </>
        </MainContainer>
    )
}
