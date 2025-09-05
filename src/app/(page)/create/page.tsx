'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import useHook from './useHook';

export default function page() {
    const { field, handleChange, handleSubmit, router, setField, BE, BEside, FwdRefChoice, HDA, HR, PG, amnio, cordo, pcr, duringPregnancy, prenatalCare, receivedMedicine, refChoice, relationship, RgAbTr, vip, ga, hnInput, handleSearch, setHnInput, } = useHook();

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
                    <div className='bg-white rounded-lg pr-[20px] pl-[20px] shadow-lg xl:pr-[60px] xl:pl-[60px] pt-[30px] pb-[30px]'>
                        <div className='flex md:flex md:justify-end'>
                            <fieldset>
                                <input className='border-gray-400 border bg-white p-2 rounded-lg mr-[5px]' value={hnInput} onChange={(e) => setHnInput(e.target.value)} type="text" placeholder='กรุณากรอกรหัส HN หรือ หมายเลขบัตรประชาชน หรือ ชื่อ' />
                                <button className='bg-[#683cb4] hover:bg-[#4a2d7c] text-white p-1 rounded-lg' onClick={handleSearch} type='button'>ค้นหา</button>
                            </fieldset>
                        </div>
                        <div className='mt-[20px] bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                            <div className='grid grid-cols-1 gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">HN:</label>
                                    <input className='w-full border-gray-400 border p-1 ml-[5px] md:w-[300px] xl:w-[238px] rounded-lg bg-white'
                                        name='hn_wife'
                                        value={field?.hn_wife || ""}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกรหัส HN' />
                                </div>
                                <div className='xl:flex xl:items-center'>
                                    <label htmlFor="">ชื่อ-นามสกุล:</label>
                                    <input className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[350px] lg:w-[450px] xl:w-[400px] bg-white'
                                        name='name_wife'
                                        value={field?.name_wife}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอก ชื่อ-นามสกุล' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">อายุ:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white text-center'
                                        name='age_wife'
                                        value={field?.age_wife || ""}
                                        onChange={handleChange}
                                        type="number"
                                        min="0"
                                        max="140"
                                        placeholder='กรอกอายุ' /> ปี
                                </div>
                                <div className='lg:flex lg:items-center '>
                                    <label htmlFor="">หมายเลขบัตรประชาชน:</label>
                                    <input className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[299px] lg:w-[350px] xl:w-[450px] bg-white'
                                        name='id_card_wife'
                                        value={field?.id_card_wife || ""}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกหมายเลขบัตรประชาชน' />
                                </div>
                            </div>
                            <div className='mt-[30px] xl:flex'>
                                <label className='w-[40px] mt-[5px]' htmlFor="">ที่อยู่:</label>
                                <textarea className='border-gray-400 border p-1 w-full rounded-lg h-[120px] bg-white'
                                    name='address'
                                    value={field?.address || ""}
                                    onChange={handleChange}
                                    placeholder='กรุณากรอกที่อยู่'></textarea>
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">เบอร์โทรที่ติดต่อได้:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[250px] lg:w-[250px] xl:w-[264px] bg-white'
                                        name='tel_wife'
                                        value={field?.tel_wife || ""}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกเบอร์โทรที่ติดต่อได้' />
                                </div>
                                <div className='lg:flex lg:items-center '>
                                    <label htmlFor="">อาชีพ:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] xl:w-[314px] bg-white'
                                        name='occupation_wife'
                                        value={field?.occupation_wife || ""}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกอาชีพ' />
                                </div>
                            </div>
                            <div className='mt-[30px] md:flex md:items-center'>
                                <label className='w-[55px]' htmlFor="">E-mail:</label>
                                <input className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[400px] lg:w-[500px] xl:w-full  bg-white'
                                    name='email_wife'
                                    value={field?.email_wife || ""}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder='กรุณากรอกอีเมล' />
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-2 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">น้ำหนัก:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[50px] bg-white mr-[5px] text-center'
                                        name='weight_wife'
                                        value={field?.weight_wife || ""}
                                        onChange={handleChange}
                                        type="number" placeholder='หนัก' />
                                    <span>กก.</span>
                                </div>
                                <div className='flex items-center '>
                                    <label htmlFor="">ส่วนสูง:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[50px] bg-white mr-[5px] text-center'
                                        name='height_wife'
                                        value={field?.height_wife || ""}
                                        onChange={handleChange}
                                        type="number" placeholder='สูง' />
                                    <span>ซม.</span>
                                </div>
                                <div>
                                    <label htmlFor="">BMI:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'
                                        name='bmi_wife'
                                        value={field.bmi_wife}
                                        readOnly
                                        type="number" placeholder='BMI' />
                                    <span>กก.</span>
                                </div>
                                <div className='flex items-center '>
                                    <label htmlFor="">ความดันโลหิต:</label>
                                    <input name='bp_systolic'
                                        value={field.bp_systolic}
                                        onChange={handleChange}
                                        type="hidden" />
                                    <input type="hidden"
                                        name='bp_diastolic'
                                        value={field.bp_diastolic}
                                        onChange={handleChange} />
                                    <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'>
                                        {field.bp_systolic}/{field.bp_diastolic}
                                    </div>
                                    <span>มล./ปรอท</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">PARA:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] lg:w-[500px] xl:w-[315px] bg-white'
                                        name='para'
                                        value={field.para}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                                <div className='lg:flex lg:items-center '>
                                    <label htmlFor="">Last:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] lg:w-[500px] xl:w-[355px] bg-white'
                                        name='last'
                                        value={field.last}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">LMP:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'
                                        name='lmp'
                                        value={field.lmp}
                                        onChange={handleChange}
                                        type="date" />
                                </div>
                                <div className='flex items-center '>
                                    <label htmlFor="">EDC:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'
                                        name='edc'
                                        value={field.edc}
                                        onChange={handleChange}
                                        type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">อายุครรภ์:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white mr-[5px] text-center'
                                        name='GA'
                                        value={field.GA}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder='อายุครรภ์' />
                                    <span>สัปดาห์</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[30px] '>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">ประวัติการเเพ้ยา:</label>
                            </div>
                            <div className='mt-[10px] pl-[10px]'>
                                {HDA.map((hda) => (
                                    <div key={hda.id}>
                                        <input className='mr-[5px]' name='HDA' value={hda.id} type="radio" />
                                        <label className='mr-[10px]'>{hda.hda_name}</label>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label htmlFor="">ชื่อยาที่เคยเเพ้:</label>
                                <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[507px] xl:w-[460px] bg-white mr-[5px]'
                                    name='DA'
                                    value={field.DA}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder='กรุณากรอกชื่อยาที่เคยเเพ้' />
                            </div>
                        </div>


                        <div className='mt-[30px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">HIGH RISK:</label>
                            </div>
                            <div className='mt-[10px] pl-[10px]'>
                                {HR.map((hr) => (
                                    <div key={hr.id}>
                                        <input className='mr-[5px]'
                                            name='HR'
                                            value={hr.id}
                                            onChange={handleChange}
                                            type="radio" />
                                        <label className='mr-[10px]' htmlFor="HR">{hr.hr_name}</label>
                                    </div>
                                ))}
                                <div>
                                    <label htmlFor="">ระบุ:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[580px] xl:w-[570px] bg-white' type="text" placeholder='กรุณาระบุ' />
                                </div>
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
                                {pcr.map((pcr) => (
                                    <div key={pcr.id}>
                                        <input type="radio" name='pcr' value={pcr.id} />
                                        <label htmlFor="pcr">{pcr.pcr_name}</label>
                                    </div>
                                ))}
                                <div>
                                    <label htmlFor="">ระบุ</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                        name='pcr_other'
                                        value={field.pcr_other}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-[40px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">Cordo</label>
                            </div>
                            <div className='pl-[10px] mt-[10px]'>
                                {cordo.map((cordo) => (
                                    <div key={cordo.id}>
                                        <input type="radio" name='cordo' value={cordo.id} onChange={handleChange} />
                                        <label htmlFor="cordo">{cordo.cordo_name}</label>
                                    </div>
                                ))}
                                <div>
                                    <label htmlFor="cordo_tr">ผลตรวจ</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                        name='cordo_tr'
                                        value={field.cordo_tr}
                                        onChange={handleChange}
                                        type="text" />
                                </div>
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
                                        <input type="radio" name="during_pregnancy" id={duringPregnancy.id} onChange={handleChange} />
                                        <label className='ml-[5px]' htmlFor="">{duringPregnancy.during_pregnancy_name}</label>
                                    </div>
                                ))}

                                <div className=' grid grid-cols-1 gap-[10px] mt-[10px] mb-[10px] xl:mt-[0px] xl:mb-[0px]'>
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
                            </div>
                        </div>
                        <div className='mt-[30px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">การกระตุ้นวัคซีนในครรภ์:</label>
                            </div>
                            <div className='pl-[10px] mt-[10px]'>
                                {vip.map((vaccination_in_pregnancy) => (
                                    <div key={vaccination_in_pregnancy.id} className='flex items-center'>
                                        <input name='vaccination_in_pregnancy' value={field.vaccination_in_pregnancy} onChange={handleChange} type="radio" />
                                        <label className='ml-[5px]' htmlFor="vaccination_in_pregnancy">{vaccination_in_pregnancy.vip_name}</label>
                                    </div>
                                ))}
                                <div>
                                    <label htmlFor="">วันที่:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' type="date" name="vaccination_in_pregnancy_date" value={field.vaccination_in_pregnancy_date} onChange={handleChange} />
                                </div>
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
                    {/* กล่อง2 */}
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
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

                    <div className='bg-white rounded-lg pt-[30px] pb-[30px] mt-[20px] pr-[20px] pl-[20px] shadow-lg xl:pr-[60px] xl:pl-[60px]'>
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