import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>About</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between" href='#projects'>
                                    Projects
                                </a>

                            </li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='w-14 bg-slate-300 rounded-md'>
                        <img className='w-full' src="logo192.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li tabIndex={0}>
                            <a href='#projects'>
                                Projects
                            </a>

                        </li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://drive.google.com/file/d/1qU1rPJ5Egh6QFSCR0AKI_Trxgl3PxQK_/view?usp=sharing' target='_blank' className='btn glass text-white' rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;