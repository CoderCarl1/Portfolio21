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
    bground?: string;
}
interface Props {
    proj: ProjDetails;
    projImage: string;
}

export const ProjectDetails: React.FC<Props> = ({ proj, projImage }) => {
    const projLinks = () => {
        if (Object.values(proj.links).length > 1) {
            return (
                <div className="proj-links">
                    <div className="proj-link-wrapper">
                        <a target="_blank" rel="noreferrer" href={proj.links.github}>
                            <Githubsvg />
                            <p>Github Repo</p>
                        </a>
                    </div>
                    <div className="proj-link-wrapper">
                        <a target="_blank" rel="noreferrer" href={proj.links.site}>
                            {' '}
                            <img src="./WebsiteIcon.svg" title="Current Deployed site" alt="Link to currently deployed site" />
                            <p>Deployed Site</p>
                        </a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="proj-links">
                    <div className="proj-link-wrapper">
                        <a target="_blank" rel="noreferrer" href={proj.links.github}>
                            <Githubsvg />
                            <p>Github Repo</p>
                        </a>
                    </div>
                    <div className="proj-link-wrapper">
                        <img src="./NotDeployedIcon.svg" alt="No Current Deployed site" />
                        <p>Not Currently Deployed</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <StyledProject className="project-details" style={{ backgroundImage: `url(${projImage})` }}>
            <div className="proj-wrapper">
                <h3>{proj.title}</h3>
                <fieldset>
                    <legend>Description</legend>
                    <p className="proj-description">{proj.description}</p>
                </fieldset>

                <fieldset className="tech_used">
                    <legend>Tech Used</legend>
                    <ul className="tech-used">
                        {proj.tech.map((tech, index) => (
                            <li key={index.toString()}>{tech}</li>
                        ))}
                    </ul>
                </fieldset>
                {projLinks()}
            </div>
        </StyledProject>
    );
};
