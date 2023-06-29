import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

import { Afk } from "@/assets";
import { useStateContext } from "@/context/StateContext";
import { Button, Input, Logo } from ".";

export default function AuthModal() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [isSignUp, setIsSignUp] = useState(true)

    const { handleModalOpenClose, modalOpen } = useStateContext()


    return (
        <div className={`${modalOpen ? 'block' : 'hidden'} fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center`}>
            <div className="absolute h-full w-full bg-black opacity-30" />
            <div className="h-auto absolute bg-[#232323] w-[30rem] rounded-md flex flex-col justify-start items-center">
                <div className="w-80 flex flex-row justify-between items-center h-auto py-2">
                    <Logo />
                    <button onClick={handleModalOpenClose}>
                        <AiFillCloseCircle color="#fff" size={30}/>
                    </button>
                </div>
                <div className="w-80 flex flex-col justify-center gap-6">
                    <AnimatePresence>
                        {
                            isSignUp &&
                            <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{
                                delay: isSignUp && .5
                            }}
                            >
                                <Input
                                name="username"
                                value={inputs.username}
                                onChange={(e) => setInputs({...inputs, username: e.value})}
                                placeholder="Username*"
                                type="text"
                                />
                            </motion.div>
                        }
                    </AnimatePresence>
                    <div>
                        <Input
                            name="email"
                            value={inputs.email}
                            onChange={(e) => setInputs({...inputs, email: e.value})}
                            placeholder="Email Address*"
                            type="email"
                        />
                    </div>
                    <div>
                        <Input
                            name="password"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.value})}
                            placeholder="Password*"
                            type="password"
                        />
                    </div>
                    <AnimatePresence>
                        {!isSignUp && (
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{delay: .5}}
                            className="w-full flex flex-col justify-center">
                                <Button
                                    action={()=>{}}
                                    size={'lg'}
                                    text={"Sign In"}
                                    primary={false}
                                 />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isSignUp && (
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{delay: .5}}
                            className="w-full flex flex-col justify-center">
                                <Button
                                    action={()=>{}}
                                    size={'lg'}
                                    text={"Sign Up"}
                                    primary={true}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="w-full flex flex-row justify-center">
                        <p className="text-secondary mt-10">Have an account? <span onClick={() => setIsSignUp(current => !current)} className="hover:text-primary cursor-pointer">Sign in</span></p>
                    </div>
                    <div className="w-full text-sm text-white flex flex-col justify-center items-center">
                        <div className="my-5">
                            <Image src={Afk} alt='afk' height={50} width={50} />
                        </div>
                        &copy;copyright 2023
                    </div>
                </div>
            </div>
        </div>
    )
}