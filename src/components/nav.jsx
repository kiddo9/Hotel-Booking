import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';// Import Link from React Router


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const CloseMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
        <div className="absolute z-10 flex justify-between w-screen py-4">
            <div>
                {!isMenuOpen ? (
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500 sm:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                ) : (
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
                { isMenuOpen && (
                    <ul className="fixed flex flex-col w-screen h-screen gap-4 pl-5 bg-amber-500 pt-7">
                        <li className='py-3'><Link to="/" onClick={CloseMenu}>Home</Link ></li>
                        <li className='py-3'><Link to="/rooms" onClick={CloseMenu}>Rooms</Link></li>
                        <li className='py-3'><Link to="/about" onClick={CloseMenu}>About</Link></li>
                        <li className='py-3'><Link to="/contact" onClick={CloseMenu}>Contact us</Link></li>
                    </ul>
                )}

                <ul className="hidden text-amber-500 sm:flex sm:ml-6 sm:gap-4 sm:text-xl md:text-2xl">
                    <li className='py-3'><Link to="/">Home</Link></li>
                    <li className='py-3'><Link to="/rooms">Rooms</Link></li>
                    <li className='py-3'><Link to="/about">About</Link></li>
                    <li className='py-3'><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>

            <div className='mr-2'>
                <button className="bg-amber-500 py-2 px-1 rounded-md md:py-4 md:px-4 xl:-ml-[20%]"><Link to="">Book A Room</Link></button>
            </div>
        </div>

        <Outlet />
        </>
    );
}

export default Nav;
