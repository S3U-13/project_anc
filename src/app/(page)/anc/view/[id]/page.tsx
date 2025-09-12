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
    const showOrDash = (val) => {
        if (val == null) return "-";               // null หรือ undefined
        if (String(val).trim() === "") return "-"; // ว่างหรือช่องว่าง
        return val;
    };

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
                        <label className='mr-[5px] text-xl' htmlFor="-">ANC NO:</label>
                        <div className='border-gray-400 border bg-white p-1 rounded-lg mr-[5px] w-[80px]'>
                            <h1 className='text-center'>{field?.anc_no || "-"}</h1>
                        </div>
                    </div>
                    <div className='mt-[20px] bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                        <div className='grid grid-cols-1 gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">HN:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] md:w-[300px] xl:w-[238px] rounded-lg bg-white'>
                                    {field.hn_wife || "-"}
                                </div>
                            </div>
                            <div className='xl:flex xl:items-center'>
                                <label htmlFor="-">ชื่อ-นามสกุล:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[350px] lg:w-[450px] xl:w-[400px] bg-white'>
                                    {field.name_wife || "-"}
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">อายุ:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white text-center'>
                                    {field.age_wife || "-"}
                                </div>
                                <span className='ml-[5px]'>ปี</span>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="-">หมายเลขบัตรประชาชน:</label>
                                <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[299px] lg:w-[350px] xl:w-[450px] bg-white'>
                                    {field.id_card_wife || "-"}
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] xl:flex '>
                            <label className='w-[40px] mt-[5px]' htmlFor="-">ที่อยู่:</label>
                            <div className='border-gray-400 border p-1 w-full rounded-lg h-[120px] bg-white'>
                                {field.address || "-"}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">เบอร์โทรที่ติดต่อได้:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[250px] lg:w-[250px] xl:w-[264px] bg-white'>
                                    {field.tel_wife || "-"}
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="-">อาชีพ:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-full md:w-[350px] xl:w-[314px] bg-white'>
                                    {field.occupation_wife || "-"}
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] md:flex md:items-center'>
                            <label className='w-[55px]' htmlFor="-">E-mail:</label>
                            <div className='w-full border-gray-400 border p-1 ml-[5px] rounded-lg md:w-[400px] lg:w-[500px] xl:w-full  bg-white'>
                                {field.email_wife || "-"}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-2 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">น้ำหนัก:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'>
                                    {field.weight_wife || "-"}
                                </div>
                                <span>กก.</span>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="-">ส่วนสูง:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] bg-white mr-[5px] text-center'>{field.height_wife || "-"}</div>
                                <span>ซม.</span>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="-">BMI:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'>{field.bmi_wife || "-"}</div>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="-">ความดันโลหิต:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[80px] bg-white mr-[5px] text-center'>
                                    {field.bp_systolic || "-"}/{field.bp_diastolic || "-"}
                                </div>
                                <span>มล./ปรอท</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-[30px] gap-[30px] md:grid md:grid-cols-3  lg:grid lg:grid-cols-4 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">PARA:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.para || "-"}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="-">G:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.g || "-"}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="-">P:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.p || "-"}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="-">A:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.a || "-"}
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center '>
                                <label htmlFor="-">Last:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[60px] xl:w-[80px] bg-white text-center'>
                                    {field.last || "-"}
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[30px] gap-[30px] lg:grid lg:grid-cols-1 xl:flex xl:items-center xl:gap-[37px] '>
                            <div className='flex items-center'>
                                <label htmlFor="-">LMP:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'>
                                    {formatThaiDate(field.lmp) || "-"}
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <label htmlFor="-">EDC:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[195px] bg-white mr-[5px]'>
                                    {formatThaiDate(field.edc) || "-"}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="-">อายุครรภ์:</label>
                                <div className='border-gray-400 border p-1 ml-[5px] rounded-lg w-[100px] bg-white mr-[5px] text-center'>
                                    {field.GA || "-"}
                                </div>
                                <span>สัปดาห์</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                        <label className='text-xl' htmlFor="-">ประวัติการเเพ้ยา:</label>
                    </div>
                    <div className='flex gap-[10px] items-center mt-[10px]'>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                            <div className='flex gap-[5px]'>
                                <label htmlFor="-">ประวัติการเเพ้ยา:</label>
                                <h1>{field.HDA || "-"}</h1>
                            </div>
                        </div>
                        {field.HDA === "เคย" && (
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <p>ชื่อยาที่เคยเเพ้:</p>
                                    <span>{field.DA || "-"}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] mt-[40px]'>
                        <label className='text-xl' htmlFor="-">HIGH RISK:</label>
                    </div>
                    <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                        <div className='flex gap-[5px]'>
                            <label htmlFor="-">HIGH RISK:</label>
                            <h1>{field.HR || "-"}</h1>
                        </div>
                    </div>
                    {field.HR === "ใช่" && (
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] mt-[10px] rounded-sm'>
                            <div className='flex items-center gap-[5px]'>
                                <p>ระบุ:</p>
                                <span>{field.HR_other || "-"}</span>
                            </div>

                        </div>
                    )}
                    <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] mt-[40px]'>
                        <label className='text-xl' htmlFor="-">แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม:</label>
                    </div>
                    <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                        <div className='flex gap-[5px]'>
                            <label htmlFor="-">แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม:</label>
                            <h1 >{field.amnio_for_karyotype || "-"}</h1>
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                            <h1 className='text-xl'>ค่า Lab</h1>
                            <div className='grid grid-cols-1 gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center bg-white p-[20px] xl:p-[0] xl:bg-white/0 rounded-lg mt-[10px]'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">GCT 1:</label>
                                        <h1>{field.gct_1 || "-"}</h1>
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">GCT 2:</label>
                                        <h1>{field.gct_2 || "-"}</h1>
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">OGTT 1:</label>
                                        {field.ogtt_1 || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">OGTT 2:</label>
                                        {field.ogtt_2 || "-"}
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">HbsAg:</label>
                                        {field.HbsAg || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">VDRL:</label>
                                        {field.VDRL || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">Anti HIV:</label>
                                        {field.anti_hiv || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">BI.gr:</label>
                                        {field.BI_gr || "-"}
                                    </div>
                                </div>
                            </div>

                            <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">Rh:</label>
                                        {field.Rh || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">Hct:</label>
                                        {field.Hct || "-"} %
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">OF:</label>
                                        {field.OF || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">DCIP:</label>
                                        {field.DCIP || "-"}
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">MCV:</label>
                                        {field.MCV || "-"}
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">MCH:</label>
                                        {field.MCH || "-"}
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[20px]'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">Hb Typing:</label>
                                    {field.Hb_typing || "-"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[40px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">PCR</label>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">PCR:</label>
                                    {field.pcr || "-"}
                                </div>
                            </div>
                            {field.pcr === "ใช่" && (
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <p>ระบุ:</p>
                                        <span>{field.pcr_other || "-"}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-[40px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">Cordo</label>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">Cordo:</label>
                                    {field.cordo || "-"}
                                </div>
                            </div>
                            {field.cordo === "ใช่" && (
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <p>ผลตรวจ:</p>
                                        <span>{field.cordo_tr || "-"}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='flex items-center gap-[10px] mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <p>อื่นๆ:</p>
                                    <span>{field.cordo_other || "-"}</span>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <span>{field.PG || "-"}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <h1 className='text-xl'>วัคซีนบาดทะยัก ก่อนตั้งครรภ์</h1>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">เคยฉีด:</label>
                                    {field.Td_num || "-"} ครั้ง
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <p>ครั้งสุดท้ายวันที่:</p>
                                    <span>{formatThaiDate(field.Td_last_date) || "-"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">ในระหว่างตั้งครรภ์:</label>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-[350px] p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">ในระหว่างตั้งครรภ์:</label>
                                    {field.during_pregnancy || "-"}
                                </div>
                            </div>
                            {field.during_pregnancy === "ฉีดวัคซีน" && (
                                <div className='bg-white border border-gray-300 p-[10px] w-full pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <p>ครั้งที่1:</p>
                                        <span>{formatThaiDate(field.during_pregnancy_round_1) || "-"}</span>
                                        <p>ครั้งที่2:</p>
                                        <span>{formatThaiDate(field.during_pregnancy_round_2) || "-"}</span>
                                        <p>ครั้งที่3:</p>
                                        <span>{formatThaiDate(field.during_pregnancy_round_3) || "-"}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">การกระตุ้นวัคซีนในครรภ์:</label>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">การกระตุ้นวัคซีนในครรภ์:</label>
                                    {field.vaccination_in_pregnancy || "-"}
                                </div>
                            </div>
                            {field.vaccination_in_pregnancy === "กระตุ้นครรภ์นี้" && (
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <p>วันที่:</p>
                                        <span>{formatThaiDate(field.vaccination_in_pregnancy_date) || "-"}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='mt-[10px] flex items-center gap-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">Lab 2:</label>
                                    {field.lab_2 || "-"}
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">HCT:</label>
                                    {field.hct || "-"}
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">VDRL:</label>
                                    {field.vdrl || "-"}
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">H:</label>
                                    {field.h || "-"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* กล่อง2 */}
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">กลุ่มสัมพันธ์ เเละ ฟังผลเลือด:</label>
                        </div>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                            {field.relationship_group_and_blood_test_results?.length ? (
                                field.relationship_group_and_blood_test_results.map((RgAbTr, index) => (
                                    <div key={index} className='flex items-center gap-[5px]'>
                                        <p>{RgAbTr.length}</p>
                                        {/* เช็คว่ามีวันที่ตรงกับ key ของ RgAbTr ไหม */}
                                        {field.relationship_group_and_blood_test_results_date[RgAbTr] && (
                                            <h1>
                                                วันที่: {formatThaiDate(field.relationship_group_and_blood_test_results_date[RgAbTr])}
                                            </h1>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>-</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className='mt-[20px]'>
                            <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                                <label className='text-xl' htmlFor="-">ตรวจเต้านม,หัวนม:</label>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                                {field.BE?.length ? (
                                    field.BE.map((BE, index) => (
                                        <div key={index} className='flex items-center gap-[5px]'>
                                            <p>{BE}:</p>

                                            {/* เช็คว่ามีวันที่ตรงกับ key ของ RgAbTr ไหม */}
                                            {BE === 'ไม่ปกติ' && (
                                                <h1>
                                                    {field.BE_not_normal_side}
                                                </h1>
                                            )}
                                            {BE === 'ANC Pap smear' && (
                                                <h1>
                                                    ผลตรวจ {field.BE_tr}
                                                </h1>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p>-</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">ได้รับยา:</label>
                        </div>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                            <div className='flex gap-[5px]'>
                                <label htmlFor="-">ได้รับยา:</label>
                                {field.received_medicine || "-"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-lg pt-[30px] pb-[30px] mt-[20px] pr-[20px] pl-[20px] shadow-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='bg-gray-100 border-gray-400 border-t-2 p-[10px] pt-[20px] pb-[20px] xl:p-[20px] rounded-b-lg '>
                        <div className='xl:flex xl:items-center xl:gap-[37px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">ชื่อสามี:</label>
                                    <h1>{field.name_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">อายุ:</label>
                                    <h1>{field.age_husband || "-"} ปี</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[10px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">บัตรประชาชน:</label>
                                    <h1>{field.id_card_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">HN:</label>
                                    <h1>{field.hn_husband || "-"}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[10px] pb-[20px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[37px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">เบอร์โทรที่ติดต่อได้:</label>
                                    <h1>{field.tel_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">อาชีพ:</label>
                                    <h1>{field.occupation_husband || "-"}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">HbsAg:</label>
                                    <h1>{field.HbsAg_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">VDRL:</label>
                                    <h1>{field.VDRL_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">Anti HIV:</label>
                                    <h1>{field.anti_hiv_husband || "-"}</h1>
                                </div>
                            </div>
                        </div>
                        <div className=' rounded-lg grid grid-cols-1 mt-[10px] gap-[10px] md:grid md:grid-cols-2 md:gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">BI.gr:</label>
                                    <h1>{field.BI_gr_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">Rh:</label>
                                    <h1>{field.Rh_husband || "-"}</h1>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex items-center gap-[5px]'>
                                    <label htmlFor="-">Hct:</label>
                                    <h1>{field.Hct_husband || "-"} %</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[20px] xl:border-t xl:border-gray-400'>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">OF:</label>
                                        <h1>{field.OF_husband || "-"}</h1>
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">DCIP:</label>
                                        <h1>{field.DCIP_husband || "-"}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-[10px] gap-[10px] xl:flex xl:gap-[37px] xl:items-center xl:mt-[20px] bg-white xl:bg-white/0 p-[20px] xl:p-[0] rounded-lg'>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">MCV:</label>
                                        <h1>{field.MCV_husband || "-"}</h1>
                                    </div>
                                </div>
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <label htmlFor="-">MCH:</label>
                                        <h1>{field.MCH_husband || "-"}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[20px]'>
                            <div className='flex items-center gap-[5px]'>
                                <label htmlFor="-">Hb Typing:</label>
                                <h1>{field.Hb_typing_husband || "-"}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[40px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-xl' htmlFor="-">PCR</label>
                        </div>
                        <div className='flex gap-[10px] items-center mt-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                <div className='flex gap-[5px]'>
                                    <label htmlFor="-">PCR:</label>
                                    {field.pcr_husband || "-"}
                                </div>
                            </div>
                            {field.pcr_husband === "ใช่" && (
                                <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm'>
                                    <div className='flex items-center gap-[5px]'>
                                        <p>ระบุ:</p>
                                        <span>{field.pcr_other_husband || "-"}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-lg' htmlFor="-">ฝากครรภ์ตามเกณฑ์</label>
                        </div>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                            <div className='flex gap-[5px]'>
                                <label htmlFor="-">ฝากครรภ์ตามเกณฑ์:</label>
                                {field.prenatal_care_according_to_criteria || "-"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-lg' htmlFor="-">ตรวจสอบความครบถ้วนของบริการ ตามช่วงอายุครรภ์</label>
                        </div>
                        <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                            <div className='flex gap-[5px]'>
                                <label htmlFor="-">ตรวจสอบความครบถ้วนของบริการ ตามช่วงอายุครรภ์:</label>
                                {field.ga || "-"}
                            </div>
                        </div>
                    </div>


                </div>
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='mt-[20px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-lg' htmlFor="-">การรับ Refer</label>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                                <div className='flex gap-[5px]'>
                                    {field.Rcvd_ref || "-"}
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                                <div className='flex gap-[5px]'>
                                    {field.Rcvd_ref_choice || "-"}
                                    {field.Rcvd_ref_choice === 'ต่างจังหวัด' && (

                                        <h1>รพช/รพสต: {field.Rcvd_ref_in_province || "-"}</h1>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pr-[20px] pl-[20px] pt-[20px] pb-[20px] bg-white mt-[20px] shadow-lg rounded-lg xl:pr-[60px] xl:pl-[60px]'>
                    <div className='mt-[10px]'>
                        <div className='bg-gray-100 border-b-2 border-gray-300 w-full p-[10px] pl-[20px] pt-[15px]'>
                            <label className='text-lg' htmlFor="-">การส่งต่อ Refer</label>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                                <div className='flex gap-[5px]'>
                                    {field.Fwd_ref || "-"}
                                </div>
                            </div>
                            <div className='bg-white border border-gray-300 w-full p-[10px] pl-[20px] pt-[15px] rounded-sm mt-[10px]'>
                                <div className='flex gap-[5px]'>
                                    {field.Fwd_ref_choice || "-"}
                                    {field.Fwd_ref_choice === 'ต่างจังหวัด' && (
                                        <h1>รพช/รพสต: {field.Fwd_ref_in_province || "-"}</h1>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {vip.map((vip) => (
                <div key={vip.id}>{vip.vip_name}</div>
             ))} */}
            </div >
        </div >
    );
}