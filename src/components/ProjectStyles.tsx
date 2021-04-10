import styled from 'styled-components';

// Base Styling for the dropdown List of Projects
export const StyledForm = styled.div`
    * {
        scrollbar-width: thin;
        scrollbar-color: #7c7cc9 transparent;
    }
    *::-webkit-scrollbar {
        width: 6.5px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #7c7cc9;
        border-radius: 20px;
        border: transparent;
    }
    //triangle + button
    .list-toggle {
        width: 0;
        height: 0;
        position: relative;
        border: none;
        &:after {
            content: '';
            position: absolute;
            width: 0rem;
            height: 0rem;
            border-top: 1.7rem solid #7c7cc9;
            border-left: 1.3rem solid transparent;
            border-right: 1.3rem solid transparent;
            z-index: 3;
        }
    }

    //styling that affects the list regardless if listOpen or listClosed
    ul {
        /* height: 4rem; */
        width: 100%;
        font-size: 1.6rem;
        border: none;
        list-style: none;
        background: white;
    }
    //"SelectProject" - also 1st LI item
    .list-title {
        position: relative;
        text-align: center;
    }
    .list {
        position: relative;
    }
    .list-closed {
        position: absolute;
        animation: menu-change 2s ease-out forwards;
    }
    @keyframes menu-change {
        from {
            left: 0;
        }
        to {
            left: -1000px;
        }
    }

    //class given to UL when clicked
    .list-open {
        animation: menu-change 2s ease-out forwards;
        animation-direction: reverse;
        z-index: 3;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        background: white;
        //"SelectProject" - also 1st LI item
        .list-title {
            color: rgba(171, 51, 226, 0.582);
        }
        //triangle + button when listOpen
        .list-toggle {
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
        &:hover {
            border-radius: 50px;
            background: rgba(171, 51, 226, 0.582);
            box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff;
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
`;

//Mobile Styling
export const StyledProjList = styled(StyledForm)`
    min-width: 320px;
    /* padding-right: 12px; */
    .list-toggle {
        top: -1.5rem;
        right: -1.5rem;
    }
    //"SelectProject" - also 1st LI item
    .list-title {
        margin-bottom: 1.5rem;
        top: 1.5vh;
    }
    //class given to UL when clicked
    .list-open {
        width: 100%;
        height: 550px;
        border: 1px solid black;
        border-radius: 2.5rem;
        .list-toggle {
            top: -1.5rem;
            right: -1.5rem;
        }
    }

    // Level 2 LI
    .projListItem {
        padding: 0.25rem 0 0.25rem 0;
        width: 50%;
        margin: 3px auto;
    }
`;
//tablet styling
export const StyledTabletProjList = styled(StyledForm)`
    min-width: 250px;
    max-width: 300px;
    -webkit-box-shadow: 3px 0 2px 0 #ccc; /*Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 0 2px 0 #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 0 2px 0 #ccc;

    .list-toggle {
        top: -1.5rem;
        right: 3px;
    }
    //"SelectProject" - also 1st LI item
    .list-title {
        margin-bottom: 1.5rem;
        margin-left: -1rem;
        top: 1.5vh;
    }
    //class given to UL when clicked
    .list-open {
        width: 100%;
        height: 100%;
        .list-toggle {
            top: -1.5rem;
            right: 3px;
        }
    }
    // level 1 LI
    .projListLabel {
        margin-bottom: 15px;
    }

    // Level 2 LI
    .projListItem {
        margin-top: 5px;
        padding: 0.25rem 0 0.25rem 0;
    }
`;
// Desktop Styling
export const StyledDTProjList = styled(StyledForm)`
    min-width: 250px;
    max-width: 300px;
    -webkit-box-shadow: 3px 0 2px 0 #ccc; /*Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 0 2px 0 #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 0 2px 0 #ccc;

    .list-toggle {
        top: -1.5rem;
        right: 3px;
    }
    //"SelectProject" - also 1st LI item
    .list-title {
        margin-bottom: 1.5rem;
        margin-left: -1rem;
        top: 1.5vh;
    }
    //class given to UL when clicked
    .list-open {
        width: 100%;
        height: 100%;
        .list-toggle {
            top: -1.5rem;
            right: 3px;
        }
    }
    // level 1 LI
    .projListLabel {
        margin-bottom: 15px;
    }

    // Level 2 LI
    .projListItem {
        margin-top: 5px;
        padding: 0.25rem 0 0.25rem 0;
    }
`;

