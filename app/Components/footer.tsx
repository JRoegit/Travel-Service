import Image from "next/image"
import CompanyLogoWhite from '/public/planelogowhite.png'
import Link from "next/link"

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


export default function Footer() {
    return(
        <div className="flex flex-col">
            <div className="bg-zinc-800">
                <FooterTop></FooterTop>
            </div>
            <div className="bg-black">
                <FooterBottom></FooterBottom>
            </div>
        </div>
    )
}


function FooterTop(){
    return (
        <div className="flex flex-col text-white max-w-screen-xl sm:mx-auto p-4 gap-4">
            <HomeButton></HomeButton>
            <div className="flex flex-col sm:flex-row sm:mx-0 gap-8 md:gap-0">
                    <div className="flex flex-col flex-auto sm:w-1/3 gap-2 text-sm">
                            <div className="font-bold text-lg">Company</div>
                            <Link href="/">About Flightify</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Official Languages</Link>
                    </div>
                    <div className="flex flex-col flex-auto sm:w-1/3 gap-2 text-sm">
                            <div className="font-bold text-lg">Support</div>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">Help Center</Link>
                            <Link href="/">Manage My Bookings</Link>
                    </div>
                    <div className="flex flex-col flex-auto sm:w-1/3 gap-2 text-sm">
                            <div className="font-bold text-lg">SkyMiles</div>
                            <Link href="/">Join SkyMiles</Link>
                            <Link href="/">My Points</Link>
                    </div>
                    
            </div>
        </div>
    )
}

function HomeButton(){
    return (
        <Link href="/" className="mr-auto my-auto flex">
            <Image src={CompanyLogoWhite} alt="Flightify logo" width={60} height={29} unoptimized></Image>
            <div className="font-bold text-3xl">
                Flightify
            </div>
        </Link>
    )

}

function FooterBottom(){
    return (
        <div className="my-2 flex flex-col mx-auto text-white max-w-screen-xl text-xs gap-1">
            <div className=" mx-auto">©2024 Flightify</div>
            <div className="mx-auto flex flex-row gap-2">
                <a href="https://www.twitter.com">
                    <FaSquareXTwitter className="size-6"/>
                </a>
                <a href="https://www.facebook.com">
                    <FaFacebookSquare className="size-6"/>
                </a>
                <a href="https://www.instagram.com/">
                    <FaSquareInstagram className="size-6"/>
                </a>
            </div>
            <div className="mx-auto">Terms of use | Privacy Policy | General Conditions of Carriage & Tariffs | Cookies Policy</div>
        </div>
    )
}