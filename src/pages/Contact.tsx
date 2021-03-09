import React from 'react';
import ContactFormBL from '../components/ContactFormBL';
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledContact = styled(StyledPage)`
    /* background: grey; */
    height: 90vh;
    /* width: 80vw; */
    .invalid {
        border: 1px solid red;
    }
    .invalidLabel {
        color: red;
    }
    form {
        margin: 0 2vw;
        max-width: 96vw;

        height: 90vh;
        padding-bottom: 2rem;
        /* justify-content: center; */
        align-items: center;

        fieldset {
            width: 90%;
            padding-top: 1rem;
            /* background: #8f8f8f; */

            padding-bottom: 4rem;
            border: 4px solid rgba(255, 255, 255, 0.556);
            margin: auto;
        }
        legend {
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.7);
            /* text-shadow: #432c2c 0px 0px 3px; */
        }
        label {
            margin-bottom: 0.5rem;
            margin-left: 2rem;
            width: 85%;
            display: flex;
            flex-direction: column;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.5rem;
            /* justify-content: space-between; */
        }
        input {
            width: 70vw;
            height: 2rem;
            display: block;
        }
        input[name='message'] {
            min-height: 10vh;
            max-height: 35vh;
        }
        button {
            width: 6rem;
            height: 3rem;
            display: block;
            margin: 0 auto;
            margin-top: 1rem;
            border-radius: 0.5rem;
            background: rgba(255, 255, 255, 0.7);
            border: 2px solid #494370;
            &:active {
                background: #494370;
                border: 2px solid rgba(255, 255, 255, 0.7);
                color: white;

                /* transform: scale(1.1) */
            }
        }
        ul {
            list-style: none;
            position: relative;
            /* background: red; */
            width: 50%;
            margin: auto;
            animation: bounce 0.3s ease-in-out alternate infinite;
            .notice {
                position: relative;
                top: 0.5rem;
                border-radius: 0.5rem;
                border: 0.5px #00d2c6 ridge;
                box-shadow: -1px -1px 2px 0 rgba(0, 0, 0, 0.3), 2px 2px 2.5px rgba(255, 255, 255, 0.25);
                text-align: center;
                width: 25ch;
                height: 2rem;
                margin: auto;
                background-color: white;
            }
            .noticeX {
                position: absolute;
                border-radius: 0 0.5rem 0.5rem 0;
                margin: 0;
                top: 0px;
                right: 0px;
                width: 1.5rem;
                height: 2rem;
                border: none;
                z-index: 2;
                &:active {
                    /* transform: scale(1.1); */
                    background: white;
                    border: 2px solid #008cba;
                }
                /* background: red; */
            }
        }
    }
    @keyframes bounce {
        from {
            transform: translatY(0);
        }
        to {
            transform: translateY(0.05rem);
        }
    }
`;

export const Contact: React.FC = () => {
    return (
        <StyledContact id="contact">
            <ContactFormBL />
        </StyledContact>
    );
};
