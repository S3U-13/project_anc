'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import BarChart from "./components/chart/bar_chart";

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
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg">

            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg">

            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg">

            </div>
            <div className="w-[306px] h-[120px] rounded-lg bg-white shadow-lg">

            </div>
          </div>
          <div className="w-[1256px] h-[560px] p-[10px] rounded-lg shadow-lg bg-white mt-[10px]">
            <BarChart />
          </div>
        </div>
        <div className="w-[700px] h-[690px] bg-white mt-[10px] rounded-lg shadow-lg">

        </div>
      </div>
    </div>
  );
}