'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useHook from '../useHook';

export default function Page() {
    const { formatThaiDate } = useHook();
    const params = useParams();
    const anc_no = params?.id?.toString(); // ✅ ใช้ id เพราะโฟลเดอร์คือ [id]
    const [field, setField] = useState(null);

    useEffect(() => {
        if (!anc_no) return;

        const stored = JSON.parse(localStorage.getItem("mockData")) || [];
        const found = stored.find((item) => String(item.anc_no) === anc_no);
        setField(found);
    }, [anc_no]);

    if (!field) return <div>ไม่พบข้อมูล</div>;

    return (
        <div className='min-h-screen bg-[#f0ebf8] pt-[40px]'>
            <div className='pt-[10px] bg-[#683cb4] mx-auto w-[320px] rounded-lg sm:w-[420] md:w-[520px] lg:w-[620px] xl:w-[960px] '>
                <div className='bg-white pt-[30px] pb-[30px]'>
                    <h1 className='text-center text-2xl sm:text-3xl'>ประวัติผู้ฝากครรภ์</h1>
                </div>
            </div>
            {/* กล่อง 1 */}
            <div className='w-[400px] h-full mx-auto pt-[20px] pb-[40px] pr-[40px] pl-[40px] sm:w-[500] md:w-[600px] lg:w-[700px] xl:w-[1000px] xl:pl-[20px] xl:pr-[20px]'>
                <div className='bg-white rounded-lg pr-[20px] pl-[20px] shadow-lg xl:pr-[60px] xl:pl-[60px] pt-[30px] pb-[30px]'>
                    <div className='flex items-center'>
                        <label className='mr-[5px] text-xl' htmlFor="">ANC NO:</label>
                        <div className='border-gray-400 border bg-white p-1 rounded-lg mr-[5px] w-[80px]'>
                            <h1 className='text-center'>{field?.anc_no || ""}</h1>
                        </div>
                    </div>
                    <div className='mt-[20px] bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                        <div className='grid grid-cols-1 gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">HN:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] md:w-[300px] xl:w-[238px] rounded-lg bg-white'>
                                    {field.hn_wife}
                                </div>
                            </div>
                            <div className='xl:flex xl:items-center'>
                                <label htmlFor="">ชื่อ-นามสกุล:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[350px] lg:w-[450px] xl:w-[400px] bg-white'>
                                    {field.name_wife}
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">อายุ:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white text-center'>
                                    {field.age_wife}
                                </div>
                                <span className='ml-[5px]'>ปี</span>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="">หมายเลขบัตรประชาชน:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[299px] lg:w-[350px] xl:w-[450px] bg-white'>
                                    {field.id_card_wife}
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] xl:flex '>
                            <label className='w-[40px] mt-[5px]' htmlFor="">ที่อยู่:</label>
                            <div className='border-gray-400 border p-1 w-full rounded-lg h-[120px] bg-white'>
                                {field.address}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">เบอร์โทรที่ติดต่อได้:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[250px] lg:w-[250px] xl:w-[264px] bg-white'>
                                    {field.tel_wife}
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="">อาชีพ:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] xl:w-[314px] bg-white'>
                                    {field.occupation_wife}
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] md:flex md:items-center'>
                            <label className='w-[55px]' htmlFor="">E-mail:</label>
                            <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[400px] lg:w-[500px] xl:w-full  bg-white'>
                                {field.email_wife}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-2 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">น้ำหนัก:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'>
                                    {field.weight_wife}
                                </div>
                                <span>กก.</span>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="">ส่วนสูง:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'>{field.height_wife}</div>
                                <span>ซม.</span>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="">BMI:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'>{field.bmi_wife}</div>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="">ความดันโลหิต:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'>
                                    {field.bp_systolic}/{field.bp_diastolic}
                                </div>
                                <span>มล./ปรอท</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-[30px] gap-[30px] md:grid md:grid-cols-3  lg:grid lg:grid-cols-4 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">PARA:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.para}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="">G:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.g}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="">P:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.p}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="">A:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.a}
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="">Last:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.last}
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="">LMP:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'>
                                    {formatThaiDate(field.lmp)}
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="">EDC:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'>
                                    {formatThaiDate(field.edc)}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="">อายุครรภ์:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white mr-[5px] text-center'>
                                    {field.GA || ""}
                                </div>
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
                                <div className='xl:flex xl:items-center'>
                                    <input className='mr-[5px]'
                                        name='HDA'
                                        value={field.HDA}
                            
                                        type="radio" />
                                    <label className='mr-[10px]'></label>
                                  
                                        <div>
                                            <label htmlFor="">ชื่อยาที่เคยเเพ้:</label>
                                            <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[507px] xl:w-[460px] bg-white mr-[5px]'
                                                name='DA'
                                                value={field.DA}
                                   
                                                type="text"
                                            />
                                        </div>
                              
                                </div>
            

                        </div>

                    </div>


                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">HIGH RISK:</label>
                        </div>
                        <div className='mt-[10px] pl-[10px]'>
                      
                                <div className='xl:flex xl:items-center'>
                                    <input className='mr-[5px]'
                                        name='HR'
                                        
                                       
                        
                                        type="radio" />
                                    <label className='mr-[10px]' htmlFor="HR"></label>
                                    
                                        <div>
                                            <label htmlFor="">ระบุ:</label>
                                            <input className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full lg:w-[580px] xl:w-[570px] bg-white'
                                                name='HR_other'
                                             
                                            
                                                type="text"
                                                placeholder='กรุณาระบุ' />
                                        </div>
                                 
                                </div>
                  

                        </div>
                    </div>

                    <div>
                        <div className='mt-[30px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="">แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม:</label>
                            </div>
                            <div className='mt-[10px] pl-[10px]'>
                            
                                    <div>
                                        <input className='mr-[5px]'
                                            name='amnio_for_karyotype'
                                         
                                            type="radio" />
                                        <label className='mr-[10px]' htmlFor="amnio_for_karyotype"></label>
                                    </div>
                               
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
                                      
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">GCT 2</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                        name='gct_2'
                                       
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">OGTT 1</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                        name='ogtt_1'
                                       
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">OGTT 2</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] w-[100px] bg-white'
                                        name='ogtt_2'
                                       
                                        type="text" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div>
                                    <label htmlFor="">HbsAg</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                        name='HbsAg'
                                       
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">VDRL</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                        name='VDRL'
                                       
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Anti HIV</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px]'
                                        name='anti_hiv'
                                      
                                        type="text" />
                                </div>
                            </div>

                            <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                                <div>
                                    <label htmlFor="">BI.gr</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[115px]'
                                        name='BI_gr'
                                       
                                        type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Rh</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[120px]'
                                        name='Rh'
                                        
                                        type="text" />
                                </div>
                                <div className='xl:pl-[35px]'>
                                    <label htmlFor="">Hct</label>
                                    <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white w-[100px] '
                                        name='Hct'
                                       
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
                                          
                                            type="text" />
                                    </div>
                                    <div className='xl:pl-[20px]'>
                                        <label htmlFor="">DCIP</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                            name='DCIP'
                                           
                                            type="text" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                    <div>
                                        <label htmlFor="">MCV</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                            name='MCV'
                                          
                                            type="text" />
                                    </div>
                                    <div className='xl:pl-[10px]'>
                                        <label htmlFor="">MCH</label>
                                        <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                            name='MCH'
                                           
                                            type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <label htmlFor="">Hb Typing</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px] bg-white'
                                    name='Hb_typing'
                                  
                                    type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-[40px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">PCR</label>
                        </div>
                        <div className='pl-[10px] mt-[10px]'>
                           
                                <div  className='xl:flex xl:items-center'>
                                    <input
                                        type="radio"
                                        name='pcr'
                                     
                                    />
                                    <label className='ml-[5px] mr-[5px]' htmlFor="pcr"></label>
                                  
                                        <div>
                                            <label htmlFor="">ระบุ</label>
                                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                                name='pcr_other'
                                              
                                                type="text" />
                                        </div>
                                 
                                </div>
                 
                        </div>
                    </div>

                    <div className='mt-[40px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">Cordo</label>
                        </div>
                        <div className='pl-[10px] mt-[10px]'>
                          
                                <div  className='xl:flex xl:items-center'>
                                    <input
                                        type="radio"
                                        name='cordo'
                                        />
                                    <label className='ml-[5px] mr-[5px]' htmlFor="cordo"></label>
                                   
                                        <div>
                                            <label htmlFor="cordo_tr">ผลตรวจ</label>
                                            <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                                name='cordo_tr'
                                              
                                                type="text" />
                                        </div>
                                
                                </div>
                           

                            <div className='mt-[20px]'>
                                <label htmlFor="cordo_other">อื่นๆ</label>
                                <input className='border border-gray-400 p-1 rounded-lg ml-[5px]'
                                    name='cordo_other'
                                    
                                    type="text" />
                            </div>

                            <div className='mt-[10px] flex gap-[20px]'>
                               
                                    <div >
                                        <input name='PG'
                                           
                                            type="radio"
                                         
                                        />
                                        <label className='ml-[5px]' htmlFor="PG"></label>
                                    </div>
                         
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
                                    name='Td_num'
                                  
                                    type="number" placeholder='จำนวณครั้ง' />
                                <span>ครั้ง</span>
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="Td_last_date">ครั้งสุดท้ายวันที่:</label>
                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                    name='Td_last_date'
                                   
                                    type="date" />
                            </div>
                        </div>

                    </div>
                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">ในระหว่างตั้งครรภ์:</label>
                        </div>
                        <div className='pl-[10px] mt-[10px]'>
                        
                                <div className='pt-[5px]'>
                                    <input
                                        type="radio"
                                        name="during_pregnancy"
                                      
                                    />
                                    <label className='ml-[5px]' htmlFor=""></label>
                                 
                                        <div className=' grid grid-cols-1 gap-[10px] mt-[10px] mb-[10px] xl:ml-[20px] xl:mt-[0px] xl:mb-[0px]'>
                                            <div>
                                                <label htmlFor="during_pregnancy_round[]">ครั้งที่1:</label>
                                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_1'  type="date" />
                                            </div>
                                            <div>
                                                <label htmlFor="during_pregnancy_round[]">ครั้งที่2:</label>
                                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_2' type="date" />
                                            </div>
                                            <div>
                                                <label htmlFor="during_pregnancy_round[]">ครั้งที่3:</label>
                                                <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='during_pregnancy_round_3' type="date" />
                                            </div>
                                        </div>
                                
                                </div>
                          
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="">การกระตุ้นวัคซีนในครรภ์:</label>
                        </div>
                        <div className='pl-[10px] mt-[10px]'>
                       
                                <div className='flex items-center'>
                                    <input
                                        name='vaccination_in_pregnancy'
                                    
                                        type="radio" />
                                    <label className='ml-[5px] mr-[5px]' htmlFor="vaccination_in_pregnancy"></label>
                                
                                        <div>
                                            <label htmlFor="">วันที่:</label>
                                            <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]'
                                                type="date" name="vaccination_in_pregnancy_date"
                                              />
                                        </div>
                                   
                                </div>
                           
                            <div className='mt-[10px]'>
                                <div>
                                    <label htmlFor="">Lab 2</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='lab_2' type="date" />
                                </div>
                                <div className='mt-[10px]'>
                                    <label htmlFor="">HCT</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='hct'  type="text" />
                                </div>
                                <div className='mt-[10px]'>
                                    <label htmlFor="">VDRL</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='vdrl'  type="text" />
                                </div>
                                <div className='mt-[10px]'>
                                    <label htmlFor="">H</label>
                                    <input className='border-gray-400 border p-1 rounded-lg bg-white ml-[5px]' name='h' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* กล่อง2 */}

                {/* {vip.map((vip) => (
                <div key={vip.id}>{vip.vip_name}</div>
             ))} */}
            </div >
        </div >
    );
}