import React from 'react';
import ProjectsBL from '../components/ProjectsBL';

import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledProjects = styled(StyledPage)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h2 {
        margin: 1rem 0;
        font-size: 3.3rem;
        color: rgba(255, 255, 255, 0.7);
    }
    .wrapper {
        width: 90vw;
        background: green;
    }
`;

export const Projects: React.FC = () => {
    return (
        <StyledProjects id="projects">
            <h2>Projects</h2>
            <ProjectsBL />
        </StyledProjects>
    );
};
