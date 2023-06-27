import { LogoWhite } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href='/'>
            <div className="flex flex-row justify-center gap-2 items-center">
            <Image src={LogoWhite} alt="logo" className="w-10" />
            <div className="text-secondary font-bold text-xl">
                Rentopedia
            </div>
        </div>
        </Link>
    )
}