import Image from "next/image";

const PropertyCard = ({property}) => {
  console.log('property.thumbnail', property.thumbnail)
  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div>
        <Image
          src={property.thumbnail}
          alt="house"
          className="object-cover"
          height={350}
          width={350}
        />
      </div>
    </div>
  )
}

export default PropertyCard