import Link from "next/link"
import Image from 'next/image';
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
        {/* left */}
        <Link href='/' className="flex items-center">
            <Image
            src='/logo.png'
            alt='TrendLama'
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
            /> 
            <p className=" hidden md:block text-md font-medium">TRENDCORO</p>
            
        </Link>
        {/* right */}
        <div className=" flex iterms-center gap-6 text-gray-600 ">
            <SearchBar/>
        <Link href="/" >
            < Home className=" "/>
        </Link>
        <Bell className="" />
        <ShoppingCart className=""/>
        <Link href="/login">Sign Up</Link>
        </div>
    </nav>
  )
}

export default Navbar