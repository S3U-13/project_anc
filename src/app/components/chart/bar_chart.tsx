'use client';
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function BarChart() {
    useEffect(() => {
        if (typeof window !== "undefined") {   // ✅ กัน error SSR
            const options = {
                series: [
                    {
                        data: [21, 22, 10, 28, 16, 21, 13, 30, 20, 10, 15, 16],
                    },
                ],
                chart: {
                    height: 550,
                    type: "bar",
                },
                colors: [
                    "#008FFB", // ฟ้า
                    "#00E396", // เขียวมิ้น
                    "#FEB019", // ส้ม
                    "#FF4560", // แดง
                    "#775DD0", // ม่วง
                    "#546E7A", // เทา
                    "#26a69a", // เขียวเข้ม
                    "#d10ce8", // ชมพูม่วง
                    "#F86624", // ส้มเข้ม
                    "#2E294E", // น้ำเงินเข้ม
                    "#9C27B0", // ม่วงสด
                    "#03A9F4", // ฟ้าอ่อน
                ],
                plotOptions: {
                    bar: {
                        columnWidth: "45%",
                        distributed: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    categories: [
                        "มกราคม",
                        "กุมภาพันธ์",
                        "มีนาคม",
                        "เมษายน",
                        "พฤษภาคม",
                        "มิถุนายน",
                        "กรกฎาคม",
                        "สิงหาคม",
                        "กันยายน",
                        "ตุลาคม",
                        "พฤศจิกายน",
                        "ธันวาคม",
                    ],
                    labels: {
                        style: {
                            fontSize: "12px",
                        },
                    },
                },
            };

            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();

            // ✅ cleanup ป้องกัน chart ซ้ำเวลา re-render
            return () => {
                chart.destroy();
            };
        }
    }, []);
    return (
        <div>
            <div id="chart"></div>
        </div>
    )
}

