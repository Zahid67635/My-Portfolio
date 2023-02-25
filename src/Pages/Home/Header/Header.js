import React from 'react';
import Typed from "react-typed"

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:w-1/2'>
                        <img src='https://i.ibb.co/SsLPT7r/1670688632669.jpg' className='rounded-lg md:rounded-l-full' alt='' />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold">Hello, I am Zahid Hasan</h1>
                        <Typed
                            className='text-xl font-semibold mt-1'
                            strings={[
                                "A Frontend Developer",
                                "A MERN Stack Developer",
                                "A ReactJS Developer",
                                "A Programmer",
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                        />

                        <p className="py-6">I am a dedicated programmer. Beside MERN development I know C, C++, Python, Data Structure, OOP(Basic). Love to learn new technologies. </p>
                        <a href="#contact"><button className="btn glass text-white font-bold">Hire me</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;