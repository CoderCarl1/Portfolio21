import React, { useRef } from 'react';
import styled from 'styled-components';
// import data from '../data/project_info.json';

const StyledForm = styled.form`
    select {
        height: 3.3rem;
        width: 100%;
        font-size: 1.6rem;
        border: none;
        background: white;
        border-bottom: 0.3px solid #494370;
        optgroup {
            height: 2rem;
            font-size: 1rem;
            option {
                background: white;
                font-size: 1rem;
            }
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
    const selectedProj = useRef<HTMLSelectElement>(null);

    const handleFormSelect = () => {
        if (selectedProj.current !== null) {
            handleSetProject(selectedProj.current.value);
        }
    };

    const options: any = projData.map((projects, index) => {
        return (
            <optgroup key={index.toString()} label={projects.techLabel}>
                {projects.details.map((project: ProjDetails, index: number) => {
                    return (
                        <option key={index.toString()} value={project.title}>
                            {project.title}
                        </option>
                    );
                })}
            </optgroup>
        );
    });

    return (
        <>
            <StyledForm className="project-list" onChange={() => handleFormSelect()}>
                <select ref={selectedProj} id="projects">
                    {options}
                </select>
            </StyledForm>
        </>
    );
};
