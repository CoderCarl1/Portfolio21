import React from 'react';
import { useRef /* useLayoutEffect */ } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 15vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: black;
    color: white;
    /* justify-content: space-between; */
    .nav {
        display: flex;
        flex-direction: column;
    }
    .nav-wrapper {
        /* position: absolute; */
        width: 90vw;
        /* border: 1px solid red; */
        align-items: center;
        justify-content: space-between;
        height: 15vh;
        margin: 0 auto;
        h1 {
            width: 5rem;
        }
        button {
            width: 4rem;
            height: 2rem;
        }
        .logo {
            position: relative;
            width: 1.5rem;
            height: 12.5vh;
            /* margin: auto; */
            image {
                object-fit: contain;
            }
        }
    }
    .mob_nav_items {
        display: none;
    }
    .dt-nav_items {
        display: none;
    }
    ul {
        position: absolute;
        top: 15vh;
        height: 85vh;
        background: #000000;
        width: 100vw;
        li {
            text-decoration: none;
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

    @media (min-width: 768px) {
        .nav-wrapper {
            position: relative;
            width: 100vw;
            height: 15vh;
        }

        .dt-nav_items {
            display: flex;
            align-items: center;
            height: 15vh;
            top: 0;
            right: 0;
            width: calc(100vw - 11rem);
        }
        .mob_nav_items {
            display: none;
        }
        button {
            display: none;
        }
    }
`;

interface Props {
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navOpen: boolean;
}

export const Navigation: React.FC<Props> = ({ setNavOpen, navOpen }) => {
    const ulRef = useRef<HTMLUListElement>(null);

    const handleULClick: () => void = () => {
        setNavOpen(!navOpen);

        const { current } = ulRef;
        if (null !== current) {
            navOpen ? (current.className = ' menu_up') : (current.className = ' menu_down');
        }
    };

    return (
        <Nav className="nav">
            <div className="nav-wrapper flex">
                <img src="./logo80.png" alt="Logo" />

                <ul className="dt-nav_items">
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
                <button onClick={() => handleULClick()}> = </button>
            </div>
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
        </Nav>
    );
};
