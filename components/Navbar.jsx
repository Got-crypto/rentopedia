"use client"

import { BiLogOut, BiMenu, BiX } from 'react-icons/bi';

import { Google } from '@/assets';
import { navMenu } from '@/constants/constants';
import { useStateContext } from '@/context/StateContext';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { Button, Logo, MobileMenu } from ".";

export default function Navbar() {

    const { isOpen, handleOpenDropdownMenu, user } = useStateContext()

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
                    {user ? (
                        <div className='flex flex-row justify-center items-center gap-3 h-10'>
                            <p className='text-white cursor-default'>Hello, {user.username}</p>
                            <Image
                                src={user.picture}
                                alt={`${user.username}'s profile`}
                                height={40}
                                width={40}
                                className="rounded-full border-2 border-white object-cover"
                            />
                            <button onClick={() => signOut()}>
                                <BiLogOut className='text-white cursor-pointer' size={20}/>
                            </button>
                        </div>
                    ) : (
                        <Button
                            icon={Google}
                            action={async () => signIn('google', {callbackUrl: '/'})}
                            primary={false}
                            text={"Connect to Rentopia"}
                            size={"lg"}
                        />
                    )}
                </div>
                <div className='block md:hidden'>
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
            <div className='fixed w-full flex flex-row justify-end'>
                <MobileMenu />
            </div>
        </div>
    )
}