// this is the PROJECT-DETAILS
export const StyledProject = styled.article`
    background: rgb(255, 255, 255);
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    .proj-wrapper {
        color: white;
        background: rgba(65, 64, 64, 0.856);
    }
    //mob styles
    .proj-description {
        color: black;
        padding: 0 1.5rem;
        min-height: 100px;
    }
    h3 {
        font-size: 2rem;
        text-align: center;
        padding: 0.5rem 0;
        background: rgba(0, 0, 0, 0.7);
        border: none;
        color: rgb(255, 255, 255);
    }

    // this is Github & website
    .proj-links {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* height: 7%; */
        position: relative;
        //holds the images + p tags
        .proj-link-wrapper {
            text-align: center;
        }
        //adds a margin between the 2
        a + a {
            margin-left: 2rem;
        }
        //links / images
        .proj-link-wrapper {
            margin: 1rem 0;
            p {
                background: rgb(255, 255, 255);
                color: black;
                padding: 0 0.25rem;
                border-radius: 5555px;
            }
            svg {
                overflow: visible;
                max-height: 4rem;
                max-width: 4rem;
            }
            &:hover {
                p {
                    color: rgb(77, 69, 130);
                    transform: scale(1.1);
                }
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
    //this is each of the sections
    fieldset {
        background: rgb(255, 255, 255);
        box-shadow: inset 2px 2px 3px #505758, inset -2px -2px 3px #ffffff;
        border: none;
        border-radius: 25px;
        /* color: black; */
        legend {
            color: rgba(171, 51, 226, 0.582);
            font-size: 1.2rem;
            font-weight: bold;
            padding: 0 1rem;
            text-align: center;
            border-radius: 15px;
            background: #ffffff;
            box-shadow: inset 2px 2px 3px #f8ffff, inset -2px -2px 3px #8c989a;
        }
        .tech-used {
            color: black;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            border-radius: 1.5rem;
            min-height: 5rem;
            li {
                margin: 0 1rem;
                padding: 0.2rem;
            }
        }
    }
    //this is the project description

    //mob styles
    @media (max-width: 767px) {
        /* height: 450px; */
        min-width: 320px;
        min-height: 450px;
        width: 100%;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        //wrapper that provides the background above the bgimage
        .proj-wrapper {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 500px;
            margin: 0 auto;
            //'tech used'
            fieldset {
                margin: 1.25rem 0.5rem;
                //ul
                .tech-used {
                    //li for each tech item
                    li {
                    }
                }
            }
            //Github and app links & images
            .proj-links {
                bottom: 0.5rem;
            }
        }
        padding: 0;
    }

    //tablet Styles
    @media (min-width: 768px) {
        width: 100%;
        height: 100%;
        .proj-wrapper {
            padding-left: 1.5rem;
            border-left: 5px solid rgba(171, 51, 226, 0.582);
        }
        .proj-links {
            bottom: 0.5rem;
        }
        padding: 0;
    }
    //desktop Styles
    @media (min-width: 1024px) {
        .proj-wrapper {
            padding-left: 1rem;
            border-left: 5px solid rgba(171, 51, 226, 0.582);
        }
        .proj-links {
            bottom: -5.5rem;
        }
        padding: 0;
        min-width: 450px;
        /* max-width: 650px; */
        height: 100%;
        overflow-y: initial;
    }
`;
