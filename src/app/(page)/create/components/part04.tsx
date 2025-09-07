import React from 'react'
import useHook from '../useHook';

export default function PartFour() {
    const { field, handleChange, pcr, } = useHook();
    return (
        <div>
            <div className='bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                <div className='xl:flex xl:items-center xl:gap-[37px]'>
                    <div>
                        <label htmlFor="">ชื่อสามี:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[400px]' name='name_husband' value={field.name_husband} onChange={handleChange} type="text" placeholder='ชื่อสามีของผู้ฝากครรภ์' />
                    </div>
                    <div className='mt-[10px] xl:mt-0'>
                        <label htmlFor="">อายุ:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] mr-[5px] w-[100px]' name='age_husband' value={field.age_husband} onChange={handleChange} type="number" placeholder='อายุ' />
                        <span>ปี</span>
                    </div>
                </div>
                <div className='mt-[10px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px]'>
                    <div>
                        <label htmlFor="">บัตรประชาชน:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[360px]' name='id_card_husband' value={field.ic_card_husband} onChange={handleChange} type="text" placeholder='บัตรประชาชน' />
                    </div>
                    <div className='mt-[10px] xl:mt-0'>
                        <label htmlFor="">HN:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='hn_husband' value={field.hn_husband} onChange={handleChange} type="text" placeholder='' />
                    </div>
                </div>
                <div className='mt-[10px] pb-[20px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px] xl:border-b xl:border-gray-400'>
                    <div>
                        <label htmlFor="">เบอร์โทรที่ติดต่อได้:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[323px]' name='tel_husband' value={field.tel_husband} onChange={handleChange} type="text" placeholder='' />
                    </div>
                    <div className='mt-[10px] xl:mt-0'>
                        <label htmlFor="">อาชีพ:</label>
                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-[250px]' name='occupation_husband' value={field.occupation_husband} onChange={handleChange} type="text" placeholder='' />
                    </div>
                </div>
                <div className='grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                    <div>
                        <label htmlFor="">HbsAg</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='HbsAg_husband' value={field.HbsAg_husband} onChange={handleChange} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">VDRL</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='VDRL_husband' value={field.VDRL_husband} onChange={handleChange} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Anti HIV</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='anti_hiv_husband' value={field.anti_hiv_husband} onChange={handleChange} type="text" />
                    </div>
                </div>
                <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                    <div>
                        <label htmlFor="">BI.gr</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[115px]' name='BI_gr_husband' value={field.BI_gr_husband} onChange={handleChange} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Rh</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[120px]' name='Rh_husband' value={field.Rh_husband} onChange={handleChange} type="text" />
                    </div>
                    <div className='xl:pl-[35px]'>
                        <label htmlFor="">Hct</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='Hct_husband' value={field.Hct_husband} onChange={handleChange} type="text" />
                        <span>%</span>
                    </div>
                </div>
                <div className='mt-[20px] xl:border-t xl:border-gray-400'>
                    <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                        <div>
                            <label htmlFor="">OF</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='OF_husband' value={field.OF_husband} onChange={handleChange} type="text" />
                        </div>
                        <div className='xl:pl-[20px]'>
                            <label htmlFor="">DCIP</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='DCIP_husband' value={field.DCIP_husband} onChange={handleChange} type="text" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                        <div>
                            <label htmlFor="">MCV</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='MCV_husband' value={field.MCV_husband} onChange={handleChange} type="text" />
                        </div>
                        <div className='xl:pl-[10px]'>
                            <label htmlFor="">MCH</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='MCH_husband' value={field.MCH_husband} onChange={handleChange} type="text" />
                        </div>
                    </div>
                </div>
                <div className='mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                    <label htmlFor="">Hb Typing</label>
                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='HB_typing_husband' value={field.Hb_typing_husband} onChange={handleChange} type="text" />
                </div>
            </div>
            <div className='mt-[40px]'>
                <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                    <label className='text-xl' htmlFor="">PCR</label>
                </div>
                <div className='pl-[10px] mt-[10px]'>
                    {pcr.map((pcr) => (
                        <div key={pcr.id}>
                            <input type="radio" name='pcr' value={pcr.id} />
                            <label htmlFor="pcr_husband">{pcr.pcr_name}</label>
                        </div>
                    ))}
                    <div>
                        <label htmlFor="">ระบุ</label>
                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                            name='pcr_other_husband'
                            value={field.pcr_other}
                            onChange={handleChange}
                            type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}
