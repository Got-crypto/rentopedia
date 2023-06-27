import { BiMenu, BiX } from 'react-icons/bi';

import { navMenu } from '@/constants/constants';
import { useStateContext } from '@/context/StateContext';
import { Button, Logo, MobileMenu } from ".";

export default function Navbar() {

    const { isOpen, handleOpenDropdownMenu } = useStateContext()

    return (
        <div className="fixed top-0 w-full h-16 bg-primary border-b-1 border-white shadow-sm shadow-black">
            <div className="h-full w-full flex flex-row justify-between items-center px-10">
                <div>
                    <Logo />
                </div>
                <div className="w-[30rem]">
                    <ul className="md:flex hidden flex-row justify-evenly text-white">
                        {navMenu.map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Button action={()=>{}} primary={false} text={"Connect to Rentopia"} size={"lg"} />
                </div>
                <div>
                    {isOpen ? (
                        <button className="block md:hidden" onClick={handleOpenDropdownMenu}>
                            <BiX color='#fff' size={40}  />
                        </button>
                    ) : (
                        <button className="block md:hidden" onClick={handleOpenDropdownMenu}>
                            <BiMenu color='#fff' size={40}  />
                        </button>
                    ) }
                </div>
            </div>
            <div className='fixed md:hidden w-full flex flex-row justify-end'>
                <MobileMenu />
            </div>
        </div>
    )
}