import React, { useState, useEffect } from 'react';
import ProjectsBL from '../components/ProjectsBL';

import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';
import ManOnTree from '../components/ManOnTree';

const StyledProjects = styled(StyledPage)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    h2 {
        margin: 1rem 0;
        font-size: 3.3rem;
        color: rgb(255, 255, 255);
    }

    .wrapper {
        border-radius: 2.5rem;
        width: 90vw;
        overflow: hidden;
        background: #ffffff;
        height: 80vh;
    }

    @media (min-width: 768px) {
        height: 70vh;
        .wrapper {
            display: flex;
            height: 50vh;
        }
    }

    @media (min-width: 1023px) {
        width: 100vw;
        border: 1px solid red;
        height: 100%;

        .outerWrapper {
            display: flex;
            width: 98vw;
            max-width: 1764px;
            .wrapper {
                margin-right: 2rem;
                align-self: flex-start;
                width: 70%;
                max-width: 600px;
                height: 50vh;
                max-height: 750px;
                overflow: display;
                background: red;
                border: 3px solid pink;
            }
            #manOnTree {
                width: 2%;
                object-fit: contain;
                filter: grayscale(100%);
                &:hover {
                    animation: grayscaleHover 0.5s ease-in-out forwards;
                }
            }
        }
        @keyframes grayscaleHover {
            from {
                filter: grayscale(100%);
            }
            to {
                filter: grayscale(75%);
            }
        }
    }
`;

export const Projects: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const desktopBP = 1024;

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        console.log("desktop resized: ", width)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
        
    }, []);

    if (width >= desktopBP) {
        return (
            <StyledProjects id="projects">
                <h2>Projects</h2>
                <div className="outerWrapper">
                    <ProjectsBL />
                    <ManOnTree />
                </div>
            </StyledProjects>
        );
    } else {
        return (
            <StyledProjects id="projects">
                <h2>Projects</h2>
                <ProjectsBL />
            </StyledProjects>
        );
    }
};
