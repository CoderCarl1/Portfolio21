import React, { useRef } from 'react';
// import React, { useRef } from 'react';
//state
import { useViewport } from '../ViewPortContext';
//styles
import { StyledDTProjList, StyledTabletProjList, StyledProjList } from './ProjectStyles';
import { RiArrowUpDownFill } from 'react-icons/ri';
//components
import ProjectButton from './ProjectButton';

interface TechObject {
    techLabel: string;
    details: ProjDetails[];
}
interface ProjDetails {
    id: number;
    title: string;
    description: string;
    tech: string[];
    links: {
        github: string;
        site?: string;
    };
    bground?: string;
    active: boolean;
}

interface Props {
    projData: Array<TechObject>;
    handleSetProject: (id: number) => void;
    proj: ProjDetails;
    // activeProjFunc: (id: number) => void;
    handleFocusEvent: (id: number) => void;
    handleUnFocusEvent: () => void;
    handleKeySelect: (e: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>) => void;
    focusedId: number | null;
}

export const ProjectList: React.FC<Props> = ({ handleKeySelect, handleUnFocusEvent, handleFocusEvent, focusedId, proj, projData, handleSetProject }) => {
    const ProjListRef = useRef<HTMLUListElement>(null);
    const { width } = useViewport();

    const handleProjSelect: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
        if (e.type === 'click') {
            handleSetProject(focusedId || 0);
        }
        if (width < 1020) toggleListClass();
    };

    const toggleListClass = () => {
        if (ProjListRef.current !== null) {
            ProjListRef.current.classList.toggle('list-closed');
            ProjListRef.current.classList.toggle('list-open');
        }
    };

    // JSX stuff - dont need to touch
    const options: JSX.Element[] = projData.map((projects: TechObject, index: number) => {
        return (
            <li key={index.toString()} className="projListLabel">
                <span>{projects.techLabel}</span>
                {projects.details.map((project: ProjDetails) => {
                    return (
                        <li role="menuitem" key={project.id.toString()} className="projListItem">
                            <ProjectButton
                                id={project.id}
                                title={project.title}
                                handleKeySelect={handleKeySelect}
                                focusedId={focusedId}
                                handleProjSelect={handleProjSelect}
                                handleFocusEvent={handleFocusEvent}
                                proj={proj}
                                handleUnFocusEvent={handleUnFocusEvent}
                            />
                        </li>
                    );
                })}
            </li>
        );
    });

    const list = (
        <div className="list">
            {width < 1020 ? (
                <button tabIndex={0} aria-label="Select a Project" role="menu" className="list-toggle" onClick={() => toggleListClass()} onKeyDown={(e) => handleKeySelect(e)}>
                    {' '}
                    Select Project
                </button>
            ) : (
                <div className="nav-explanation" aria-label="Select a Project" role="menu" tabIndex={0} onKeyDown={(e) => handleKeySelect(e)}>
                    <h3>Select Project</h3>
                    Use <RiArrowUpDownFill /> to move through the list <kbd>Enter</kbd> to select.
                </div>
            )}
            {/* <li className="list-title"> </li> */}
            <ul className={`${width < 1020 ? 'list-closed' : 'list-open'}`} tabIndex={-1} role="menu" ref={ProjListRef}>
                {options}
            </ul>
        </div>
    );

    if (width > 1020) {
        return <StyledDTProjList>{list}</StyledDTProjList>;
    } else if (width > 760) {
        return <StyledTabletProjList>{list}</StyledTabletProjList>;
    } else {
        return <StyledProjList>{list}</StyledProjList>;
    }
};
