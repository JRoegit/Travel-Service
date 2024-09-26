import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import Image from 'next/image'
import CompanyLogoColored from '/public/planelogo.png'

export default function NavBar() {
    return (
        <div className="drop-shadow-md bg-white border-b border-gray-300 ">
            <div className="mx-auto  h-[75px] max-w-screen-xl flex">
                <HomeButton></HomeButton>
                <RegionSelectButton></RegionSelectButton>
                <NavLinkButton LinkPath="/support" LinkTitle="Support"></NavLinkButton>
                <NavLinkButton LinkPath="/trips" LinkTitle="Trips"></NavLinkButton>
                <NavLinkButton LinkPath="/login" LinkTitle="Login"></NavLinkButton>
                <JoinSkyMilesButton LinkPath="/skymiles" LinkTitle="Join SkyMiles"></JoinSkyMilesButton>
            </div>
        </div>
    )
}

function HomeButton(){
    return (
        <Link href="/" className="mr-auto ml-4 my-auto flex">
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
        <button className="flex mx-4 my-auto px-2">
            <div className="mx-2 font-medium hover:text-emerald-900">
                CAN
            </div>
            <ReactCountryFlag countryCode="CA" svg className="my-auto"></ReactCountryFlag>
        </button>
    )
}

function NavLinkButton({LinkPath, LinkTitle} : {LinkPath : string, LinkTitle : string}) {
    return(
        <Link href={LinkPath} className="mx-4 my-auto px-2 hover:text-emerald-900 font-medium">{LinkTitle}</Link>
    )
}

function JoinSkyMilesButton({LinkPath,LinkTitle} : {LinkPath : string, LinkTitle : string}){
    return(
        <Link href={LinkPath} className="mx-4 my-auto px-4 py-2 bg-emerald-900 hover:bg-emerald-800 font-medium text-white rounded-md">{LinkTitle}</Link>
    )
}