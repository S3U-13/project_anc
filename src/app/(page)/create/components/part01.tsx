import React from 'react'
import useHook from '../useHook';


export default function PartOne () {
    const { field, handleChange, hnInput, handleSearch, setHnInput, } = useHook();
    return (
        <div>
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
        </div>
    )
}
