import { memo } from 'react';
import navInmage from "../assets/images/NavLogo.png"
import { Link } from 'react-router';
const Navbar = () => {
    const navMenu = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/services",
            name: "Services"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/contact",
            name: "Contact"
        },
    ]
    return (
        <div className='fixed z-50 w-[100%]'>
            <div className='md:w-[470px] bg-transparent rounded-[10px] px-5 flex items-center justify-between py-1 mx-auto border'>
                {/* Logo */}
                <div>
                    <img className='w-[54px] h-[54px]' src={navInmage} alt="" />
                </div>
                {/* Menu */}
                <div>
                    <ul className='flex gap-5'>
                        {
                            navMenu.map((item, idx) => (<Link className='text-[#CBB26A]' key={idx}>{item.name}</Link>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);