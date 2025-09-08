'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token"); // ลบ token
        router.push("/login"); // กลับไปหน้า login
    };
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className='w-full h-[70px] bg-white rounded-xl shadow-lg p-2 pl-[40px] pr-[40px]'>
            <div className='flex items-center justify-between'>
                <div className='w-[195px] h-[55px] overflow-hidden'>
                    <img className='w-full h-full' src="/images/logo.png" />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <div className='pt-[5px]'>
                        <h1 className='text-sm'><span className='font-bold'>ชื่อ: </span>user_01</h1>
                        <h1 className='text-[10px] text-right'><span className='font-bold'>ตำเเหน่ง: </span>-</h1>
                    </div>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#c4a6f7] overflow-hidden border-2 border-green-500' ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={toggleDropdown}>
                           
                                <img className='w-full h-full bg-center' src="/images/null_profile.png" alt="" />
                     
                        </button>
                        {isOpen && (
                            <div className="absolute mt-2 w-[150px] bg-white rounded shadow-lg right-[10px]">
                                <div className='border-b border-gray-300 pb-[10px] pl-[10px] p-2'>
                                    <h1 className='text-[10px]'>ชื่อ: user_01</h1>
                                    <p className='text-[8px]'>ตำเเหน่ง: -</p>
                                </div>
                                <ul>
                                    <button
                                        className="bg-gray-100 w-full hover:text-white p-2 text-[10px] hover:bg-[#683cb4] text-left"
                                        onClick={handleLogout}
                                    >
                                        ออกจากระบบ
                                    </button>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
