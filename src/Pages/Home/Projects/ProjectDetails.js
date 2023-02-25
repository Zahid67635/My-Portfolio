import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';

const ProjectDetails = () => {
    const projects = useLoaderData()
    const url = window.location.href;
    const pid = url[url.length - 1];
    return (
        <div>
            {
                projects.map(p => p.id === pid && <ProjectInfo info={p}></ProjectInfo>)
            }
        </div>
    );
};

export default ProjectDetails;