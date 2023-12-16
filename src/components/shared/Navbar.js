"use client"

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                
                    <Link  className="btn btn-ghost text-xl" href="/">BTST</Link>
                
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/"><button className="btn btn-accent text-white">Home</button></Link>
                    <Link href="/posts"><button className="btn btn-accent text-white ml-3">Blog</button></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;