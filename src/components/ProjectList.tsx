import React, { useRef } from 'react';
//state
import { useViewport } from '../ViewPortContext';
//styles
import { StyledDTProjList, StyledTabletProjList, StyledProjList } from './ProjectStyles';

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
    const { width } = useViewport();

    const handleKeySelect: (e: React.KeyboardEvent<HTMLButtonElement>) => void = (e) => {
        if (e.key === '13') {
            handleSetProject(e.currentTarget.value);
        }
    };
    const handleProjSelect: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
        if (e.type == 'click') {
            handleSetProject(e.currentTarget.value);
        }
        handleListState();
    };

    const handleListState = () => {
        setListState(!listState);

        if (ProjListRef.current !== null) {
            ProjListRef.current.classList.toggle('list-closed');
            ProjListRef.current.classList.toggle('list-open');
        }
    };

    const options: any = projData.map((projects, index) => {
        return (
            <li key={index.toString()} className="projListLabel">
                <span>{projects.techLabel}</span>
                {projects.details.map((project: ProjDetails, index: number) => {
                    return (
                        <li role="menuitem" key={index.toString()} className="projListItem">
                            <button value={project.title} onKeyDown={(e) => handleKeySelect(e)} onClick={(e) => handleProjSelect(e)}>
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </li>
        );
    });

    const list = (
        <div className="list">
            <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}>
                Select Project
            </button>
            {/* <li className="list-title"> </li> */}
            <ul className="list-closed" role="menu" ref={ProjListRef}>
                {options}
            </ul>
        </div>
    );
    // const noList = (
    //     <ul className="list-closed" role="menu" ref={ProjListRef}>
    //         <li className="list-title">
    //             Select Project <button className="list-toggle" onClick={() => handleListState()} onKeyDown={() => handleListState()}></button>
    //         </li>
    //     </ul>
    // );

    if (width > 1020) {
        return <StyledDTProjList>{list}</StyledDTProjList>;
    } else if (width > 760) {
        return <StyledTabletProjList>{list}</StyledTabletProjList>;
    } else {
        return <StyledProjList>{list}</StyledProjList>;
    }
};
