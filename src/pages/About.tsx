import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledAbout = styled(StyledPage)`
    justify-content: space-between;
    height: 50vh;
    color: rgb(255, 255, 255);
    overflow-y: hidden;

    h2 {
        text-align: center;
        font-size: 3.3rem;
    }
    article {
        margin: 3vw;
        h3 {
            font-size: 2rem;
            text-align: center;
        }
        div {
            background: rgba(255, 255, 255, 0.515);
            padding: 0.5rem;
            border-radius: 15px 0 15px 0;
        }
        p {
            color: black;
        }
        p span {
            font-weight: bold;
        }
    }
    /* h1 {
            position: absolute;
            top: 7vh;
            left: 30%;
            z-index: 3;
        } */
`;

export const About: React.FC = () => {
    return (
        <StyledAbout id="AboutCarlDavidson" className="flex-col">
            <h1>Carl Davidson</h1>
            <article>
                <h2>This portfolio was written with Accessibility in mind</h2>
                <p>As such, There is:</p>
                <ul>
                    <li>limited animation on the page</li>
                    <li>No flashing lights are limited</li>
                    <li>High contrast is a concern</li>
                    <li>Aria Roles and Semantic Markup</li>
                    <li>Landmarks </li>
                    <li>tab index</li>
                </ul>
            </article>
            <article>
                <h2>Dev Skills</h2>
                <div>
                    <p>
                        <span>MERN Stack</span> Express JS, React, MongoDB, Node
                    </p>
                    <p>
                        <span>ROR</span> Ruby on Rails, Ruby, PostgreSQL
                    </p>
                    <p>
                        <span>Other</span> HTML, CSS, Git, Figma, SCSS, A11y, Typescript, GraphQL
                    </p>
                </div>
            </article>
        </StyledAbout>
    );
};
