"use client";
import { NavLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Transition from './Transition';

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prePath, setPrePath] = useState("/");

    useEffect(() => {
        if (prePath !== path) {
            setisRouting(true);
        }
    }, [path, prePath]);

    useEffect(() => {
        if (isRouting) {
            setPrePath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]);

    return (
        <div  style={{ left: "1%" }} className='absolute z-[50] bottom-1 p-5   w-[50%] md:w-[20%] max-h-[80px] rounded-full flex justify-center  border bg-transparent border-white px-2 '>
            
            {isRouting && <Transition/>}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className='mb-16 pl-4 min-w-[20%]'
                >
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800 bg-pink-800" : "text-white"}`} />
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
