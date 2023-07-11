import { Afk } from "@/assets";
import Image from "next/image";

export default function Footer(){
    return (
        <div className="w-full h-10 flex flex-row justify-center items-center pb-10">
            <Image
                src={Afk}
                height={60}
                width={60}
                alt="afk"
            />
        </div>
    )
}