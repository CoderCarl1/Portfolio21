import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledAbout = styled(StyledPage)`
    justify-content: space-between;
    height: 50vh;
    color: rgba(255, 255, 255, 0.7);
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
`;

export const About: React.FC = () => {
    return (
        <StyledAbout id="about" className="flex-col">
            <h2>About</h2>
            <article>
                <h3>Dev Skills</h3>
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
