import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import Image from 'next/image'
import CompanyLogoColored from '/public/planelogo.png'
import JoinSkyMilesButton from "./joinSkyMilesButton"
import NavBarPopUp from "./navbarPopup"

export default function NavBar() {
    return (
        <div className="drop-shadow-md bg-white border-b border-gray-300 px-4">
            <div className="mx-auto h-[75px] max-w-screen-xl flex flex-row gap-4">
                <HomeButton></HomeButton>
                <div className="hidden md:flex gap-4">
                    <RegionSelectButton></RegionSelectButton>
                    <NavLinkButton LinkPath="/support" LinkTitle="Support"></NavLinkButton>
                    <NavLinkButton LinkPath="/trips" LinkTitle="Trips"></NavLinkButton>
                    <NavLinkButton LinkPath="/login" LinkTitle="Login"></NavLinkButton>
                    <JoinSkyMilesButton></JoinSkyMilesButton>
                </div>
                <NavBarPopUp/>
            </div>
        </div>
    )
}

function HomeButton(){
    return (
        <Link href="/" className="mr-auto  my-auto flex">
            <Image src={CompanyLogoColored} alt="Flightify logo" width={60} height={29} unoptimized></Image>
            <div className="text-emerald-900 font-bold text-3xl">
                Flightify
            </div>
        </Link>
    )
}

// Change this to use selected region based on choice from popup
function RegionSelectButton() {
    return(
        <button className="flex my-auto px-2">
            <div className="mx-2 font-medium hover:text-emerald-900">
                CAN
            </div>
            <ReactCountryFlag countryCode="CA" svg className="my-auto"></ReactCountryFlag>
        </button>
    )
}

function NavLinkButton({LinkPath, LinkTitle} : {LinkPath : string, LinkTitle : string}) {
    return(
        <Link href={LinkPath} className="my-auto px-2 hover:text-emerald-900 font-medium">{LinkTitle}</Link>
    )
}

