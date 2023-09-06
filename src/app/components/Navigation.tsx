import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../resources/logo.png";
import name from "../../resources/name.png";

const Navigation = () => {
    return (
        <nav className="w-full h-14 flex justify-between items-center">
            <div className="flex items-center">
                <Image
                    src={logo}
                    alt="bee and flower logo"
                    width={50}
                    className="mx-2 py-4"
                />
                <Link href="/">
                    <Image
                        src={name}
                        alt="Polidex website name"
                        width={200}
                        className="p-5"
                    />
                </Link>
                <div className="flex items-center">
                    <Link
                        href="/states"
                        className="mx-10 text-xl text-white font-extralight tracking-widest"
                    >
                        States
                    </Link>
                    <Link
                        href="/plants"
                        className="mx-10 text-xl text-white font-extralight tracking-widest"
                    >
                        Plants
                    </Link>
                </div>
            </div>
            <div>
                <input type="search" className="mr-10 h-8 w-70 rounded-lg italic text-lg font-light pl-5" placeholder="Search..."/>
            </div>
        </nav>
    );
};

export default Navigation;
