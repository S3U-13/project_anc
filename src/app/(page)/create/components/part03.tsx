import React from 'react'
import useHook from '../useHook';

export default function PartThree() {
     const { field, handleChange, BE, BEside, receivedMedicine, RgAbTr, } = useHook();
  return (
    <div>
      <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">กลุ่มสัมพันธ์ เเละ ฟังผลเลือด:</label>
                            </div>
                            <div className='mt-[20px] pl-[10px]'>
                                {RgAbTr.map((RgAbTr,) => (
                                    <div key={RgAbTr.id}>
                                        <input name='relationship_group_and_blood_test_results' value={RgAbTr.id} onChange={handleChange} type="checkbox" />
                                        <label className='ml-[5px]' htmlFor="relationship_group_and_blood_test_results">{RgAbTr.RgAbTr_name}</label>
                                    </div>
                                ))}
                                <div>
                                    <label htmlFor="">วันที่</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='relationship_group_and_blood_test_results_date_1' value={field.relationship_group_and_blood_test_results_date_1} onChange={handleChange} type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">วันที่</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='relationship_group_and_blood_test_results_date_2' value={field.relationship_group_and_blood_test_results_date_2} onChange={handleChange} type="date" />
                                </div>
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
                                            <input value={be.id} name='BE' onChange={handleChange} type="checkbox" />
                                            <label className='pl-[5px]' htmlFor="BE">{be.BE_name}</label>
                                        </div>
                                    ))}


                                    <div className='mt-[10px]'>
                                        {BEside.map((beSide) => (
                                            <div key={beSide.id}>
                                                <input type="radio" value={beSide.id} name='BE_not_normal_side' onChange={handleChange} />
                                                <label className='pl-[5px]' htmlFor="">{beSide.BEside_name}</label>
                                            </div>
                                        ))}
                                        <div className='pl-[20px] xl:pl-[10px] '>
                                            <label htmlFor="BE_tr">ผลตรวจ</label>
                                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='BE_tr' value={field.BE_tr} onChange={handleChange} type="text" placeholder='ระบุผลตรวจ' />
                                        </div>
                                    </div>
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
