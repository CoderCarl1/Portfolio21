import React, { useRef } from 'react';
import { StyledForm } from './ProjectStyles';

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
    listState: boolean;
    setListState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectList: React.FC<Props> = ({ listState, setListState, projData, handleSetProject }) => {
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
    };

    const options: any = projData
        // .filter((projects) => (projects.details.length > 0 ? projects : null))
        .map((projects, index) => {
            return (
                <li key={index.toString()} className="projListLabel">
                    <span>{projects.techLabel}</span>
                    {projects.details.map((project: ProjDetails, index: number) => {
                        return (
                            <li role="menuitem" key={index.toString()} className="projListItem">
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
                <ul className="list-open" role="menu" ref={ProjListRef}>
                    <li className="list-title">
                        Select Project <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}></button>
                    </li>
                    {options}
                </ul>
            </StyledForm>
        );
    } else {
        return (
            // <StyledForm className="project-list" onClick={} ref={ProjSelector}>
            <StyledForm>
                <ul className="list-closed" role="menu" ref={ProjListRef}>
                    <li className="list-title">
                        Select Project <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}></button>
                    </li>
                </ul>
            </StyledForm>
        );
    }
};
