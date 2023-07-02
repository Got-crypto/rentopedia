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
        password: '',
        picture: ''
    })
    const [validation, setValidation] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [selectedFile, setSelectedFile] = useState()

    const handleImageUpload = () => {
        let input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', "image/jpeg, image/png")
        input.click()
        
        input.addEventListener('change', (e) => {
            const selectedFile = e.target.files[0]
            const url = URL.createObjectURL(selectedFile)

            setSelectedFile(url)
            setInputs({...inputs, picture: url})
        })
    }
    

    const { handleModalOpenClose, modalOpen, registerUser, loginUser } = useStateContext()

    const handleSignUp = async () => {
        if(inputs.email === '' || inputs.password === '' || inputs.username === '') {
            return setValidation('Please fill all required fields')
        }
        setValidation()

        try {
            setIsLoading(true)

            await registerUser(inputs)

            handleModalOpenClose()
        } catch (error) {
            console.log('error', error)
        } finally {
            setIsLoading(false)
        }
    }

    const login = async () => {
        setIsLoading(true)
        await loginUser(inputs)
        setIsLoading(false)
        
    }

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
                                onChange={({target}) => setInputs({...inputs, username: target.value})}
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
                            onChange={({target}) => setInputs({...inputs, email: target.value})}
                            placeholder="Email Address*"
                            type="email"
                        />
                    </div>
                    <div>
                        <Input
                            name="password"
                            value={inputs.password}
                            onChange={({target}) => setInputs({...inputs, password: target.value})}
                            placeholder="Password*"
                            type="password"
                        />
                    </div>
                    <AnimatePresence>
                        {isSignUp && (
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{delay: .5}}
                            className="w-full flex flex-col justify-center">
                                {selectedFile ? (
                                    <div onClick={handleImageUpload} className="h-auto w-full cursor-pointer flex flex-col justify-center items-center">
                                        <Image src={selectedFile} alt="selected profile" height={64} width={64} className="border-2 border-white rounded-full" />
                                        <p className="text-sm mt-2 text-white">Click image to change</p>
                                    </div>
                                ) : (
                                    <div onClick={handleImageUpload} className="h-16 w-full cursor-pointer border-2 border-dotted border-white rounded-full flex flex-col justify-center items-center">
                                    <p className="text-sm font-bold text-white">Click to upload image</p>
                                </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {!isSignUp && (
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{delay: .5}}
                            className="w-full flex flex-col justify-center">
                                <Button
                                    action={login}
                                    size={'lg'}
                                    disabled={isLoading}
                                    text={isLoading ? "Logging in..." : "Sign In"}
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
                                    disabled={isLoading}
                                    action={handleSignUp}
                                    size={'lg'}
                                    text={isLoading ? 'Loading...' : 'Sign Up'}
                                    primary={true}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {validation && <p className="text-red-500">{validation}</p>
}
                    <div className="w-full flex flex-row justify-center">
                        <p className="text-secondary mt-3">Have an account? <span onClick={() => setIsSignUp(current => !current)} className="hover:text-primary cursor-pointer">Sign in</span></p>
                    </div>
                    <div className="w-full text-sm text-white flex flex-col justify-center items-center">
                        <div className="my-3">
                            <Image src={Afk} alt='afk' height={50} width={50} />
                        </div>
                        &copy;copyright 2023
                    </div>
                </div>
            </div>
        </div>
    )
}