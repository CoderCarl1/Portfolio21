import React, { useState, useEffect, useRef } from 'react';
import HamburgerIcon from './HamburgerIcon';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 15vh;
    width: 100%;
    min-width: 375px;
    /* max-width: 1800px; */
    align-items: center;
    background: black;
    display: flex;
    flex-direction: column;
    & > * {
        a {
            text-decoration: none;
        }
    }
    .nav-wrapper {
        width: 90vw;
        align-self: center;
        align-items: center;
        justify-content: space-between;
        height: 15vh;
        p {
            width: auto;
            color: white;
            background: blue;
            text-align: center;
            font-size: 2rem;
        }
    }
    .mob_nav_items {
        display: none;
    }
    .logo {
        position: relative;
        width: 4.5rem;
        height: 4.5rem;
        margin-left: 2.5vw;
        image {
            object-fit: contain;
        }
    }
    ul {
        position: absolute;
        top: 15vh;
        left: 0;
        height: 85vh;
        background: #000000;
        width: 100vw;
        li {
            /* text-decoration: none; */
            text-align: center;
            list-style: none;
            font-size: 1.6rem;
            margin-top: 3.28rem;
            width: 100%;
            a {
                color: white;
            }
        }
    }
    .menu_down {
        animation: menu_down_animation 0.3s ease-out forwards;
    }
    .menu_up {
        animation: menu_up_animation 0.3s 0.2s ease-in forwards;
    }
    @keyframes menu_down_animation {
        from {
            transform: translateY(-100vh);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes menu_up_animation {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100vh);
        }
    }
    //tablet
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-direction: row;
        height: 15vh;
        width: 100vw;
        ul {
            position: initial;
        }
        .logo {
            /* display: block; */
            width: 5rem;
            height: 5rem;
            margin-left: 1rem;
            image {
                object-fit: contain;
            }
        }
        .nav_items {
            display: flex;
            align-items: center;
            height: 15vh;
            width: calc(100vw - 11rem);
            li {
                margin: initial;
                height: 2rem;
                a {
                    &:hover {
                        -webkit-text-fill-color: black;
                        -webkit-text-stroke-width: 3px;
                        -webkit-text-stroke-color: white;
                    }
                }
            }
        }
    }
`;

interface Props {
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navOpen: boolean;
}

export const Navigation: React.FC<Props> = ({ setNavOpen, navOpen }) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const [width, setWidth] = useState(window.innerWidth);
    const tabletBP = 768;

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        console.log('desktop resized: ', width);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const handleULClick: () => void = () => {
        setNavOpen(!navOpen);

        const { current } = ulRef;
        if (null !== current) {
            navOpen ? (current.className = ' menu_up') : (current.className = ' menu_down');
        }
    };
    if (width >= tabletBP) {
        return (
            /* Tablet + DeskTop Layout */
            <Nav className="nav" aria-label="Main">
                {/* <div className="nav-wrapper flex"> */}
                <img src="./logo80.png" className="logo" alt="Carl Davidson - Logo" aria-hidden="true" />

                <ul className="nav_items">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                {/* </div> */}
            </Nav>
        );
    } else {
        /* MOB Layout */
        return (
            <Nav className="nav" aria-label="Main">
                <div className="nav-wrapper flex">
                    <img src="./logo80.png" className="logo" alt="Carl Davidson - Logo" aria-hidden="true" />
                    <p> Carl Davidson</p>
                    <ul ref={ulRef} className="mob_nav_items">
                        <li>
                            <a href="#about" onClick={() => handleULClick()}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => handleULClick()}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handleULClick()}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <HamburgerIcon handleULClick={handleULClick} />
                </div>
            </Nav>
        );
    }
};
