import { useContext, useEffect, useState } from "react";
import { config } from "../config";
import { SocialMedias } from "../components/socials";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { CursorContext } from "../cursor.context";


export function Layout(): JSX.Element {


    const { navItems } = config;
    const { onLinkEntered, onLinkExited } = useContext(CursorContext);
    const [navShadow, setNavShadow] = useState(false);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const changeNavShadow = () => {
        window.scrollY > 0 ? setNavShadow(true) : setNavShadow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavShadow);
        return () => {
            window.removeEventListener('scroll', changeNavShadow);
        }
    }, []);


    return (
        <>
            {/* MOBILE */}
            <nav className={`lg:hidden sticky top-0 z-10 border-gray-200 bg-gradient-to-r from-slate-800 to-75% to-slate-900 transition-all duration-300 ${navShadow ? "drop-shadow-2xl" : ''}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-6 py-4 md:px-12 ">
                    <a href="#" className="flex items-center">
                        <img className="inline-block h-14 w-14 rounded-full ring-4 ring-inset ring-white" src="profile-picture.jpeg" />
                        <span className="text-xl font-bold ml-2">Julien Blacas</span>
                    </a>
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} type="button" className="inline-flex items-center justify-center cursor-none p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${!showMobileMenu && 'hidden'} w-full`} id="navbar-hamburger">
                        <div className="flex flex-col font-medium mt-4 rounded overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            {navItems.map(({ text, path }) => (
                                <NavLink
                                    onMouseEnter={onLinkEntered}
                                    onMouseLeave={onLinkExited}
                                    onClick={() => setShowMobileMenu(false)}
                                    key={path}
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 pr-4 hover:bg-gray-600 hover:text-white bg-gray-700 text-gray-200 ${isActive ? "border-l-8 border-cyan-500" : 'pl-5'}`
                                    }
                                    to={path}>
                                    {text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-6 md:px-12 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    {/* DESKTOP */}
                    <div className="hidden nav-wrapper lg:flex flex-col items-center lg:items-start lg:py-24 lg:max-h-screen lg:sticky lg:top-0 lg:w-1/4">
                        <img id={styles.profilePicture} className="mb-3" src="profile-picture.jpeg" />
                        <span className="text-xl mb-3 text-sky-400">Hi, my name is</span>
                        <span className="text-4xl font-bold">Julien Blacas.</span>
                        <span className="text-2xl mb-3 font-light">Fullstack JS developer</span>
                        <nav>
                            <div className={styles.linkContainer}>
                                {navItems.map(({ text, path }) => (
                                    <NavLink
                                        onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited}
                                        key={path}
                                        className={({ isActive }) =>
                                            `link pt-5 pb-1 ${isActive ? "active": ""}`
                                        }
                                        to={path}>
                                        {text}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>
                    </div>
                    {/* END DESKTOP */}
                    <div className="lg:py-24 lg:w-3/4">
                        <Outlet />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <SocialMedias />
                </div>
            </div>
        </>
    )
}