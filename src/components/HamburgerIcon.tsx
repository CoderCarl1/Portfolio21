import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    all: initial;
    width: 4rem;
    height: 2rem;
    width: 4rem;
    margin-right: 2.5vw;
    div {
        position: relative;
        margin: 0 auto;
        width: 50%;
        height: 0.2rem;
        background: white;
        &:before,
        &:after {
            position: absolute;
            content: '';
            width: 80%;
            height: inherit;
            background: white;
        }
        &:before {
            top: -0.5rem;
            left: 1rem;
        }
        &:after {
            top: 0.5rem;
            left: -0.5rem;
        }
    }
    &:active {
        overflow: hidden;
        div {
            animation-name: buttonOpen;
            animation-duration: 500ms;
            animation-timing-function: linear;
            animation-direction: alternate;
            animation-fill-mode: forwards;
            background: white;
            box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 07);
            &:before,
            &:after {
                background: white;
                box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 07);
            }
        }
    }
    @keyframes buttonOpen {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(450deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    //hide from tablet up
    @media (min-width: 768px) {
        display: none;
    }
`;
// <HamburgerIcon handleULClick={handleULClick}/>
const hamburgerIcon: React.FC<{ handleULClick: () => void }> = ({ handleULClick }) => {
    return (
        <StyledButton onClick={() => handleULClick()}>
            <div></div>
        </StyledButton>
    );
};

export default hamburgerIcon;
