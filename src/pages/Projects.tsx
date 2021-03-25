import React from 'react';
import ProjectsBL from '../components/ProjectsBL';
//state
import { useViewport } from '../ViewPortContext';
//styles
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';
// components
import ManOnTree from '../components/ManOnTree';

const StyledProjects = styled(StyledPage)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 650px;
    h2 {
        margin: 1rem 0;
        font-size: 3.3rem;
        color: rgb(255, 255, 255);
    }
    h4 {
        font-weight: lighter;
    }

    .wrapper {
        min-width: 250px;
        border-radius: 2.5rem;
        width: 90%;
        overflow: hidden;
        background: #ffffff;
        height: 550px;
        background-position: center; /* Center the image */
        /* background-repeat: no-repeat; Do not repeat the image */
        background-size: cover;
    }

    @media (min-width: 768px) {
        .wrapper {
            display: flex;
        }
    }

    @media (min-width: 1023px) {
        width: 100vw;
        min-height: 750px;
        height: 100%;
        margin-bottom: 0;
        justify-content: space-evenly;
        .outerWrapper {
            display: flex;
            max-width: 1200px;
            /* overflow: hidden; */
            width: 80%;
            height: 750px;
            position: relative;
            #manOnTree {
                svg {
                    height: 750px;
                }
                z-index: 1;
                position: absolute;
                right: -25%;
                top: -15%;
                object-fit: contain;
                filter: grayscale(100%);
                /* &:hover {
                    animation: grayscaleHover 0.5s ease-in-out forwards;
                } */
            }
            .wrapper {
                margin-right: 2rem;
                align-self: flex-start;
                height: 550px;
                width: 100%;
                z-index: 2;
            }
        }
    }
`;

export const Projects: React.FC = () => {
    const { width } = useViewport();
    const desktopBP = 1024;

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
