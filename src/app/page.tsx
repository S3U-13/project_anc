'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import BarChart from "./components/chart/bar_chart";
import RadialBar from "./components/chart/radial_bar";
import { IoPersonAddSharp, IoPersonRemove, } from "react-icons/io5";
import { TbVaccine } from "react-icons/tb";
import { MdVaccines } from "react-icons/md";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // ถ้าไม่มี token → กลับไป login
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f0ebf8] p-[10px]">
      <Navbar />
      <div className='pt-[10px] bg-[#683cb4] mx-auto rounded-lg mt-[20px]'>
        <div className='bg-white pt-[20px] pb-[20px]'>
          <h1 className='text-center text-2xl'>Dashboard</h1>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div className="mt-[10px]">
          <div className="flex gap-[10px]">
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg p-[20px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl"><span>20</span> คน</p>
                  <h1 className="text-sm text-gray-600">จำนวนการรับ Refer</h1>
                  <p className="text-sm"><span>ประจำเดือน</span> กันยายน</p>
                </div>
                <div className="w-[60px] h-[60px] bg-[#9873d9] rounded-full overflow-hidden flex items-center justify-center mt-[10px]">
                  <IoPersonAddSharp className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg p-[20px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl"><span>20</span> คน</p>
                  <h1 className="text-sm text-gray-600">จำนวนส่งต่อ Refer</h1>
                  <p className="text-sm"><span>ประจำเดือน</span> กันยายน</p>
                </div>
                <div className="w-[60px] h-[60px] bg-[#9873d9] rounded-full overflow-hidden flex items-center justify-center mt-[10px]">
                  <IoPersonRemove className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg p-[20px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl"><span>20</span> คน</p>
                  <h1 className="text-sm text-gray-600">จำนวนการกระตุ้นวัคซีนในครรภ์</h1>
                  <p className="text-sm"><span>ประจำเดือน</span> กันยายน</p>
                </div>
                <div className="w-[60px] h-[60px] bg-[#9873d9] rounded-full overflow-hidden flex items-center justify-center mt-[10px]">
                  <TbVaccine className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg p-[20px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl"><span>20</span> คน</p>
                  <h1 className="text-sm text-gray-600">ฉีดวัคซีนในระหว่างตั้งครรภ์</h1>
                  <p className="text-sm"><span>ประจำเดือน</span> กันยายน</p>
                </div>
                <div className="w-[60px] h-[60px] bg-[#9873d9] rounded-full overflow-hidden flex items-center justify-center mt-[10px]">
                  <MdVaccines className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1256px] h-[560px] p-[10px] rounded-lg shadow-lg bg-white mt-[10px]">
            <h1 className="text-center text-xl">สรุปผลจำนวนเคสANC</h1>
            <BarChart />
          </div>
        </div>
        <div className="w-[700px] h-[690px] bg-white mt-[10px] rounded-lg shadow-lg overflow-hidden p-[10px]">
          <h1 className="text-center text-xl mt-[20px]">แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม</h1>
         <RadialBar/>
        </div>
      </div>
    </div>
  );
}