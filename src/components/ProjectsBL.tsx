import React, { useState, useEffect, useMemo } from 'react';
// components
import { ProjectList } from './ProjectList';
import { ProjectDetails } from './ProjectDetails';
import LoadingProject from './LoadingProject';
// Data from JSON file
import data from '../data/project_info.json';

//styles

interface TechObject {
    techLabel: string;
    details: ProjDetails[];
}
export interface ProjDetails {
    id: number;
    title: string;
    description: string;
    tech: string[];
    links: { github: string };
    bground?: string;
}

const ProjectsBL: React.FC = () => {
    const [projData, setProjData] = useState<Array<TechObject>>([]);
    const [projList, setProjList] = useState<Array<ProjDetails>>([]);
    //this is the dropdown Select menu
    const [listState, setListState] = useState<boolean>(false);
    const [proj, setProj] = useState<ProjDetails>();
    const projImage: string | undefined = useMemo(() => {
        if (proj !== undefined) {
            return proj.bground;
        }
    }, [proj]);

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

    const handleSetProject = (str: string) => {
        const findProj = projList.filter((ele) => {
            if (ele.title == str) {
                return ele;
            }
        });

        if (findProj !== undefined) {
            setProj(findProj[0]);
        } else {
            setProj(projList[0]);
        }
    };

    if (proj && proj !== undefined) {
        return (
            <div className="wrapper">
                <ProjectList listState={listState} setListState={setListState} handleSetProject={handleSetProject} projData={projData} />
                <ProjectDetails projImage={projImage || './GenericBground.jpg'} proj={proj} />
            </div>
        );
    } else {
        return (
            <div style={{ backgroundImage: `url(${projImage})` }} className="wrapper">
                <ProjectList listState={listState} setListState={setListState} handleSetProject={handleSetProject} projData={projData} />
                <LoadingProject />
            </div>
        );
    }
};

export default ProjectsBL;
