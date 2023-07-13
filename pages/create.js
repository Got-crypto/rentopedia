import { Button } from '@/components';
import { useStateContext } from '@/context/StateContext';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Create() {

    const session = useSession()

    const {uploadImage, uploadProperty} = useStateContext()

  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: 0.0,
    currency: '',
    location: '',
    type: '',
    purpose: '',
    bedrooms: 0,
    bathrooms: 0,
    area: '',
    areaUnit: '',
    thumbnail: '',
    amenities: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUploadImage = (imageName) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    
    input.click()
    
    input.addEventListener('change', (inputTarget) => {
        const file = URL.createObjectURL(inputTarget.target.files[0])

        const reader = new FileReader()
        reader.readAsDataURL(inputTarget.target.files[0])
        reader.onload = () => {
          setPropertyData({...propertyData, [imageName]: reader.result})
        }


    })

  }

  const handleAddProperty = async () => {
    const { amenities: ameData, area, areaUnit, bathrooms, bedrooms, contact, currency, description, location, price, thumbnail: base64Thumbnail, title, type, purpose } = propertyData

    const amenities = ameData.split(", ")

    const image = await uploadImage(base64Thumbnail)
    const intImage1 = await uploadImage(propertyData.image1)
    const intImage2 = await uploadImage(propertyData.image2)
    const intImage3 = await uploadImage(propertyData.image3)
    const intImage4 = await uploadImage(propertyData.image4)

    console.log('image', image)

    const email = session?.data?.user?.email

    const data = {
        amenities, area, areaUnit, bathrooms, bedrooms, contact, currency, description, location, price, title, type, purpose,
        thumbnail: image?.url,
        images: [intImage1?.url, intImage2?.url, intImage3?.url, intImage4?.url],
    }
    
    try {
        await uploadProperty({data, email})
    } catch (error) {
        console.log('error', error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Create Property</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="title">
          Title
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="title"
          name="title"
          value={propertyData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="description"
          name="description"
          value={propertyData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="price">
          Price
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          id="price"
          name="price"
          value={propertyData.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="currency">
          Currency
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="currency"
          name="currency"
          value={propertyData.currency}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="location">
          Location
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="location"
          name="location"
          value={propertyData.location}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="type">
          Type
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="type"
          name="type"
          value={propertyData.type}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="type">
          Purpose
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="purpose"
          name="purpose"
          value={propertyData.purpose}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="bedrooms">
          Bedrooms
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={propertyData.bedrooms}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="bathrooms">
          Bathrooms
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={propertyData.bathrooms}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="area">
          Area
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="area"
          name="area"
          value={propertyData.area}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="area">
          Area Unit
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="area unit"
          name="areaUnit"
          value={propertyData.areaUnit}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="thumbnail">
          Thumbnail
        </label>
        <div 
            name="image2"
            onClick={() => handleUploadImage('thumbnail')} 
            className='w-full px-4 py-2 border-dashed border-2 text-center rounded-md focus:border-blue-500'
        >
            {propertyData.thumbnail ? (
                <p className='text-ellipsis'>{propertyData.thumbnail}</p>
            ) : (
                <p className='text-sm font-bold text-gray-400'>upload image</p>
            )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="amenities">
          Amenities
        </label>
        <textarea
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="amenities"
          name="amenities"
          value={propertyData.amenities}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="images">
          Images
        </label>
        <div 
            name="image1"
            onClick={() => handleUploadImage('image1')} 
            className='w-full px-4 py-2 border-dashed border-2 text-center rounded-md focus:border-blue-500'
        >
            {propertyData.image1 ? (
                <p className='text-ellipsis'>{propertyData.image1}</p>
            ) : (
                <p className='text-sm font-bold text-gray-400'>upload image</p>
            )}
        </div>
        <div 
            name="image2"
            onClick={() => handleUploadImage('image2')} 
            className='w-full px-4 py-2 border-dashed border-2 text-center rounded-md focus:border-blue-500'
        >
            {propertyData.image2 ? (
                <p className='text-ellipsis'>{propertyData.image2}</p>
            ) : (
                <p className='text-sm font-bold text-gray-400'>upload image</p>
            )}
        </div>
        <div 
            name="image3"
            onClick={() => handleUploadImage('image3')} 
            className='w-full px-4 py-2 border-dashed border-2 text-center rounded-md focus:border-blue-500'
        >
            {propertyData.image3 ? (
                <p className='text-ellipsis'>{propertyData.image3}</p>
            ) : (
                <p className='text-sm font-bold text-gray-400'>upload image</p>
            )}
        </div>
        <div 
            name="image4"
            onClick={() => handleUploadImage('image4')} 
            className='w-full px-4 py-2 border-dashed border-2 text-center rounded-md focus:border-blue-500'
        >
            {propertyData.image4 ? (
                <p className='text-ellipsis'>{propertyData.image4}</p>
            ) : (
                <p className='text-sm font-bold text-gray-400'>upload image</p>
            )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="contact">
          Contact
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="input"
          accept="image/*"
          id="contact"
          name="contact"
          value={propertyData.contact}
          onChange={handleChange}
        />
      </div>
      <Button
        text={"Create Property"}
        size={"lg"}
        action={handleAddProperty}
        primary={true}
        
      />
    </div>
  );
}
