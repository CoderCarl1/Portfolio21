import styled from 'styled-components';

// this is for the dropdown
export const StyledForm = styled.div`
    //mob styles
    padding-right: 12px;
    ul {
        height: 10vh;
        width: 100%;
        font-size: 1.6rem;
        border: none;
        list-style: none;
    }
    //SelectProject - also 1st LI item
    .list-title {
        position: relative;

        margin-bottom: 1.5rem;
        text-align: center;
        top: 1.5vh;
    }

    //triangle + button
    .list-toggle {
        position: absolute;
        top: 0;
        right: 3.5rem;
        width: 0;
        height: 0;
        z-index: 3;
        &:after {
            content: '';
            position: absolute;
            width: 0rem;
            height: 0rem;
            border-top: 1.7rem solid #7c7cc9;
            border-left: 1.4rem solid transparent;
            border-right: 1.4rem solid transparent;
        }
    }
    //class given to UL when clicked
    .list-open {
        z-index: 2;
        width: 90vw;
        height: 75vh;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        background: white;
        border-radius: 2.5rem;
        .list-title {
            color: rgba(128, 128, 128, 0.534);
        }
        .list-toggle {
            top: 0;
            right: 4.25rem;
            &:after {
                border-top: 1.7rem solid rgba(171, 51, 226, 0.582);
            }
        }
    }

    // level 1 LI
    .projListLabel {
        font-size: 1.2rem;
        text-align: center;
        color: grey;
        width: 90%;
        margin: auto;
        span {
            border-bottom: 0.5px solid grey;
            margin-bottom: 0.25px;
        }
    }

    // Level 2 LI
    .projListItem {
        width: 100%;
        position: relative;
        padding: 0.25rem 0 0.25rem 0;

        &:hover {
            &:after {
                content: '';
                position: absolute;
                width: 40%;
                height: 0.25rem;
                bottom: 0;
                left: 30%;
                background: #7c7cc9;
                border-radius: 25%;
            }
        }
        button {
            background: transparent;
            border: none;
            width: 100%;
            margin: 0 auto;
            height: 100%;
            font-size: 1.2rem;
        }
    }

    //tablet Styles
    @media (min-width: 767px) {
        width: 35vw;
        height: 50vh;
        -webkit-box-shadow: 3px 0 2px 0 #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: 3px 0 2px 0 #ccc; /* Firefox 3.5 - 3.6 */
        box-shadow: 3px 0 2px 0 #ccc;
        overflow-y: scroll;

        .list-title {
            margin-left: -2rem;
        }

        ul {
            border: none;
        }

        .list-toggle {
            right: 2.75rem;
            top: 0.25rem;
            z-index: 2;
            &:after {
                z-index: 2;
            }
        }

        .list-open {
            width: 32vw;
            min-height: 50vh;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .list-title {
                margin-left: -2rem;
            }
            .list-toggle {
                right: 2.75rem;
                top: 0.25rem;
            }
        }
    }

    //Desktop Styles
    @media (min-width: 1023px) {
        background: red;
        min-width: 250px;
        max-width: 450px;
        /* width: 25vw; */
        height: 50vh;
        max-height: 750px;
        overflow-y: scroll;
        overflow-x: hidden;

        .list-title {
            margin-left: 2rem;
            text-align: left;
            /* background: red; */
        }
        ul {
            border: none;
        }
        .list-toggle {
            background: blue;
            right: 1.75rem;
            top: 0.5rem;
            z-index: 2;
            &:after {
                z-index: 2;
            }
        }
        .list-open {
            width: 25vw;
            height: 50vh;
            max-height: 750px;
            justify-content: initial;
            .list-title {
                /* margin-left: 2.25rem; */
            }
            .list-toggle {
                right: 1.75rem;
                top: 0.5rem;
                background: blue;
            }
        }
    }
`;

// this is the PROJECT-DETAILS
export const StyledProject = styled.article`
    //mob styles
    height: 60vh;
    overflow-y: scroll;
    width: 90vw;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        font-size: 2rem;
        text-align: center;
    }
    fieldset {
        border-color: rgba(140, 116, 116, 0.25);
        margin-bottom: 2rem;
        legend {
            text-align: center;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        border-radius: 1.5rem;
        margin-bottom: 1.5rem;

        li {
            margin: 0 1rem;
        }
    }
    .proj-links {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 12vh;

        a + a {
            margin-left: 2rem;
        }
        a {
            margin: 1rem 0;
            /* padding: 0.5rem; */
            /* display: block; */
            svg {
                overflow: visible;
                max-height: 4rem;
                max-width: 4rem;
            }

            /* img {
                border: 1px solid red;
            } */
            &:hover {
                /* border-radius: 50%; */
                #OuterCircle {
                    fill: rgb(77, 69, 130);
                    transform: scale(1.1);
                }
                #GitHubOpus {
                    transform: scale(1.1);
                    #Body,
                    #Eye-L,
                    #Eye-R {
                        fill: rgb(77, 69, 130);
                    }
                }
                #innerCircle {
                    transform: scale(1.1);
                }
                #image0 {
                    fill: blue;
                }
            }
        }
    }
    //tablet Styles
    @media (min-width: 768px) {
        width: 45vw;
        height: 50vh;
        padding-left: 1.5rem;
    }
    //desktop Styles
    @media (min-width: 1024px) {
        min-width: 450px;
        max-width: 650px;
        height: 100%;
        padding-left: 1rem;
        overflow-y: initial;
    }
`;
