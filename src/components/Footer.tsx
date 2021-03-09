import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: black;
    color: white;
    width: 100%;
    height: 15vh;
    align-items: center;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        justify-content: space-around;
        width: 100%;
    }
    li {
        margin: 0, auto;
        list-style: none;
    }
`;

export const Footer: React.FC = () => {
    return (
        <StyledFooter className="flex">
            <ul className="flex">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/CoderCarl1">
                        Github
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carl-davidson/">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Coder_Carl">
                        Twitter
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="mailto: carl.davidson@hotmail.com">
                        Email
                    </a>
                </li>
            </ul>
        </StyledFooter>
    );
};
