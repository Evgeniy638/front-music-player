import React from "react";
import ListMPCards from "../components/ListMPCards/ListMPCards";
import { ListMPCardsProps } from "../types";

const data: ListMPCardsProps = {
    title: "Новые релизы",
    substring: "подпись",
    list: [
        {
            name: "Микс дняzzzzzzzzzz №1",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
        {
            name: "Микс дня №2",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
        {
            name: "Микс дня №3",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
        {
            name: "Микс дня №4",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
        {
            name: "Микс дня №5",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
        {
            name: "Микс дня №6",
            substring: "Radio Tapok",
            srcImg: "https://i1.sndcdn.com/artworks-000605087293-eslspr-t500x500.jpg",
            link: "/search"
        },
    ]
}

export default function Home() {


    return (
        <>
            <ListMPCards
                {...data}
            />
        </>
    )
}
