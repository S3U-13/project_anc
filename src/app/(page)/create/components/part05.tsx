import React from 'react'
import useHook from '../useHook';

export default function PartFive() {
      const { field, handleChange, prenatalCare, refChoice, ga, } = useHook();
  return (
    <div>
      <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-lg' htmlFor="">ฝากครรภ์ตามเกณฑ์</label>
                            </div>
                            <div className='pl-[10px] xl:pl-[5px] mt-[10px]'>
                                {prenatalCare.map((prenatalCare) => (
                                    <div key={prenatalCare.id}>
                                        <input type="checkbox" name='prenatal_care_according_to_criteria' value={prenatalCare.id} onChange={handleChange} />
                                        <label className='ml-[5px]' htmlFor="">{prenatalCare.prenatal_care_name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-lg' htmlFor="">ตรวจสอบความครบถ้วนของบริการ ตามช่วงอายุครรภ์</label>
                            </div>
                            <div className='pl-[10px] mt-[10px]'>
                                {ga.map((ga) => (
                                    <div key={ga.id}>
                                        <input type="radio" name="ga" value={ga.id} onChange={handleChange} />
                                        <label className='ml-[5px]' htmlFor="">{ga.ga_name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-lg' htmlFor="">การรับ Refer</label>
                            </div>
                            <div className='pl-[5px]'>
                                <div className='mt-[10px]'>
                                    <input type="checkbox" />
                                    <label className='ml-[5px]' htmlFor="">รับRefer</label>
                                </div>
                                <div className='pl-[15px] xl:pl-[10px]'>
                                    {refChoice.map((refChoice) => (
                                        <div key={refChoice.id}>
                                            <input type="radio" name='Rcvd_ref_choice' value={refChoice.id} onChange={handleChange} />
                                            <label className='ml-[5px]' htmlFor="">{refChoice.ref_choice_name}</label>
                                        </div>
                                    ))}

                                    <div className='pl-[20px] xl:pl-[10px]'>
                                        <label htmlFor="">รพช/รพสต</label>
                                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='Rcvd_ref_in_province' value={field.Rcvd_ref_in_province} onChange={handleChange} type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[10px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-lg' htmlFor="">การส่งต่อ Refer</label>
                            </div>
                            <div className='pl-[5px]'>
                                <div className='mt-[10px]'>
                                    <input type="checkbox" />
                                    <label className='ml-[5px]' htmlFor="">ส่งต่อ</label>
                                </div>
                                <div className='pl-[15px] xl:pl-[10px]'>
                                    {refChoice.map((FwdRefChoice) => (
                                        <div key={FwdRefChoice.id}>
                                            <input type="radio" name='Fwd_ref_choice' value={FwdRefChoice.id} onChange={handleChange} />
                                            <label className='ml-[5px]' htmlFor="">{FwdRefChoice.ref_choice_name}</label>
                                        </div>
                                    ))}
                                    <div className='pl-[20px] xl:pl-[10px]'>
                                        <label htmlFor="">รพช/รพสต</label>
                                        <input name='Fwd_ref_in_province' value={field.Fwd_ref_in_province} onChange={handleChange} className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
