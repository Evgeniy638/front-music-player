import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import style from "./Navbar.module.scss";

const arrLinks = [
    {
        href: "/",
        name: "Главная"
    },
    {
        href: "/search",
        name: "Поиск"
    },
    {
        href: "/media_library",
        name: "Моя медиатека"
    }
]

interface Props {

}

const Navbar: React.FC<Props> = () => {
    const router = useRouter();

    return (
        <div className={style.Navbar}>
            <h1 className={style.Navbar__title}>
                Music Player
            </h1>
            <ul className={style.Navbar__menu}>
                {
                    arrLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <a 
                                    className={`
                                        ${style.Navbar__menuLink} 
                                        ${router.pathname === link.href && style.Navbar__menuLink_active}
                                    `}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar
