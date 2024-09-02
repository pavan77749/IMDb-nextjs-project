import Link from "next/link";
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link href={"/"} className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 p-1 rounded-lg">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
        <div className=" flex gap-4">
            <DarkMode />
            <MenuItem title='home' address='/' Icon={AiFillHome}/>
            <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
    </div>
  )
}
