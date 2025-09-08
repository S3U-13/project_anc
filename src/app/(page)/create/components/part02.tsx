import React from 'react'
import useHook from '../useHook';

export default function PartTwo() {
    const { field, handleChange, HDA, HR, PG, amnio, cordo, pcr, duringPregnancy, vip, } = useHook();
    return (
        <div>
            <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                <div className='mt-[30px] '>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">ประวัติการเเพ้ยา:</label>
                    </div>
                    <div className='mt-[10px] pl-[10px]'>
                        {HDA.map((hda) => (
                            <div key={hda.id} className='xl:flex xl:items-center'>
                                <input className='mr-[5px]'
                                    name='HDA'
                                    value={hda.id}
                                    checked={field.HDA === String(hda.id)}
                                    onChange={handleChange}
                                    type="radio" />
                                <label className='mr-[10px]'>{hda.hda_name}</label>
                                {String(hda.id) === "1" && field.HDA === "1" && (
                                    <div>
                                        <label htmlFor="">ชื่อยาที่เคยเเพ้:</label>
                                        <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[507px] xl:w-[460px] bg-white mr-[5px]'
                                            name='DA'
                                            value={field.DA}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder='กรุณากรอกชื่อยาที่เคยเเพ้' />
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                </div>


                <div className='mt-[30px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">HIGH RISK:</label>
                    </div>
                    <div className='mt-[10px] pl-[10px]'>
                        {HR.map((hr) => (
                            <div key={hr.id} className='xl:flex xl:items-center'>
                                <input className='mr-[5px]'
                                    name='HR'
                                    value={hr.id}
                                    onChange={handleChange}
                                    checked={field.HR === String(hr.id)}
                                    type="radio" />
                                <label className='mr-[10px]' htmlFor="HR">{hr.hr_name}</label>
                                {String(hr.id) === "2" && field.HR === "2" && (
                                    <div>
                                        <label htmlFor="">ระบุ:</label>
                                        <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[580px] xl:w-[570px] bg-white'
                                            name=''
                                            value={field.HR_other}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder='กรุณาระบุ' />
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>

                <div>
                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม:</label>
                        </div>
                        <div className='mt-[10px] pl-[10px]'>
                            {amnio.map((amnio) => (
                                <div key={amnio.id}>
                                    <input className='mr-[5px]'
                                        name='amnio_for_karyotype'
                                        value={amnio.id} onChange={handleChange}
                                        type="radio" />
                                    <label className='mr-[10px]' htmlFor="amnio_for_karyotype">{amnio.amnio_name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-[20px]'>
                    <div className='bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                        <h1 className='text-xl'>ค่า Lab</h1>
                        <div className='grid grid-cols-1 gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center bg-white p-[20px] xl:p-[0] xl:bg-white/0 rounded-lg mt-[10px]'>
                            <div>
                                <label htmlFor="">GCT 1</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                    name='gct_1'
                                    value={field.gct_1}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">GCT 2</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                    name='gct_2'
                                    value={field.gct_2}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">OGTT 1</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                    name='ogtt_1'
                                    value={field.ogtt_1}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">OGTT 2</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                    name='ogtt_2'
                                    value={field.ogtt_2}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                            <div>
                                <label htmlFor="">HbsAg</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                    name='HbsAg'
                                    value={field.HbsAg}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">VDRL</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                    name='VDRL'
                                    value={field.VDRL}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Anti HIV</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                    name='anti_hiv'
                                    value={field.anti_hiv}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                        </div>

                        <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                            <div>
                                <label htmlFor="">BI.gr</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[115px]'
                                    name='BI_gr'
                                    value={field.BI_gr}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Rh</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[120px]'
                                    name='Rh'
                                    value={field.Rh}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div className='xl:pl-[35px]'>
                                <label htmlFor="">Hct</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px] '
                                    name='Hct'
                                    value={field.Hct}
                                    onChange={handleChange}
                                    type="text" />
                                <span>%</span>
                            </div>
                        </div>

                        <div className='mt-[20px] xl:border-t xl:border-gray-400'>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div>
                                    <label htmlFor="">OF</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                        name='OF'
                                        value={field.OF}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                                <div className='xl:pl-[20px]'>
                                    <label htmlFor="">DCIP</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                        name='DCIP'
                                        value={field.DCIP}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div>
                                    <label htmlFor="">MCV</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                        name='MCV'
                                        value={field.MCV}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                                <div className='xl:pl-[10px]'>
                                    <label htmlFor="">MCH</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                        name='MCH'
                                        value={field.MCH}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                            <label htmlFor="">Hb Typing</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                name='Hb_typing'
                                value={field.Hb_typing}
                                onChange={handleChange}
                                type="text" />
                        </div>
                    </div>
                </div>

                <div className='mt-[40px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">PCR</label>
                    </div>
                    <div className='pl-[10px] mt-[10px]'>
                        {pcr.map((Pcr) => (
                            <div key={Pcr.id} className='xl:flex xl:items-center'>
                                <input
                                    type="radio"
                                    name='pcr'
                                    value={Pcr.id}
                                    onChange={handleChange}
                                    checked={field.pcr === String(Pcr.id)}
                                />
                                <label className='mr-[10px]' htmlFor="pcr">{Pcr.pcr_name}</label>
                                {String(Pcr.id) === "2" && field.pcr === "2" && (
                                    <div>
                                        <label htmlFor="">ระบุ</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                            name='pcr_other'
                                            value={field.pcr_other}
                                            onChange={handleChange}
                                            type="text" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-[40px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">Cordo</label>
                    </div>
                    <div className='pl-[10px] mt-[10px]'>
                        {cordo.map((cordo) => (
                            <div key={cordo.id} className='xl:flex xl:items-center'>
                                <input
                                    type="radio"
                                    name='cordo'
                                    value={cordo.id}
                                    onChange={handleChange} 
                                    checked={field.cordo === String(cordo.id)}/>
                                <label className='mr-[10px]' htmlFor="cordo">{cordo.cordo_name}</label>
                                {String(cordo.id) === "2" && field.cordo === "2" && (
                                    <div>
                                        <label htmlFor="cordo_tr">ผลตรวจ</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                            name='cordo_tr'
                                            value={field.cordo_tr}
                                            onChange={handleChange}
                                            type="text" />
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className='mt-[20px]'>
                            <label htmlFor="cordo_other">อื่นๆ</label>
                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                name='cordo_other'
                                value={field.cordo_other}
                                onChange={handleChange}
                                type="text" />
                        </div>

                        <div className='mt-[10px] flex gap-[20px]'>
                            {PG.map((pg) => (
                                <div key={pg.id}>
                                    <input name='PG' value={pg.id} onChange={handleChange} type="radio" />
                                    <label className='ml-[5px]' htmlFor="PG">{pg.PG_name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className='mt-[30px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <h1 className='text-xl'>วัคซีนบาดทะยัก ก่อนตั้งครรภ์</h1>
                    </div>
                    <div className='pl-[10px] mt-[10px]'>
                        <div>
                            <label htmlFor=" Td_num">เคยฉีด:</label>
                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] mr-[5px]'
                                name=' Td_num'
                                value={field.Td_num}
                                onChange={handleChange}
                                type="number" placeholder='จำนวณครั้ง' />
                            <span>ครั้ง</span>
                        </div>
                        <div className='mt-[10px]'>
                            <label htmlFor="Td_last_date">ครั้งสุดท้ายวันที่:</label>
                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                name='Td_last_date'
                                value={field.Td_last_date}
                                onChange={handleChange}
                                type="date" />
                        </div>
                    </div>

                </div>
                <div className='mt-[30px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">ในระหว่างตั้งครรภ์:</label>
                    </div>
                    <div className='pl-[10px] mt-[10px]'>
                        {duringPregnancy.map((duringPregnancy) => (
                            <div key={duringPregnancy.id} className='pt-[5px]'>
                                <input 
                                type="radio"
                                    name="during_pregnancy" 
                                    value={duringPregnancy.id} 
                                    onChange={handleChange} 
                                    checked={field.during_pregnancy === String(duringPregnancy.id)}
                                    />
                                <label className='ml-[5px]' htmlFor="">{duringPregnancy.during_pregnancy_name}</label>
                                {String(duringPregnancy.id) === "1" && field.during_pregnancy === "1" && (
                                    <div className=' grid grid-cols-1 gap-[10px] mt-[10px] mb-[10px] xl:ml-[20px] xl:mt-[0px] xl:mb-[0px]'>
                                        <div>
                                            <label htmlFor="during_pregnancy_round[]">ครั้งที่1:</label>
                                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round[]' value={field.during_pregnancy_round} onChange={handleChange} type="date" />
                                        </div>
                                        <div>
                                            <label htmlFor="during_pregnancy_round[]">ครั้งที่2:</label>
                                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round[]' value={field.during_pregnancy_round} onChange={handleChange} type="date" />
                                        </div>
                                        <div>
                                            <label htmlFor="during_pregnancy_round[]">ครั้งที่3:</label>
                                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round[]' value={field.during_pregnancy_round} onChange={handleChange} type="date" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="">การกระตุ้นวัคซีนในครรภ์:</label>
                    </div>
                    <div className='pl-[10px] mt-[10px]'>
                        {vip.map((vaccination_in_pregnancy) => (
                            <div key={vaccination_in_pregnancy.id} className='flex items-center'>
                                <input
                                    name='vaccination_in_pregnancy'
                                    value={vaccination_in_pregnancy.id}
                                    onChange={handleChange}
                                    checked={field.vaccination_in_pregnancy === String(vaccination_in_pregnancy.id)}
                                    type="radio" />
                                <label className='ml-[5px] mr-[5px]' htmlFor="vaccination_in_pregnancy">{vaccination_in_pregnancy.vip_name}</label>
                                {String(vaccination_in_pregnancy.id) === "1" && field.vaccination_in_pregnancy === "1" && (
                                    <div>
                                        <label htmlFor="">วันที่:</label>
                                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                            type="date" name="vaccination_in_pregnancy_date"
                                            value={field.vaccination_in_pregnancy_date}
                                            onChange={handleChange} />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='mt-[10px]'>
                            <div>
                                <label htmlFor="">Lab 2</label>
                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='lab_2' value={field.lab_2} onChange={handleChange} type="date" />
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="">HCT</label>
                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='hct' value={field.hct} onChange={handleChange} type="text" />
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="">VDRL</label>
                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='vdrl' value={field.vdrl} onChange={handleChange} type="text" />
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="">H</label>
                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='h' value={field.h} onChange={handleChange} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
