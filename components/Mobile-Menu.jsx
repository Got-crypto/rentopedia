import { useStateContext } from "@/context/StateContext";
import { motion } from "framer-motion";
import Image from "next/image";

import { BiLink, BiLogOut } from "react-icons/bi";

import { navMenu } from "@/constants/constants";
import { Button } from ".";

export default function MobileMenu() {

    const { isOpen, user} = useStateContext();

    return (
        <motion.div initial={{x: 1000}} animate={{
            x: isOpen ? 0 : 1000
        }} transition={{
            duration: .5
        }} className="h-auto w-fit bg-primary flex flex-col justify-center items-center rounded">
            <div className="h-auto w-full flex flex-row px-12 justify-end items-center">
                {user ? (
                    <div className="flex flex-col justify-end items-end">
                        <Image height={50} width={50} src={user?.picture} alt='profile' className="rounded-full border-2 border-white" />
                        <p className="text-secondary font-bold mt-2 text-xl">{user?.username}</p>
                        <p className="text-secondary font-light">{user?.email}</p>
                    </div>
                ) : (
                    <div className="mt-5">
                        <Button size={'lg'} action={()=>{}} text={"Connect to Rentopedia"} primary={false} />
                    </div>
                )
}
            </div>
            <div className="mt-4 w-full px-12 pb-8">
                <ul>
                    {navMenu.map((item, index) => (
                        <li className="py-2 cursor-pointer flex flex-row border-b border-secondary justify-between items-center" key={`${item}-${index}`}>
                            <BiLink color="#fff" />
                            <p className="text-secondary">{item}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 w-full flex flex-row justify-end">
                <button>
                        <BiLogOut color="#fff" size={40}/>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}