import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='my-10 md:mx-12' id='projects'>
            <h1 className='text-4xl text-center font-bold mb-8'>My Projects that I like to share</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    projects.map(p => <Project info={p}></Project>)
                }

            </div>
            <div className='text-center my-3'>
                <button className='btn glass font-bold text-white'>See all</button>
            </div>
        </div>
    );
};

export default Projects;