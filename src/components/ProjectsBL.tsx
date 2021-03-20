import React, { useState, useEffect } from 'react';
// components
import { ProjectList } from './ProjectList';
import { ProjectDetails } from './ProjectDetails';
import LoadingProject from './LoadingProject';
// Data from JSON file
import data from '../data/project_info.json';


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

const ProjectsBL: React.FC = () => {
    const [projData, setProjData] = useState<Array<TechObject>>([]);
    const [projList, setProjList] = useState<Array<ProjDetails>>([]);
    const [listState, setListState] = useState<boolean>(false);
    const [proj, setProj] = useState<ProjDetails>();

    useEffect(() => {
        setProjData([...data]);
        const projectList: Array<ProjDetails> = (data as Array<TechObject>)
            .map((techObj) => {
                return techObj.details.map((projectObj: ProjDetails) => {
                    return projectObj;
                });
            })
            .flat();
        const firstProject = projectList[0];
        setProjList(projectList);
        setProj(firstProject);
    }, []);

    const handleSetProject = (str: string) => {
        const findProj = projList.filter((ele) => {
            if (ele.title == str) {
                return ele;
            }
        });
        if (null !== findProj) {
            setProj(findProj[0]);
        } else {
            setProj(projList[0]);
        }
    };

    if (proj) {
        return (
            <div className="wrapper">
                <ProjectList listState={listState} setListState={setListState} handleSetProject={handleSetProject} projData={projData} />
                <ProjectDetails proj={proj!} />
            </div>
        );
    } else {
        return (
            <div className="wrapper">
                <ProjectList listState={listState} setListState={setListState} handleSetProject={handleSetProject} projData={projData} />
                <LoadingProject />
               
            </div>
        );
    }
};

export default ProjectsBL;
