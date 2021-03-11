import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    ul {
        height: 10vh;
        width: 100%;
        font-size: 1.6rem;
        border: none;
        background: white;
        list-style: none;

        //SelectProject - also 1st LI item
        .list-title {
            position: relative;
            border: 1px solid pink;
            text-align: center;
        }

        //triangle + button
        .list-toggle {
            position: absolute;
            border: 1px solid pink;
            z-index: 99;
            top: 0.7rem;
            right: 1.5rem;
            z-index: 0;
            &:after {
                content: '';
                position: absolute;
                width: 0rem;
                height: 0rem;
                border-top: 1.5rem solid pink;
                border-left: 1.29rem solid transparent;
                border-right: 1.29rem solid transparent;
                top: -0.1rem;
                right: -1rem;
                z-index: 3;
            }
        }
    }
    //class given to UL when clicked
    .list-open {
        z-index: 2;
        width: 90vw;
        height: 50vh;
        position: absolute;
        overflow-y: scroll;
    }
    // level 1 LI
    .projListLabel {
        font-size: 2rem;
        text-align: center;
    }
    // Level 2 LI
    .projListItem {
        /* background: white; */
        button {
            background: transparent;
            border: none;
            border-bottom: 1px solid black;
            width: 50%;
            height: 100%;
            font-size: 1.2rem;
            padding: 0.5rem 0;
            &:hover {
                border: 1.5px solid #eda5a5;
            }
        }
    }
    /* margin-bottom: 5rem; */
    optgroup {
        height: 2rem;
        font-size: 1rem;
        option {
            background: white;
            font-size: 1rem;
        }
    }
`;

interface TechObject {
    techLabel: string;
    details: ProjDetails[];
}
interface ProjDetails {
    id: number;
    title: string;
    description: string;
    tech: string[];
    links: { github: string };
}

interface Props {
    projData: Array<TechObject>;
    handleSetProject: (str: string) => void;
}

export const ProjectList: React.FC<Props> = ({ projData, handleSetProject }) => {
    const [listState, setListState] = useState<boolean>(false);
    const ProjListRef = useRef<HTMLUListElement>(null);

    const handleProjSelect: (e: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (e) => {
        handleSetProject(e.currentTarget.value);
        handleListState();
    };

    const handleListState = () => {
        setListState(!listState);

        if (ProjListRef.current !== null) {
            ProjListRef.current.classList.toggle('list-closed');
            ProjListRef.current.classList.toggle('list-open');
        }
        console.log('list open: ', listState);
    };

    const options: any = projData.map((projects, index) => {
        return (
            <li key={index.toString()} className="projListLabel">
                {projects.techLabel}
                {projects.details.map((project: ProjDetails, index: number) => {
                    return (
                        <li key={index.toString()} className="projListItem">
                            <button value={project.title} onKeyDown={(e) => handleProjSelect(e)} onClick={(e) => handleProjSelect(e)}>
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </li>
        );
    });

    if (listState) {
        return (
            // <StyledForm className="project-list" onClick={} ref={ProjSelector}>
            <StyledForm>
                <ul className="list-open" ref={ProjListRef}>
                    <li className="list-title">
                        Select Project{' '}
                        <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}>
                            {' '}
                            ={' '}
                        </button>
                    </li>
                    {options}
                </ul>
            </StyledForm>
        );
    } else {
        return (
            // <StyledForm className="project-list" onClick={} ref={ProjSelector}>
            <StyledForm>
                <ul className="list-closed " ref={ProjListRef}>
                    <li className="list-title">
                        Select Project{' '}
                        <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}>
                            {' '}
                            ={' '}
                        </button>
                    </li>
                </ul>
            </StyledForm>
        );
    }
};
