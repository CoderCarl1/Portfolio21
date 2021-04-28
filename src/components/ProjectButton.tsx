import React, { useRef, useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
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
    id: number;
    title: string;
    handleKeySelect: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    handleProjSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
    proj: ProjDetails;
    handleFocusEvent: (id: number) => void;
    focusedId: number | null;
    handleUnFocusEvent: () => void;
}

const ProjectButton: React.FC<Props> = ({ handleUnFocusEvent, focusedId, handleFocusEvent, proj, id, title, handleKeySelect, handleProjSelect }) => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (ref.current !== null) {
            if (document.hasFocus() && ref.current.contains(document.activeElement)) {
                // handleFocusEvent(id);
                if (proj.id === focusedId) {
                    // ref.current.focus();
                    console.log('focused');
                }
            }
        }
    }, [focusedId]);

    return (
        <button
            id={id.toString()}
            value={title}
            tabIndex={-0}
            ref={ref}
            onFocus={() => handleFocusEvent(id)}
            onBlur={() => handleUnFocusEvent()}
            onKeyDown={(e) => handleKeySelect(e)}
            onClick={(e) => handleProjSelect(e)}
            style={
                focusedId == id
                    ? {
                        borderRadius: '50px',
                        background: 'rgba(171, 51, 226, 0.582)',
                        boxShadow: '2px 2px 6px #bebebe, -2px -2px 6px #ffffff'
                    }
                    : {}
            }
        >
            {title}
        </button>
    );
};

export default ProjectButton;
