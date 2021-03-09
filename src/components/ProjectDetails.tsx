import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.article`
    /* border: 1px solid black; */
    height: 50vh;
    width: 100%;
    background: white;
`;

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
                <div>
                    <a href={proj.links.github}>Github</a>
                    <a href={proj.links.site}>Deployed Site</a>;
                </div>
            );
        } else {
            return (
                <div>
                    <a href={proj.links.github}>Github</a>
                </div>
            );
        }
    };

    return (
        <StyledProject className="project-details">
            <h3>Project Title:{proj.title}</h3>
            <p>{proj.description}</p>
            {projLinks()}
        </StyledProject>
    );
};

// ProjectDetails.defaultProps = {
//     project: 'unselected'
// };
