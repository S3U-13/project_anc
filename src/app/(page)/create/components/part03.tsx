import React from 'react'
import useHook from '../useHook';

export default function PartThree() {
    const { field, handleChange, BE, BEside, receivedMedicine, RgAbTr, handleCheckboxChange, handleDateChange, allowDateIds, handleCheckboxChange2 } = useHook();
    return (
        <div>
            <div className='mt-[20px]'>
                <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                    <label className='text-xl' htmlFor="">กลุ่มสัมพันธ์ เเละ ฟังผลเลือด:</label>
                </div>
                <div className='mt-[20px] pl-[10px]'>
                    {RgAbTr.map((item) => {
                        // แสดงเฉพาะ id ที่อยากให้มีช่องวันที่
                        return (
                            <div key={item.id} className='xl:flex xl:items-center'>
                                <input
                                    className='xl:mt-[10px]'
                                    type="checkbox"
                                    value={item.id}
                                    checked={field.relationship_group_and_blood_test_results.includes(String(item.id))}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="ml-[5px] xl:mt-[10px]">{item.RgAbTr_name}</label>

                                {/* โชว์ช่องวันที่เฉพาะ id ที่อยู่ใน allowDateIds */}
                                {allowDateIds.includes(String(item.id)) &&
                                    field.relationship_group_and_blood_test_results.includes(String(item.id)) && (
                                        <div className='xl:mt-[10px]'>
                                            <label>วันที่</label>
                                            <input
                                                type="date"
                                                value={field.relationship_group_and_blood_test_results_date[item.id] || ""}
                                                onChange={(e) => handleDateChange(e, item.id)}
                                                className="border-gray-400 border p-1 rounded-lg bg-white ml-[5px]"
                                            />
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className='mt-[20px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">ตรวจเต้านม,หัวนม:</label>
                    </div>
                    <div className='mt-[20px] pl-[10px]'>
                        {BE.map((be) => (
                            <div key={be.id}>
                                <input
                                    className='mt-[10px]'
                                    type="checkbox"
                                    value={be.id}
                                    name="BE"
                                    checked={field.BE.includes(String(be.id))}
                                    onChange={handleCheckboxChange2} // ใช้ฟังก์ชันนี้สำหรับ checkbox
                                />
                                <label className="pl-[5px] xl:mt-[10px]">{be.BE_name}</label>

                                {/* แสดง radio เฉพาะ id=2 */}
                                {String(be.id) === "2" && field.BE.includes("2") &&
                                    BEside.map((beSide) => (
                                        <div key={beSide.id} className='ml-[20px]'>
                                            <input
                                                className=''
                                                type="radio"
                                                value={beSide.id}
                                                name="BE_not_normal_side"
                                                checked={field.BE_not_normal_side === String(beSide.id)}
                                                onChange={handleChange}
                                            />
                                            <label className="pl-[5px]">{beSide.BEside_name}</label>
                                        </div>
                                    ))
                                }

                                {/* แสดง input ผลตรวจเฉพาะ id=4 */}
                                {String(be.id) === "4" && field.BE.includes("4") && (
                                    <div className="pl-[20px] xl:pl-[10px] xl:ml-[10px]">
                                        <label htmlFor="BE_tr">ผลตรวจ</label>
                                        <input
                                            className="border-gray-400 border p-1 rounded-lg bg-white ml-[5px]"
                                            name="BE_tr"
                                            value={field.BE_tr}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="ระบุผลตรวจ"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-[20px]'>
                <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                    <label className='text-xl' htmlFor="">ได้รับยา:</label>
                </div>
                <div className='pl-[10px]'>
                    {receivedMedicine.map((receivedMedicine) => (
                        <div key={receivedMedicine.id} className='mt-[5px]'>
                            <input type="radio" name='received_medicine' value={receivedMedicine.id} onChange={handleChange} />
                            <label htmlFor="">{receivedMedicine.received_medicine_name}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
