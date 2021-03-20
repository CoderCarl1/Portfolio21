import React from 'react';
import ContactFormBL from '../components/ContactFormBL';
import styled from 'styled-components';
import { StyledPage } from '../styles/GlobalStyles';

const StyledContact = styled(StyledPage)`
    height: 90vh;
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
            border-radius: 10px;
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
        textarea,
        input {
            border-radius: 25px;
            padding-left: 1rem;
        }
        textarea {
            padding-top: 1rem;
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
            position: absolute;
            width: 40%;
            margin: 2.5% 15% 0 15%;
            animation: fadeIn 0.3s ease-in-out forwards;
            -webkit-animation: fadeIn 0.3s ease-in-out forwards;
            -moz-animation: fadeIn 0.3s ease-in-out forwards;
            -o-animation: fadeIn 0.3s ease-in-out forwards;
            -ms-animation: fadeIn 0.3s ease-in-out forwards;
            .notice {
                position: relative;
                top: 0.5rem;
                border-radius: 0.5rem;

                box-shadow: -1px -1px 2px 0 rgba(0, 0, 0, 0.3), 2px 2px 2.5px rgba(255, 255, 255, 0.25);
                text-align: center;
                font-size: 1.1rem;
                width: 25ch;
                height: 2rem;
                margin: auto;
                background-color: white;
            }
            .noticeX {
                position: absolute;
                margin: 0;
                top: 0;
                right: -5px;
                width: 2rem;
                height: 2rem;
                background-color: white;
                box-shadow: -1px -1px 2px 0 rgba(0, 0, 0, 0.3), 2px 2px 2.5px rgba(255, 255, 255, 0.25);
                border: none;
                border-radius: 50%;
                z-index: 2;
                &:active,
                &:hover {
                    /* transform: scale(1.1); */
                    background: #494370;
                    color: #ffffff;
                    border: 2px solid #008cba;
                }
                /* background: red; */
            }
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
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
