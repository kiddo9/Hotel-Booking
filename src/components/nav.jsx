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
        <div className="absolute z-10 flex justify-between w-screen py-4 xl:px-44">

            <div className='bg-[#E0B973] w-24 flex flex-col rounded-b-3xl leading-tight py-4  relative -top-4 ml-4 sm:py-7 md:w-52' >
                <p className='text-center text-[#14274A] font-bold font-serif sm:text-xl md:text-4xl'>LUXURY</p>
                <span className='text-center text-[#14274A] font-thin text-[10px] leading-tight font-sans md:text-[20px]'>HOTEL</span>
            </div>
            <div>
                {!isMenuOpen ? (
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 sm:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                ) : (
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
                { isMenuOpen && (
                    <ul className="fixed left-0 flex flex-col w-screen h-screen gap-4 pl-5 bg-[#E0B973] pt-7">
                        <li className='py-3'><Link to="/" onClick={CloseMenu}>Home</Link ></li>
                        <li className='py-3'><Link to="/facilities" onClick={CloseMenu}>Facilities</Link></li>
                        <li className='py-3'><Link to="/room" onClick={CloseMenu}>Room</Link></li>
                        {/* <li className='py-3'><Link to="/contact" onClick={CloseMenu}>Contact us</Link></li> */}
                    </ul>
                )}

                <ul className="hidden text-white sm:flex sm:-ml-4 sm:gap-4 sm:text-xl md:text-2xl sm:pr-10">
                    <li className='py-3'><Link to="/">Home</Link></li>
                    <li className='py-3'><Link to="/facilities">Facilities</Link></li>
                    <li className='py-3'><Link to="/room">Rooms</Link></li>
                    {/* <li className='py-3'><Link to="/contact">Contact us</Link></li> */}
                </ul>
            </div>

        </div>

        <Outlet />
        </>
    );
}

export default Nav;
