'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function useHook() {
    const router = useRouter();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/mapAll");
            const json = await res.json();
            setData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // if (!data) return <p>Loading...</p>

    const [field, setField] = useState({
        hn: "",
        patvisit_id: "",
        patreg_id: "",
        para: "",
        g: "",
        p: "",
        a: "",
        last: "",
        lmp: "",
        ma_id: "",
        da_text: "",
        hr_id: "",
        hr_text: "",
        am_id: "",
        gct_1: "",
        gct_2: "",
        hbsag: "",
        vdrl_1: "",
        anti_hiv: "",
        bl_gr: "",
        rh: "",
        hct: "",
        of: "",
        dcip: "",
        mcv: "",
        mch: "",
        hb_typing: "",
        pcr_wife_id: "",
        pcr_text: "",
        cordo_id: "",
        cordo_text: "",
        cordo_other_text: "",
        abortion_id: "",
        td_num: "",
        td_last_date: "",
        tdap_id: "",
        tdap_round_1: "",
        tdap_round_2: "",
        tdap_round_3: "",
        iip_id: "",
        iip_date: "",
        lab_2: "",
        vdrl_2: "",
        h: "",
        bti_value_1_id: "",
        bti_value_2_id: "",
        bti_value_3_id: "",
        bti_value_4_id: "",
        bti_value_5_id: "",
        bti_date: "",
        cbe_value_1_id: "",
        cbe_value_2_id: "",
        cbe_value_3_id: "",
        cbe_value_4_id: "",
        birads_id: "",
        cbe_result: "",
        per_os_id: "",
        husband_name: "",
        husband_age: "",
        husband_id_card: "",
        husband_hn: "",
        husband_tel: "",
        husband_job: "",
        hbsag_husband: "",
        vdrl_husband: "",
        anti_hiv_husband: "",
        bl_gr_husband: "",
        rh_husband: "",
        hct_husband: "",
        of_husband: "",
        dcip_husband: "",
        mcv_husband: "",
        mch_husband: "",
        hb_typing_husband: "",
        pcr_hus_husband: "",
        pcr_hus_id: "",
        anc_id: "",
        usg_id: "",
        ref_in_id: "",
        ref_out_id: "",
        ref_in_choice_id: "",
        ref_out_choice_i: "",
        hos_name: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8000/api/cars`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(field),  // แปลง object เป็น JSON string
            });

            if (!response.ok) {
                throw new Error("เพิ่มข้อมูลไม่สำเร็จ");
            }

            const data = await response.json();

            Swal.fire({
                icon: "success",
                text: "เพิ่มข้อมูลสำเร็จ",
            });

            router.push("/anc");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "เกิดข้อผิดพลาด",
            });
        }
    };
    const [pat, setPat] = useState([
        {
            hn: "1345798",
            first_name: "นาง สมใจ",
            last_name: "สาสม",
            age: "26",
            id_card: "4567892134567",
            address: "1/6 ม.9 ต.ทับไทร อ.โป่งน้ำร้อน จ.จันทบุรี",
            tel: "0945301245",
            occupation: "ครู",
            email: "somjai@gmail.com",
            weight: "50",
            height: "160",
            bp_systolic: "120",
            bp_diastolic: "80",
        },
        {
            hn: "2345671",
            first_name: "นาง ใจดี",
            last_name: "มีสุข",
            age: "29",
            id_card: "9854623167598",
            address: "6/1 ม.8 ต.วัดใหม่ อ.เมือง จ.จันทบุรี",
            tel: "0974561065",
            occupation: "ขายอาหารตามสั่ง",
            email: "jaidee@gmail.com",
            weight: "60",
            height: "160",
            bp_systolic: "110",
            bp_diastolic: "80",
        },
        {
            hn: "4512348",
            first_name: "นาง ชูใจ",
            last_name: "ชูสี",
            age: "23",
            id_card: "65245316844452",
            address: "1/1 ม.4 ต.วัดใหม่ อ.เมือง จ.จันทบุรี",
            tel: "0675642315",
            occupation: "ขายของ",
            email: "chujai@gmail.com",
            weight: "55",
            height: "167",
            bp_systolic: "120",
            bp_diastolic: "79",
        },
    ]);

    const [hnInput, setHnInput] = useState("");

    const handleSearch = () => {
        const found = pat.find((p) => p.hn === hnInput);
        if (found) {
            setField((prev) => ({
                ...prev,
                hn: found.hn || "",
                name_wife: `${found.first_name} ${found.last_name}` || "",
                age_wife: found.age || "",
                id_card_wife: found.id_card || "",
                tel_wife: found.tel || "",
                address: found.address || "",
                occupation_wife: found.occupation || "",
                email_wife: found.email || "",
                weight_wife: found.weight || "",
                height_wife: found.height || "",
                bp_systolic: found.bp_systolic || "",
                bp_diastolic: found.bp_diastolic || "",
            }));
        } else {
            alert("ไม่พบข้อมูล");
            setField({
                hn: "",
                name_wife: "",
                age_wife: "",
                id_card_wife: "",
                tel_wife: "",
                address: "",
                occupation_wife: "",
                email_wife: "",
                weight_wife: "",
                height_wife: "",
                bp_systolic: "",
                bp_diastolic: "",
            });
        }
    };


    useEffect(() => {
        const weight = parseFloat(field.weight_wife);
        const heightCm = parseFloat(field.height_wife);

        if (weight && heightCm) {
            const heightM = heightCm / 100;
            setField((prev) => ({
                ...prev,
                bmi_wife: (weight / (heightM * heightM)).toFixed(2),
            }));
        }
    }, [field.weight_wife, field.height_wife]);

    useEffect(() => {
        if (field.lmp) {
            const lmp = new Date(field.lmp);
            const today = new Date();

            // คำนวณ GA
            const diffTime = today - lmp;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const weeks = Math.floor(diffDays / 7);
            const days = diffDays % 7;

            // คำนวณ EDC (LMP + 280 วัน)
            const edcDate = new Date(lmp);
            edcDate.setDate(edcDate.getDate() + 280);

            setField((prev) => ({
                ...prev,
                GA: `${weeks}`,
                edc: edcDate.toISOString().split("T")[0], // แปลงเป็น yyyy-mm-dd
            }));
        }
    }, [field.lmp]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value); // ดูว่ากดแล้วได้ค่าไหม
        setField((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));
    };

    const allowDateIds = ["18", "19"];

    const handleCheckboxChange = (e, fieldName) => {
        const { value, checked } = e.target;

        setField((prev) => {
            const currentValues = Array.isArray(prev[fieldName]) ? prev[fieldName] : [];

            const updated = checked
                ? [...currentValues, value]
                : currentValues.filter((v) => v !== value);

            return { ...prev, [fieldName]: updated };
        });
    };

    // handle date
    const handleDateChange = (e, id) => {
        const { value } = e.target;
        setField((prev) => ({
            ...prev,
            bti_date: {
                ...prev.bti_date,
                [id]: value,
            },
        }));
    };

    const handleCheckboxChange2 = (e, fieldName) => {
        const { value, checked } = e.target;
        setField(prev => {
            const currentValues = Array.isArray(prev[fieldName]) ? prev[fieldName] : [];

            const updated = checked
                ? [...currentValues, value]       // ถ้าเลือก → push ค่าใหม่
                : currentValues.filter(v => v !== value); // ถ้า uncheck → ลบออก

            return { ...prev, [fieldName]: updated };
        });
    }

    return {
        field,
        setField,
        router,
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
    }
}
