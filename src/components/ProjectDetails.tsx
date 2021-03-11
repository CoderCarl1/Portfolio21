import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.article`
    /* border: 1px solid black; */
    height: 50vh;
    width: 100%;
    background: white;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        background: rgba(223, 27, 27, 0.7);
        li {
            margin: 0 1rem;
        }
    }
    .proj-links {
        width: 100%;
        display: flex;
        justify-content: space-around;
        a + a {
            margin-left: 2rem;
        }
        a {
            margin: 1rem 0;
            border: 1px solid black;
            padding: 0.5rem;
            display: block;
        }
    }
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
                <div className="proj-links">
                    <a href={proj.links.github}>Github</a>
                    <a href={proj.links.site}>Deployed Site</a>
                </div>
            );
        } else {
            return (
                <div className="proj-links">
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
            <ul>
                {proj.tech.map((tech, index) => (
                    <li key={index.toString()}>{tech}</li>
                ))}
            </ul>
        </StyledProject>
    );
};

// ProjectDetails.defaultProps = {
//     project: 'unselected'
// };
