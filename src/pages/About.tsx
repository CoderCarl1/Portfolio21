import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledAbout = styled(StyledPage)`
    /* background: grey; */
    height: 50vh;
    h2 {
        font-size: 3.3rem;
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const About: React.FC = () => {
    return (
        <StyledAbout id="about">
            <h2>About</h2>
            <h3>Dev Skills:</h3>
            <p>MERN Stack: Express JS, React, MongoDB, Node</p>
            <p>ROR: Ruby on Rails, Ruby, PostgreSQL</p>
            <p>Other: HTML, CSS, Git, Figma, SCSS, A11y, Typescript, GraphQL</p>
        </StyledAbout>
    );
};
