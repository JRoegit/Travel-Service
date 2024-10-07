'use client'

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import JoinSkyMilesButton from "./joinSkyMilesButton";


export default function NavBarPopUp(){
    let [visible, setVisible] = useState(false)

    return (
        <div onClick={() => setVisible(!visible)} className="relative my-auto md:hidden cursor-pointer">
            <GiHamburgerMenu className="size-6"/>
            <div className={"z-50 absolute top-10 right-0 bg-white shadow-md border-2 border-gray-100 w-96 rounded-md p-2 " + (visible ? ' flex flex-col gap-2': ' hidden')}>
                <Link href="support" className="hover:bg-gray-50 p-2 rounded-md select-none">Support</Link>
                <Link href="support" className="hover:bg-gray-50 p-2 rounded-md select-none">Trips</Link>
                <div className="w-full border-b-2 border-gray-200 mx-auto"></div>
                <Link href="support" className="hover:bg-gray-50 p-2 rounded-md select-none">Login</Link>
                <JoinSkyMilesButton/>
            </div>
        </div>
    )
}