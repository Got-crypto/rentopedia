import axios from "axios";
import { signIn, useSession } from 'next-auth/react';

const { createContext, useContext, useState, useEffect } = require("react");

const AppUIUXContext = createContext(null)

const isProduction = process.env.NODE_ENV === 'production'

const serverUrl = isProduction ? process.env.SERVER_URL : 'http://localhost:3000'

export const StateContext = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [propertiesForRent, setPropertiesForRent] = useState()
    const [propertiesForSale, setPropertiesForSale] = useState()

    const {data} = useSession()

    const handleModalOpenClose = () => setModalOpen(current => !current)

    const uploadImage = async (image) => {
        try {
            const response = await axios.post(`${serverUrl}/api/upload-images`, {path: image})
            return response?.data?.result
        } catch (error) {
            console.log('error', error)
        }

    }

    function resizeImage(file, maxWidth, maxHeight, quality) {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = URL.createObjectURL(file);
      
          image.onload = () => {
            let width = image.width;
            let height = image.height;
      
            if (width > maxWidth || height > maxHeight) {
              const aspectRatio = width / height;
              if (width > height) {
                width = maxWidth;
                height = Math.floor(width / aspectRatio);
              } else {
                height = maxHeight;
                width = Math.floor(height * aspectRatio);
              }
            }
      
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
      
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);
      
            canvas.toBlob(
              (blob) => {
                resolve(new File([blob], file.name, { type: file.type }));
              },
              file.type,
              quality
            );
          };
      
          image.onerror = () => {
            reject(new Error('Failed to load the image'));
          };
        });
      }
      

    const uploadProperty = async (data) => {
        try {
            await axios.post(`${serverUrl}/api/create`, data)
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserDetails = () => {
        return data?.user
    }

    const registerUser = async (credentials) => {
        const response = await axios.post(`${serverUrl}/api/register`, credentials)

        return response
    }

    const loginUser = async (credentials) => {
        const { email, password } = credentials

        try {
            const user = await signIn("credentials", {
                email, password, redirect: false
            })

            console.log('user', user)

            handleModalOpenClose()
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleOpenDropdownMenu = () => setIsOpen((state) => !state)

    const handleGetProperties = async () => {
        try {
            const rentResponse = await axios.get(`${serverUrl}/api/properties/for-rent`)
            const saleResponse = await axios.get(`${serverUrl}/api/properties/for-sale`)

            const propertiesForSale = saleResponse?.data
            const propertiesForRent = rentResponse?.data
            
            return { propertiesForRent, propertiesForSale }
        } catch (error) {
            console.log('error', error)
            return { propertiesForRent: null, propertiesForSale: null }
        }

    }

    useEffect(() => {
        const getUser = () => {
            const response = getUserDetails()
            
            const userData = response ? response : null

            const userCredentials = {
                username: userData?.name,
                email: userData?.email,
                picture: userData?.image
            }

            setUser(userData ? userCredentials : null)
        }

        getUser()
    }, [data])

    useEffect(()=> {
        const getProperties = async () => {
            const { propertiesForRent, propertiesForSale } = await handleGetProperties()

            setPropertiesForRent(propertiesForRent)
            setPropertiesForSale(propertiesForSale)
        }

        getProperties()
    }, [data])

    return <AppUIUXContext.Provider value={{
        handleOpenDropdownMenu,
        isOpen,
        user,
        registerUser,
        handleModalOpenClose,
        modalOpen,
        loginUser,
        propertiesForRent,
        propertiesForSale,
        uploadImage,
        uploadProperty,
        resizeImage
    }}>
        {children}
    </AppUIUXContext.Provider>
}

export const useStateContext = () => useContext(AppUIUXContext)