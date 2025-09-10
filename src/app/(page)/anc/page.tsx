'use client';
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // ถ้าไม่มี token → กลับไป login
    }
  }, [router]);

  // const Data = [1];

  const [field, setField] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mockData")) || [];
    setField(stored);
  }, []);

  console.log(field);

  return (
    <div className="min-h-screen bg-[#f0ebf8] p-[10px]">
      <Navbar />

      <div className='pt-[10px] bg-[#683cb4] mx-auto rounded-lg w-[1600px] mt-[40px]'>
        <div className='bg-white pt-[30px] pb-[30px]'>
          <h1 className='text-center text-2xl sm:text-3xl'>ประวัติผู้ฝากครรภ์</h1>
        </div>
      </div>
      <div className="p-[20px] w-[1600px] bg-white rounded-xl shadow-lg mx-auto mt-[20px]">
        {/* <div className="relative ...">
          <div className="pointer-events-auto absolute ...">
            <svg className="absolute h-5 w-5 text-gray-400">
            </svg>
          </div>
          <input type="text" placeholder="Search" className="border-gray-400 border rounded-lg p-1" />
        </div> */}
        <div className="mb-[10px] mt-[10px] flex justify-end mr-[10px]">
          <a className="bg-[#683cb4] hover:bg-[#492880] p-2 text-white rounded-lg" href="/anc/create">เพิ่มข้อมูล</a>
        </div>

        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-[#c4a6f7] pt-[10px]">
                <th className="p-6 pt-[25px] pb-[25px] rounded-l-xl w-[200px] text-left ">ANC No:</th>
                <th className="p-2 pt-[25px] pb-[25px] w-[200px] text-left">HN:</th>
                <th className="p-2 pt-[25px] pb-[25px] w-[300px] text-left">ชื่อ:</th>
                <th className="p-2 pt-[25px] pb-[25px] text-left">อายุ:</th>
                <th className="p-2 pt-[25px] pb-[25px] text-left">เบอร์โทรศัพท์:</th>
                <th className="p-2 pt-[25px] pb-[25px] text-left">อาชีพ:</th>
                <th className="p-2 pt-[25px] pb-[25px] rounded-r-xl w-[200px]">จัดการ</th>
              </tr>
            </thead>

            {field.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={11} className="text-center text-black p-6 bg-gray-50 rounded-xl">
                    ไม่มีข้อมูล
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {field.map((field, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="p-6 rounded-l-xl">{field.anc_no}</td>
                    <td className="p-2">{field.hn_wife}</td>
                    <td className="p-2">{field.name_wife}</td>
                    <td className="p-2">{field.age_wife}</td>
                    <td className="p-2">{field.tel_wife}</td>
                    <td className="p-2">{field.occupation_wife}</td>
                    <td className="p-2  rounded-r-xl">
                      <div className=" flex items-center gap-[10px] justify-center">
                        <Link
                          href={`/anc/view/${field.anc_no}`}
                          className="bg-gray-200 hover:bg-gray-300 p-1 pr-[20px] pl-[20px] rounded-lg">
                          ดู
                        </Link>
                        <Link
                          href={`/anc/edit/${field.anc_no}`}
                          className="bg-[#ffc107] hover:bg-[#f0b400] p-1 pr-[20px] pl-[20px] rounded-lg">
                          เเก้ไข
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
