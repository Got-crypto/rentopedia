import { Button } from '@/components';
import { useState } from 'react';

export default function Create() {
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: 0.0,
    currency: '',
    location: '',
    type: '',
    bedrooms: 0,
    bathrooms: 0,
    area: '',
    thumbnail: '',
    amenities: ["",
    "",
    "",
    "",],
    images: [
        "",
        "",
        "",
        "",
    ],
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

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
        <label className="block mb-2 text-gray-700" htmlFor="thumbnail">
          Thumbnail
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="thumbnail"
          name="thumbnail"
          value={propertyData.thumbnail}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="amenities">
          Amenities
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="amenities"
          name="amenities"
          value={propertyData.amenities[0]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="amenities"
          name="amenities"
          value={propertyData.amenities[1]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="amenities"
          name="amenities"
          value={propertyData.amenities[2]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="amenities"
          name="amenities"
          value={propertyData.amenities[3]}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="images">
          Images
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="input"
          accept="image/*"
          id="images"
          name="images"
          value={propertyData.images[0]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="input"
          accept="image/*"
          id="images"
          name="images"
          value={propertyData.images[1]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="input"
          accept="image/*"
          id="images"
          name="images"
          value={propertyData.images[2]}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="input"
          accept="image/*"
          id="images"
          name="images"
          value={propertyData.images[3]}
          onChange={handleChange}
        />
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
        action={()=>{}}
        primary={true}
        
      />
    </div>
  );
}
