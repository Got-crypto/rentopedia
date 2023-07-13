import Image from "next/image";

const PropertyCard = ({property}) => {
  let url = property.thumbnail
  console.log('url', url)
  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <Image
          src={`${url}`}
          alt="house"
          className="object-cover"
          height={200}
          width={200}
        />
      </div>
    </div>
  )
}

export default PropertyCard