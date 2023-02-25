import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ info }) => {
    const { img, name, shortDetail, liveLink, id } = info;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{shortDetail}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline"><a href={liveLink} target='_blank' rel="noreferrer">Live-Link</a></div>
                        {/* <div className="badge badge-outline"><a href={clientRepo} target='_blank' rel="noreferrer">Client-site-repo</a></div>
                        <div className="badge badge-outline"><a href={serverRepo} target='_blank' rel="noreferrer">Server-site-repo</a></div> */}
                        <Link to={`/project/${id}`}><button className='btn glass'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;