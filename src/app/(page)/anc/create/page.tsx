'use client';
import React, { useState } from 'react';
import useHook from './useHook';

export default function page() {
    const { field,
        handleChange,
        handleSubmit,
        hnInput,
        setHnInput,
        handleSearch,
        handleCheckboxChange,
        handleCheckboxChange2,
        handleDateChange,
        allowDateIds,
        data,
    } = useHook();
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
                                    <input type="hidden" name="patvisit_id" value={field.patvisit_id} />
                                    <input type="hidden" name="patreg_id" value={field.patreg_id} />
                                    <input className='w-full border-gray-400 border p-1 ml-[5px] md:w-[300px] xl:w-[238px] rounded-lg bg-white'
                                        name='hn'
                                        value={field.hn}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกรหัส HN' />
                                </div>
                                <div className='xl:flex xl:items-center'>
                                    <label htmlFor="">ชื่อ-นามสกุล:</label>
                                    <input className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[350px] lg:w-[450px] xl:w-[400px] bg-white'
                                        name='name_wife'
                                        value={field.name_wife}
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
                                        value={field.age_wife}
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
                                        value={field.id_card_wife}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกหมายเลขบัตรประชาชน' />
                                </div>
                            </div>
                            <div className='mt-[30px] xl:flex'>
                                <label className='w-[40px] mt-[5px]' htmlFor="">ที่อยู่:</label>
                                <textarea className='border-gray-400 border p-1 w-full rounded-lg h-[120px] bg-white'
                                    name='address'
                                    value={field.address}
                                    onChange={handleChange}
                                    placeholder='กรุณากรอกที่อยู่'></textarea>
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">เบอร์โทรที่ติดต่อได้:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[250px] lg:w-[250px] xl:w-[264px] bg-white'
                                        name='tel_wife'
                                        value={field.tel_wife}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกเบอร์โทรที่ติดต่อได้' />
                                </div>
                                <div className='lg:flex lg:items-center '>
                                    <label htmlFor="">อาชีพ:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] xl:w-[314px] bg-white'
                                        name='wife_job'
                                        value={field.wife_job}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='กรุณากรอกอาชีพ' />
                                </div>
                            </div>
                            <div className='mt-[30px] md:flex md:items-center'>
                                <label className='w-[55px]' htmlFor="">E-mail:</label>
                                <input className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[400px] lg:w-[500px] xl:w-full  bg-white'
                                    name='email_wife'
                                    value={field.email_wife}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder='กรุณากรอกอีเมล' />
                            </div>
                            <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-2 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">น้ำหนัก:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'
                                        name='weight_wife'
                                        value={field.weight_wife}
                                        onChange={handleChange}
                                        type="number" placeholder='หนัก' />
                                    <span>กก.</span>
                                </div>
                                <div className='flex items-center '>
                                    <label htmlFor="">ส่วนสูง:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'
                                        name='height_wife'
                                        value={field.height_wife}
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
                            <div className='grid grid-cols-2 mt-[30px] gap-[30px] md:grid md:grid-cols-3  lg:grid lg:grid-cols-4 xl:flex xl:items-center xl:gap-[37px] '>
                                <div>
                                    <label htmlFor="">PARA:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'
                                        name='para'
                                        value={field.para}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='' />
                                </div>
                                <div>
                                    <label htmlFor="">G:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'
                                        name='g'
                                        value={field.g}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='' />
                                </div>
                                <div>
                                    <label htmlFor="">P:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'
                                        name='p'
                                        value={field.p}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='' />
                                </div>
                                <div>
                                    <label htmlFor="">A:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'
                                        name='a'
                                        value={field.a}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='' />
                                </div>
                                <div className='lg:flex lg:items-center '>
                                    <label htmlFor="">Last:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'
                                        name='last'
                                        value={field.last}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='' />
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
                                        name=''
                                        value={field.edc}
                                        onChange={handleChange}
                                        type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">อายุครรภ์:</label>
                                    <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white mr-[5px] text-center'
                                        name=''
                                        value={field.GA || ""}
                                        onChange={handleChange}
                                        type="text"
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
                                {data.filter(ma => ma.choice_type_id === 1).map(ma => (
                                    <div key={ma.id} className='xl:flex xl:items-center'>
                                        <input className='mr-[5px]'
                                            name='ma_id'
                                            value={ma.id}
                                            checked={field.ma_id === String(ma.id)}
                                            onChange={handleChange}
                                            type="radio" />
                                        <label className='mr-[10px]'>{ma.choice_name}</label>
                                        {String(ma.id) === "1" && field.ma_id === "1" && (
                                            <div>
                                                <label htmlFor="">ชื่อยาที่เคยเเพ้:</label>
                                                <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[507px] xl:w-[460px] bg-white mr-[5px]'
                                                    name='da_text'
                                                    value={field.da_text}
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
                                {data.filter(hr => hr.choice_type_id === 2).map(hr => (
                                    <div key={hr.id} className='xl:flex xl:items-center'>
                                        <input className='mr-[5px]'
                                            name='hr_id'
                                            value={hr.id}
                                            onChange={handleChange}
                                            checked={field.hr_id === String(hr.id)}
                                            type="radio" />
                                        <label className='mr-[10px]' htmlFor="HR">{hr.choice_name}</label>
                                        {String(hr.id) === "4" && field.hr_id === "4" && (
                                            <div>
                                                <label htmlFor="">ระบุ:</label>
                                                <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[580px] xl:w-[570px] bg-white'
                                                    name='hr_text'
                                                    value={field.hr_text}
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
                                    {data.filter(amnio => amnio.choice_type_id === 3).map(amnio => (
                                        <div key={amnio.id}>
                                            <input className='mr-[5px]'
                                                name='am_id'
                                                value={amnio.id}
                                                onChange={handleChange}
                                                checked={field.am_id === String(amnio.id)}
                                                type="radio" />
                                            <label className='mr-[10px]' htmlFor="am_id">{amnio.choice_name}</label>
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
                                            name='hbsag'
                                            value={field.hbsag}
                                            onChange={handleChange}
                                            type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="">VDRL</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                            name='vdrl_1'
                                            value={field.vdrl_1}
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
                                            name='bl_gr'
                                            value={field.bl_gr}
                                            onChange={handleChange}
                                            type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Rh</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[120px]'
                                            name='rh'
                                            value={field.rh}
                                            onChange={handleChange}
                                            type="text" />
                                    </div>
                                    <div className='xl:pl-[35px]'>
                                        <label htmlFor="">Hct</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px] '
                                            name='hct'
                                            value={field.hct}
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
                                                name='of'
                                                value={field.of}
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                        <div className='xl:pl-[20px]'>
                                            <label htmlFor="">DCIP</label>
                                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                                name='dcip'
                                                value={field.dcip}
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                        <div>
                                            <label htmlFor="">MCV</label>
                                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                                name='mcv'
                                                value={field.mcv}
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                        <div className='xl:pl-[10px]'>
                                            <label htmlFor="">MCH</label>
                                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                                name='mch'
                                                value={field.mch}
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                    <label htmlFor="">Hb Typing</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                        name='hb_typing'
                                        value={field.hb_typing}
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
                                {data.filter(Pcr => Pcr.choice_type_id === 4).map(Pcr => (
                                    <div key={Pcr.id} className='xl:flex xl:items-center'>
                                        <input
                                            type="radio"
                                            name='pcr'
                                            value={Pcr.id}
                                            onChange={handleChange}
                                            checked={field.pcr === String(Pcr.id)}
                                        />
                                        <label className='ml-[5px] mr-[5px]' htmlFor="pcr">{Pcr.choice_name}</label>
                                        {String(Pcr.id) === "9" && field.pcr === "9" && (
                                            <div>
                                                <label htmlFor="">ระบุ</label>
                                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                                    name='pcr_text'
                                                    value={field.pcr_text}
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
                                {data.filter(cordo => cordo.choice_type_id === 5).map(cordo => (
                                    <div key={cordo.id} className='xl:flex xl:items-center'>
                                        <input
                                            type="radio"
                                            name='cordo'
                                            value={cordo.id}
                                            onChange={handleChange}
                                            checked={field.cordo === String(cordo.id)} />
                                        <label className='ml-[5px] mr-[5px]' htmlFor="cordo">{cordo.choice_name}</label>
                                        {String(cordo.id) === "11" && field.cordo === "11" && (
                                            <div>
                                                <label htmlFor="cordo_tr">ผลตรวจ</label>
                                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                                    name='cordo_tr'
                                                    value={field.cordo_text}
                                                    onChange={handleChange}
                                                    type="text" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className='mt-[20px]'>
                                    <label htmlFor="cordo_other">อื่นๆ</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                        name='cordo_other_text'
                                        value={field.cordo_other_text}
                                        onChange={handleChange}
                                        type="text" />
                                </div>

                                <div className='mt-[10px] flex gap-[20px]'>
                                    {data.filter(abortion => abortion.choice_type_id === 6).map(abortion => (
                                        <div key={abortion.id}>
                                            <input name='abortion_id'
                                                value={abortion.id}
                                                onChange={handleChange}
                                                type="radio"
                                                checked={field.abortion_id === String(abortion.id)}
                                            />
                                            <label className='ml-[5px]' htmlFor="PG">{abortion.choice_name}</label>
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
                                    <label htmlFor=" td_num">เคยฉีด:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] mr-[5px]'
                                        name='td_num'
                                        value={field.td_num}
                                        onChange={handleChange}
                                        type="number" placeholder='จำนวณครั้ง' />
                                    <span>ครั้ง</span>
                                </div>
                                <div className='mt-[10px]'>
                                    <label htmlFor="Td_last_date">ครั้งสุดท้ายวันที่:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                        name='td_last_date'
                                        value={field.td_last_date}
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
                                {data.filter(tdap => tdap.choice_type_id === 7).map(tdap => (
                                    <div key={tdap.id} className='pt-[5px]'>
                                        <input
                                            type="radio"
                                            name="tdap_id"
                                            value={tdap.id}
                                            onChange={handleChange}
                                            checked={field.tdap_id === String(tdap.id)}
                                        />
                                        <label className='ml-[5px]' htmlFor="">{tdap.choice_name}</label>
                                        {String(tdap.id) === "14" && field.tdap_id === "14" && (
                                            <div className=' grid grid-cols-1 gap-[10px] mt-[10px] mb-[10px] xl:ml-[20px] xl:mt-[0px] xl:mb-[0px]'>
                                                <div>
                                                    <label htmlFor="during_pregnancy_round[]">ครั้งที่1:</label>
                                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_1' value={field.during_pregnancy_round_1} onChange={handleChange} type="date" />
                                                </div>
                                                <div>
                                                    <label htmlFor="during_pregnancy_round[]">ครั้งที่2:</label>
                                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_2' value={field.during_pregnancy_round_2} onChange={handleChange} type="date" />
                                                </div>
                                                <div>
                                                    <label htmlFor="during_pregnancy_round[]">ครั้งที่3:</label>
                                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_3' value={field.during_pregnancy_round_3} onChange={handleChange} type="date" />
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
                                {data.filter(iip => iip.choice_type_id === 8).map(iip => (
                                    <div key={iip.id} className='flex items-center'>
                                        <input
                                            name='iip_id'
                                            value={iip.id}
                                            onChange={handleChange}
                                            checked={field.iip_id === String(iip.id)}
                                            type="radio" />
                                        <label className='ml-[5px] mr-[5px]' htmlFor="vaccination_in_pregnancy">{iip.choice_name}</label>
                                        {String(iip.id) === "16" && field.iip_id === "16" && (
                                            <div>
                                                <label htmlFor="">วันที่:</label>
                                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                                    type="date" name="iip_date"
                                                    value={field.iip_date}
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
                                        <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='vdrl_2' value={field.vdrl_2} onChange={handleChange} type="text" />
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
                            <div className=' pl-[10px]'>
                                {data.filter(bti => bti.choice_type_id === 9).map((bti, index) => {


                                    const fieldName = `bti_value_${index + 1}_id`; // bti_value_1_id, bti_value_2_id
                                    const selectedIds = Array.isArray(field[fieldName]) ? field[fieldName] : [];

                                    return (
                                        <div key={bti.id} className='xl:flex xl:items-center'>
                                            <input
                                                className='xl:mt-[10px]'
                                                type="checkbox"
                                                name={fieldName}
                                                value={bti.id}
                                                checked={selectedIds.includes(String(bti.id))}
                                                onChange={(e) => handleCheckboxChange(e, fieldName)}
                                            />
                                            <label className="ml-[5px] xl:mt-[10px]">{bti.choice_name}</label>

                                            {/* แสดง input วันที่เฉพาะเงื่อนไข */}
                                            {(fieldName === "bti_value_1_id" && selectedIds.includes("18")) ||
                                                (fieldName === "bti_value_2_id" && selectedIds.includes("19")) ? (
                                                <div className='xl:mt-[10px]'>
                                                    <label>วันที่</label>
                                                    <input
                                                        type="date"
                                                        value={field.bti_date[bti.id] || ""}
                                                        onChange={(e) => handleDateChange(e, bti.id)}
                                                        className="border-gray-400 border p-1 rounded-lg bg-white ml-[5px]"
                                                    />
                                                </div>
                                            ) : null}
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

                                <div className=' pl-[10px]'>
                                    {data.filter(cbe => cbe.choice_type_id === 10).map((cbe, index) => {
                                        const fieldName = `cbe_value_${index + 1}_id`;

                                        return (
                                            <div key={cbe.id}>
                                                <input
                                                    className='mt-[10px]'
                                                    type="checkbox"
                                                    value={cbe.id}
                                                    name={fieldName}   // ✅ ใช้ fieldName
                                                    checked={Array.isArray(field[fieldName]) && field[fieldName].includes(String(cbe.id))}
                                                    onChange={(e) => handleCheckboxChange2(e, fieldName)}
                                                />
                                                <label className="pl-[5px] xl:mt-[10px]">{cbe.choice_name}</label>

                                                {/* แสดง radio เฉพาะ id=24 */}
                                                {String(cbe.id) === "24" &&
                                                    Array.isArray(field[fieldName]) && field[fieldName].includes("24") &&
                                                    data.filter(birads => birads.choice_type_id === 11).map(birads => (
                                                        <div key={birads.id} className='ml-[20px]'>
                                                            <input
                                                                type="radio"
                                                                value={birads.id}
                                                                name="birads_id"
                                                                checked={field.birads_id === String(birads.id)}
                                                                onChange={handleChange}
                                                            />
                                                            <label className="pl-[5px]">{birads.choice_name}</label>
                                                        </div>
                                                    ))}

                                                {/* แสดง input ผลตรวจเฉพาะ id=26 */}
                                                {String(cbe.id) === "26" &&
                                                    Array.isArray(field[fieldName]) && field[fieldName].includes("26") && (
                                                        <div className="pl-[20px] xl:pl-[10px] xl:ml-[10px]">
                                                            <label htmlFor="cbe_result">ผลตรวจ</label>
                                                            <input
                                                                className="border-gray-400 border p-1 rounded-lg bg-white ml-[5px]"
                                                                name="cbe_result"
                                                                value={field.cbe_result}
                                                                onChange={handleChange}
                                                                type="text"
                                                                placeholder="ระบุผลตรวจ"
                                                            />
                                                        </div>
                                                    )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">ได้รับยา:</label>
                            </div>
                            <div className='pl-[10px]'>
                                {data.filter(per_os => per_os.choice_type_id === 12).map(per_os => (
                                    <div key={per_os.id} className='mt-[5px]'>
                                        <input type="radio"
                                            name='per_os_id'
                                            value={per_os.id}
                                            onChange={handleChange} />
                                        <label htmlFor="">{per_os.choice_name}</label>
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
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[400px]' name='husband_name' value={field.husband_name} onChange={handleChange} type="text" placeholder='ชื่อสามีของผู้ฝากครรภ์' />
                                </div>
                                <div className='mt-[10px] xl:mt-0'>
                                    <label htmlFor="">อายุ:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] mr-[5px] w-[100px]' name='husband_age' value={field.husband_age} onChange={handleChange} type="number" placeholder='อายุ' />
                                    <span>ปี</span>
                                </div>
                            </div>
                            <div className='mt-[10px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px]'>
                                <div>
                                    <label htmlFor="id_card_husband">บัตรประชาชน:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[360px]' name='husband_id_card' value={field.husband_id_card} onChange={handleChange} type="text" placeholder='บัตรประชาชน' />
                                </div>
                                <div className='mt-[10px] xl:mt-0'>
                                    <label htmlFor="">HN:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='husband_hn' value={field.husband_hn} onChange={handleChange} type="text" placeholder='' />
                                </div>
                            </div>
                            <div className='mt-[10px] pb-[20px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px] xl:border-b xl:border-gray-400'>
                                <div>
                                    <label htmlFor="">เบอร์โทรที่ติดต่อได้:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-full xl:w-[323px]' name='husband_tel' value={field.husband_tel} onChange={handleChange} type="text" placeholder='' />
                                </div>
                                <div className='mt-[10px] xl:mt-0'>
                                    <label htmlFor="">อาชีพ:</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px] w-[250px]' name='husband_job' value={field.husband_job} onChange={handleChange} type="text" placeholder='' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div>
                                    <label htmlFor="">HbsAg</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='hbsag_husband' value={field.hbsag_husband} onChange={handleChange} type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">VDRL</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='vdrl_husband' value={field.vdrl_husband} onChange={handleChange} type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Anti HIV</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='anti_hiv_husband' value={field.anti_hiv_husband} onChange={handleChange} type="text" />
                                </div>
                            </div>
                            <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                                <div>
                                    <label htmlFor="">BI.gr</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[115px]' name='bl_gr_husband' value={field.bl_gr_husband} onChange={handleChange} type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Rh</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[120px]' name='rh_husband' value={field.rh_husband} onChange={handleChange} type="text" />
                                </div>
                                <div className='xl:pl-[35px]'>
                                    <label htmlFor="">Hct</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]' name='hct_husband' value={field.hct_husband} onChange={handleChange} type="text" />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className='mt-[20px] xl:border-t xl:border-gray-400'>
                                <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                    <div>
                                        <label htmlFor="">OF</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='of_husband' value={field.of_husband} onChange={handleChange} type="text" />
                                    </div>
                                    <div className='xl:pl-[20px]'>
                                        <label htmlFor="">DCIP</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='dcip_husband' value={field.dcip_husband} onChange={handleChange} type="text" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                    <div>
                                        <label htmlFor="">MCV</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='mcv_husband' value={field.mcv_husband} onChange={handleChange} type="text" />
                                    </div>
                                    <div className='xl:pl-[10px]'>
                                        <label htmlFor="">MCH</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='mch_husband' value={field.mch_husband} onChange={handleChange} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <label htmlFor="">Hb Typing</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white' name='hb_typing_husband' value={field.hb_typing_husband} onChange={handleChange} type="text" />
                            </div>
                        </div>
                        <div className='mt-[40px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">PCR</label>
                            </div>
                            <div className='pl-[10px] mt-[10px]'>
                                {data.filter(pcr_husband => pcr_husband.choice_type_id === 4).map(pcr_husband => (
                                    <div key={pcr_husband.id} className='xl:flex xl:items-center'>
                                        <input
                                            type="radio"
                                            name='pcr_hus_id'
                                            value={pcr_husband.id}
                                            onChange={handleChange} />
                                        <label className='ml-[5px] xl:mr-[5px]' htmlFor="pcr_husband">{pcr_husband.choice_name}</label>
                                        {String(pcr_husband.id) === "9" && field.pcr_hus_id === "9" && (
                                            <div>
                                                <label htmlFor="">ระบุ</label>
                                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                                    name='pcr_hus_husband'
                                                    value={field.pcr_hus_husband}
                                                    onChange={handleChange}
                                                    type="text" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-lg' htmlFor="">ฝากครรภ์ตามเกณฑ์</label>
                            </div>
                            <div className='pl-[10px] xl:pl-[5px] mt-[10px]'>
                                {data.filter(anc => anc.choice_type_id === 13).map(anc => (
                                    <div key={anc.id}>
                                        <input
                                            type="radio"
                                            name='anc_id'
                                            value={anc.id}
                                            onChange={handleChange} />
                                        <label className='ml-[5px]' htmlFor="">{anc.choice_name}</label>
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
                                {data.filter(usg => usg.choice_type_id === 14).map(usg => (
                                    <div key={usg.id}>
                                        <input
                                            type="radio"
                                            name="usg_id"
                                            value={usg.id}
                                            onChange={handleChange} />
                                        <label className='ml-[5px]' htmlFor="">{usg.choice_name}</label>
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
                                {data
                                    .filter(ref_in => ref_in.choice_type_id === 15)
                                    .map((ref_in, index) => {
                                        if (index === 1) return null;   // ✅ ใช้ ===
                                        return (
                                            <div key={ref_in.id} className='mt-[10px]'>
                                                <input
                                                    type="checkbox"
                                                    name='ref_in_id'
                                                    value={ref_in.id}
                                                    onChange={handleChange}
                                                />
                                                <label className='ml-[5px]'>รับRefer</label>
                                            </div>
                                        );
                                    })}

                                <div className='pl-[15px] xl:pl-[20px]'>
                                    {data.filter(refChoice => refChoice.choice_type_id === 16).map((refChoice) => (
                                        <div key={refChoice.id} className='xl:flex xl:items-center'>
                                            <input type="radio"
                                                name='ref_in_choice_id'
                                                value={refChoice.id}
                                                onChange={handleChange}
                                            // checked={field.Rcvd_ref_choice === String(refChoice.id)}
                                            />
                                            <label className='ml-[5px]' htmlFor="">{refChoice.choice_name}</label>
                                            {String(refChoice.id) === "43" && field.ref_in_choice_id === "43" && (
                                                <div className='pl-[20px] xl:pl-[10px]'>
                                                    <label htmlFor="">รพช/รพสต</label>
                                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='hos_name' value={field.hos_name} onChange={handleChange} type="text" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
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
                                {data
                                    .filter(ref_out => ref_out.choice_type_id === 15)
                                    .map((ref_out, index) => {
                                        if (![1, 3].includes(index)) return null;   // render เฉพาะ index 1 และ 3
                                        return (
                                            <div key={ref_out.id} className='mt-[10px]'>
                                                <input
                                                    type="checkbox"
                                                    value={ref_out.id}
                                                    name='ref_out_id'
                                                    onChange={handleChange}
                                                />
                                                <label className='ml-[5px]'>{ref_out.choice_name}</label>
                                            </div>
                                        );
                                    })}
                                <div className='pl-[15px] xl:pl-[20px]'>
                                    {data.filter(FwdRefChoice => FwdRefChoice.choice_type_id === 16).map(FwdRefChoice => (
                                        <div key={FwdRefChoice.id} className='xl:flex xl:items-center'>
                                            <input type="radio"
                                                name='ref_out_choice_id'
                                                value={FwdRefChoice.id}
                                                onChange={handleChange}
                                            // checked={field.Fwd_ref_choice === String(FwdRefChoice.id)}
                                            />
                                            <label className='ml-[5px]' htmlFor="">{FwdRefChoice.choice_name}</label>
                                            {String(FwdRefChoice.id) === "43" && field.ref_out_choice_id === "43" && (
                                                <div className='pl-[20px] xl:pl-[10px]'>
                                                    <label htmlFor="">รพช/รพสต</label>
                                                    <input name='hos_name' value={field.hos_name} onChange={handleChange} className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' type="text" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px]'>
                        <button type="submit" className='w-full bg-[#68449c] hover:bg-[#6337a0] p-2 text-white text-md rounded-sm'>บันทึกข้อมูล</button>
                    </div>

                </div>
            </form >

        </div >
    )
}