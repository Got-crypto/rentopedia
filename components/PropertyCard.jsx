import Image from "next/image";

const PropertyCard = ({property}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <Image
          src={property.thumbnail}
          alt="house"
          className="object-cover h-72 w-52"
          height={200}
          width={200}
        />
      </div>
    </div>
  )
}

export default PropertyCard