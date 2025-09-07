'use client';
import React, { useState } from 'react';
import PartOne from './components/part01';
import PartTwo from './components/part02';
import PartThree from './components/part03';
import PartFour from './components/part04';
import PartFive from './components/part05';
import useHook from './useHook';

export default function page() {
    const { handleSubmit } = useHook();
    return (
        <div className='min-h-screen bg-[#f0ebf8] pt-[40px]'>
            <form action="\" onSubmit={handleSubmit}>
                <div className='pt-[10px] bg-[#683cb4] mx-auto w-[320px] rounded-lg sm:w-[420] md:w-[520px] lg:w-[620px] xl:w-[960px] '>
                    <div className='bg-white pt-[30px] pb-[30px]'>
                        <h1 className='text-center text-2xl sm:text-3xl'>หน้าเพิ่มประวัติผู้ฝากครรภ์</h1>
                    </div>
                </div>
                {/* กล่อง 1 */}
                <div className='w-[400px] h-full mx-auto pt-[20px] pb-[40px] pr-[40px] pl-[40px] sm:w-[500] md:w-[600px] lg:w-[700px] xl:w-[1000px] xl:pl-[20px] xl:pr-[20px]'>

                    <PartOne />
                    <PartTwo />

                    {/* กล่อง2 */}
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <PartThree/>
                    </div>

                    <div className='bg-white rounded-lg pt-[30px] pb-[30px] mt-[20px] pr-[20px] pl-[20px] shadow-lg xl:pr-[60px] xl:pl-[60px]'>
                       <PartFour/>
                    </div>
                    <PartFive/>
                    <div className='mt-[20px]'>
                        <button type="submit" className='w-full bg-[#68449c] hover:bg-[#6337a0] p-2 text-white text-md rounded-sm'>บันทึกข้อมูล</button>
                    </div>
                </div>
            </form >
            {/* {vip.map((vip) => (
                <div key={vip.id}>{vip.vip_name}</div>
             ))} */}
        </div >
    )
}