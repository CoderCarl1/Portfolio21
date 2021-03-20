import React from 'react';
import { StyledProject } from './ProjectStyles';
import Githubsvg from './GithubCatopus';

interface ProjDetails {
    id: number;
    title: string;
    description: string;
    tech: string[];
    links: {
        github: string;
        site?: string;
    };
}
interface Props {
    proj: ProjDetails;
}

export const ProjectDetails: React.FC<Props> = ({ proj }) => {
    const projLinks = () => {
        if (Object.values(proj.links).length > 1) {
            return (
                <div className="proj-links">
                    <a target="_blank" rel="noreferrer" title="Current Deployed site" href={proj.links.github}>
                        <Githubsvg />
                    </a>

                    <a target="_blank" rel="noreferrer" href={proj.links.site}>
                        {' '}
                        <img src="./WebsiteIcon.svg" title="No Current Deployed site" alt="advice that there is no deployed site" />
                    </a>
                </div>
            );
        } else {
            return (
                <div className="proj-links">
                    <a target="_blank" rel="noreferrer" href={proj.links.github}>
                        <Githubsvg />
                    </a>
                    <img src="./NotDeployedIcon.svg" alt="No Current Deployed site" />
                </div>
            );
        }
    };

    return (
        <StyledProject className="project-details">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <fieldset>
                <legend>Tech Used</legend>
                <ul>
                    {proj.tech.map((tech, index) => (
                        <li key={index.toString()}>{tech}</li>
                    ))}
                </ul>
            </fieldset>
            {projLinks()}
        </StyledProject>
    );
};
