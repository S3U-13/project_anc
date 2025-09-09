'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
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
                                    {field.lmp}
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="">EDC:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'>
                                    {field.edc}
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

                {/* กล่อง2 */}

                {/* {vip.map((vip) => (
                <div key={vip.id}>{vip.vip_name}</div>
             ))} */}
            </div >
        </div >
    );
}