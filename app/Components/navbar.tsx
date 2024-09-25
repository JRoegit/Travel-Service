import Link from "next/link"

export default function NavBar() {
    return (
        <div className="drop-shadow-md bg-white border-b border-gray-300 ">
            <div className="mx-auto  h-[75px] max-w-screen-xl flex">
                <div className="mr-auto ml-4 my-auto">
                    Logo
                </div>
                <NavLinkButton LinkPath="/login" LinkTitle="Login"></NavLinkButton>
                <NavLinkButton LinkPath="/" LinkTitle="Trips"></NavLinkButton>
                <NavLinkButton LinkPath="/" LinkTitle="Support"></NavLinkButton>

            </div>
        </div>
    )
}


function NavLinkButton({LinkPath, LinkTitle} : {LinkPath:string, LinkTitle : string}) {
    return(
        <Link href={LinkPath} className="mx-4 my-auto px-2 hover:text-emerald-900 font-medium">{LinkTitle}</Link>
    )
}