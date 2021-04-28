// import React, { useState, useEffect, useMemo, useRef } from 'react';
import React, { useState, useEffect, useMemo } from 'react';
// components
import useFocus from './UseFocus';
import { ProjectList } from './ProjectList';
import ProjectDetails from './ProjectDetails';
import LoadingProject from './LoadingProject';
// Data from JSON file
import data from '../data/project_info.json';

//styles

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

const ProjectsBL: React.FC = () => {
    const [projData, setProjData] = useState<Array<TechObject>>([]);
    const [projList, setProjList] = useState<Array<ProjDetails>>([]);
    const [proj, setProj] = useState<ProjDetails>();
    const [focusedId, setfocusedId] = useState<number | null>(null);
    const [projTitleRef, setInputFocus] = useFocus();
    // const projTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setProjData([...data]);
        const projectList: Array<ProjDetails> = (data as Array<TechObject>)
            .map((techObj) => {
                return techObj.details.map((projectObj: ProjDetails) => {
                    return projectObj;
                });
            })
            .flat();
        setProjList(projectList);
        setProj(projectList[0]);
    }, []);

    const handleFocusEvent: (id: number) => void = (id) => {
        setfocusedId(id);
        activeProjFunc(id);
    };
    const handleUnFocusEvent: () => void = () => {
        setfocusedId(null);
    };

    const focusProject: (ref: React.RefObject<HTMLHeadingElement>) => void = (ref) => {
        ref?.current?.focus();
    };

    const handleKeySelect: (e: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>) => void = (e) => {
        //handle keyboard events
        if (e.code === 'Enter') {
            handleSetProject(focusedId || 0);
            // focusProject(projTitleRef);
            setInputFocus();
            //change focus to the project now
        }

        if (e.code === 'ArrowUp') {
            if (focusedId !== null && focusedId > 0) {
                handleFocusEvent(focusedId - 1);
                console.log('focused Id', focusedId);
            }
            if (focusedId == 0) handleFocusEvent(5);
        }

        if (e.code === 'ArrowDown') {
            if (focusedId !== null && focusedId < projList.length - 1) {
                handleFocusEvent(focusedId + 1);
                console.log('focused Id', focusedId);
            }
            if (focusedId == 5) handleFocusEvent(0);
        }

        if (e.code === 'Tab') {
            console.log(e);
        }
    };

    const projImage: string | undefined = useMemo(() => {
        if (proj !== undefined) {
            return proj.bground;
        }
    }, [proj]);

    //sets one project as active
    // : (id: number) => JSX.Element
    const activeProjFunc: (id: number) => void = (id) => {
        const activate: Array<ProjDetails> = projList.map((project) => {
            return {
                ...project,
                active: project.id === id
            };
        });
        setProjList(activate);
    };

    const handleSetProject = (id: number) => {
        const findProj = projList.find((project) => project.id === id);

        if (findProj !== undefined) {
            setProj(findProj);
        } else {
            setProj(projList[0]);
        }
        focusProject(projTitleRef);
    };

    if (proj && proj !== undefined) {
        return (
            <div className="wrapper">
                <ProjectList
                    handleUnFocusEvent={handleUnFocusEvent}
                    proj={proj}
                    handleSetProject={handleSetProject}
                    handleKeySelect={handleKeySelect}
                    handleFocusEvent={handleFocusEvent}
                    projData={projData}
                    focusedId={focusedId}
                />
                <ProjectDetails
                    // ref={projTitleRef}
                    projImage={projImage || './GenericBground.jpg'}
                    proj={proj}
                />
            </div>
        );
    } else {
        return (
            <div style={{ backgroundImage: `url(${projImage})` }} className="wrapper">
                {/* <ProjectList handleSetProject={handleSetProject} projData={projData} projList={projList} /> */}
                <LoadingProject />
            </div>
        );
    }
};

export default ProjectsBL;
