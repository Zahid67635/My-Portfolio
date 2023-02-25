import React from 'react';

const ProjectInfo = ({ info }) => {
    const { images, name } = info;
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>{name}</h2>
            <div className='w-3/4 mx-auto my-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        images.map(i => <img src={i} alt='' />)
                    }
                </div>
                <div className='my-10'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel, facere soluta ipsa corrupti dicta iste omnis, illo aut nostrum earum quidem vitae harum ipsum vero incidunt, dolorem sequi officia.
                        Sapiente velit provident, corporis sit, ex eos quod eveniet, itaque sequi incidunt quae. Saepe neque quidem unde quo optio, dolor natus possimus nulla eaque nostrum, temporibus amet iure itaque pariatur.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ProjectInfo;