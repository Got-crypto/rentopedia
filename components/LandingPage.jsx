import { Model } from "@/assets";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="h-[calc(100vh-4rem)] w-full mt-16">
            <div className="h-full w-full">
                <div className="w-fit h-auto ">
                    <Image src={Model} alt='' height={800} width={800} />
                </div>
            </div>
        </div>
    )
}