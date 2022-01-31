import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <header className="flex flex-col items-center bg-gray-800 text-white p-6">
            <div className="text-center">
                <h1 className="font-light text-2xl">Covid - 19 Statistics</h1>
                <p className="font-thin">Stay Safe, Covid Still Alive</p>
            </div>
            {/* <nav className="text-right">
                <Link className="m-10 hover:text-sky-400" to="/">Global</Link>
                <Link className="m-10 hover:text-sky-400" to="/test">Indonesia</Link>
            </nav> */}
        </header>
    )
}

export default Navbar;