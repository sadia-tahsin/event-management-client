import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="h-16 mb-5">
                <nav className="py-5 w-full h-full max-w-[1280px] mx-auto flex justify-between items-center px-[20px] font-roboto">
                    <span className="text-2xl font-extrabold">Event <span className="text-blue">360</span></span>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <HiMenu className="text-xl " />
                        </button>
                    </div>
                    <ul className={`lg:flex space-x-5 ${isOpen ? 'flex flex-col mt-5' : 'hidden'}`}>
                        <NavLink to='/' className="font-bold">Home</NavLink> 
                        <NavLink to='/dashboard' className="font-bold">Dashboard</NavLink>
                        <NavLink to='/about' className="font-bold">About</NavLink>
                        <NavLink to='/contact' className="font-bold">Contact</NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
