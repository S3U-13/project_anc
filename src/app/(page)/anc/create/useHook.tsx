
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function useHook() {
    const [field, setField] = useState({
        hn_wife: "",
        name_wife: "",
        age_wife: "",
        id_card_wife: "",
        address: "",
        tel_wife: "",
        occupation_wife: "",
        email_wife: "",
        weight_wife: "",
        height_wife: "",
        bmi_wife: "",
        bp_systolic: "",
        bp_diastolic: "",
        para: "",
        g: "",
        p: "",
        a: "",
        last: "",
        lmp: "",
        edc: "",
        GA: "",//  อายุครรภ์
        HDA: "",//  ประวัติการเเพ้ยา
        DA: "", //  ชื่อยาที่เเพ้
        HR: "", //  HIGH RISK
        HR_other: "", //  HIGH RISK
        amnio_for_karyotype: "", //  แนะนำการเจาะน้ำคร่ำตรวจโครโมโซม
        gct_1: "",
        gct_2: "",
        ogtt_1: "",
        ogtt_2: "",
        HbsAg: "",
        VDRL: "",
        anti_hiv: "",
        BI_gr: "",
        Rh: "",
        Hct: "",
        OF: "",
        DCIP: "",
        MCV: "",
        MCH: "",
        Hb_typing: "",
        pcr: "",
        pcr_other: "",
        cordo: "",
        cordo_tr: "",
        cordo_other: "",
        PG: "", //  การตั้งครรภ์
        Td_num: "", //  วัคซีนบาดทะยัก ก่อนตั้งครรภ์
        Td_last_date: "",
        during_pregnancy: "", //ในระหว่างตั้งครรภ์:
        during_pregnancy_round_1: "",
        during_pregnancy_round_2: "",
        during_pregnancy_round_3: "",
        vaccination_in_pregnancy: [],
        vaccination_in_pregnancy_date: "",
        lab_2: "",
        hct: "",
        vdrl: "",
        h: "",
        relationship_group_and_blood_test_results: [],
        relationship_group_and_blood_test_results_date: {},
        BE: [],
        BE_not_normal_side: [],
        BE_tr: "",
        received_medicine: "",
        name_husband: "",
        age_husband: "",
        id_card_husband: "",
        hn_husband: "",
        tel_husband: "",
        occupation_husband: "",
        HbsAg_husband: "",
        VDRL_husband: "",
        anti_hiv_husband: "",
        BI_gr_husband: "",
        Rh_husband: "",
        Hct_husband: "",
        OF_husband: "",
        DCIP_husband: "",
        MCV_husband: "",
        MCH_husband: "",
        Hb_typing_husband: "",
        pcr_husband: "",
        pcr_other_husband: "",
        prenatal_care_according_to_criteria: "",
        ga: "",
        Rcvd_ref: "",
        Rcvd_ref_choice: "",
        Rcvd_ref_in_province: "",
        Fwd_ref: "",
        Fwd_ref_choice: "",
        Fwd_ref_in_province: "",
    });

    const [HDA, setHDA] = useState([
        {
            id: "1",
            hda_name: "เคย"
        },
        {
            id: "2",
            hda_name: "ไม่เคย"
        },
    ]);

    const [HR, setHR] = useState([
        {
            id: "1",
            hr_name: "ไม่ใช่"
        },
        {
            id: "2",
            hr_name: "ใช่"
        },
    ]);

    const [amnio, setAmnio] = useState([
        {
            id: "1",
            amnio_name: "ตรวจ"
        },
        {
            id: "2",
            amnio_name: "ไม่ตรวจ"
        },
        {
            id: "3",
            amnio_name: "รอ"
        },
    ]);

    const [pcr, setPcr] = useState([
        {
            id: "1",
            pcr_name: "ไม่ใช่"
        },
        {
            id: "2",
            pcr_name: "ใช่"
        },
    ]);

    const [cordo, setCordo] = useState([
        {
            id: "1",
            cordo_name: "ไม่ใช่"
        },
        {
            id: "2",
            cordo_name: "ใช่"
        },
    ]);

    const [PG, setPG] = useState([
        {
            id: "1",
            PG_name: "สิ้นสุดการตั้งครรภ์"
        },
        {
            id: "2",
            PG_name: "ตั้งครรภ์ต่อ"
        },
    ]);

    const [duringPregnancy, setDuringPregnancy] = useState([
        {
            id: "1",
            during_pregnancy_name: "ฉีดวัคซีน"
        },
        {
            id: "2",
            during_pregnancy_name: "ไม่ฉีดวัคซีน"
        },
    ]);

    const [vip, setVip] = useState([
        {
            id: "1",
            vip_name: "กระตุ้นครรภ์นี้"
        },
        {
            id: "2",
            vip_name: "ไม่ได้ฉีดในครรภ์นี้"
        },
    ]);

    const [relationship, setRelationship] = useState([
        {
            id: "1",
            relationship_name: "1"
        },
        {
            id: "2",
            relationship_name: "2"
        },
        {
            id: "3",
            relationship_name: "ส่งพบโภชนาการ"
        },
        {
            id: "4",
            relationship_name: "ส่งตรวจฟัน"
        },
        {
            id: "5",
            relationship_name: "ส่งพบนักจิตวิทยา"
        },
    ]);

    const [BE, setBE] = useState([
        {
            id: "1",
            BE_name: "ปกติ"
        },
        {
            id: "2",
            BE_name: "ไม่ปกติ"
        },
        {
            id: "3",
            BE_name: "ตรวจภายใน"
        },
        {
            id: "4",
            BE_name: "ANC Pap smear"
        },
    ]);

    const [BEside, setBEside] = useState([
        {
            id: "1",
            BEside_name: "ซ้าย"
        },
        {
            id: "2",
            BEside_name: "ขวา"
        },
        {
            id: "3",
            BEside_name: "เป็นทั้ง 2 ข้าง"
        },
    ]);

    const [prenatalCare, setPrenatalCare] = useState([
        {
            id: "1",
            prenatal_care_name: "ครบ 6 ครั้ง"
        },
        {
            id: "2",
            prenatal_care_name: "ไม่ครบ"
        },
    ]);

    const [receivedMedicine, setReceivedMedicine] = useState([
        {
            id: "1",
            received_medicine_name: "Iodine"
        },
        {
            id: "2",
            received_medicine_name: "ธาตุเหล็ก"
        },
        {
            id: "3",
            received_medicine_name: "Folic"
        },
    ]);

    const [refChoice, setRefChoice] = useState([
        {
            id: "1",
            ref_choice_name: "ในจังหวัด"
        },
        {
            id: "2",
            ref_choice_name: "ต่างจังหวัด"
        },
    ]);

    const [FwdRefChoice, setFwdRefChoice] = useState([
        {
            id: "1",
            Fwd_ref_choice_name: "ในจังหวัด"
        },
        {
            id: "2",
            Fwd_ref_choice_name: "ต่างจังหวัด"
        },
    ]);

    const [ga, setGa] = useState([
        {
            id: "1",
            ga_name: "น้อยกว่า 12 สัปดาห์"
        },
        {
            id: "2",
            ga_name: "13 สับดาห์ ไปจนถึง 20 สัปดาห์"
        },
        {
            id: "3",
            ga_name: "20 สับดาห์ ไปจนถึง 26 สัปดาห์"
        },
        {
            id: "4",
            ga_name: "26 สับดาห์ ไปจนถึง 32 สัปดาห์"
        },
        {
            id: "5",
            ga_name: "32 สับดาห์ ไปจนถึง 40 สัปดาห์"
        },
    ]);
    
    const [RgAbTr, setRgAbTr] = useState([
        {
            id: "1",
            RgAbTr_name: "1"
        },
        {
            id: "2",
            RgAbTr_name: "2"
        },
        {
            id: "3",
            RgAbTr_name: "ส่งพบโภชนาการ"
        },
        {
            id: "4",
            RgAbTr_name: "ส่งตรวจฟัน"
        },
        {
            id: "5",
            RgAbTr_name: "ส่งพบนักจิตวิทยา"
        },
    ]);

    const router = useRouter();



    const handleSubmit = (e) => {
        e.preventDefault();

        let existing = JSON.parse(localStorage.getItem("mockData")) || [];

        // ✅ สร้าง anc_no 6 หลักอัตโนมัติ
        let nextNo = "000001";
        if (existing.length > 0) {
            const lastNo = existing[existing.length - 1].anc_no;
            const newNo = (parseInt(lastNo, 10) + 1).toString().padStart(6, "0");
            nextNo = newNo;
        }

        const newData = {
            ...field,      // ฟิลด์ที่กรอกจากฟอร์ม
            anc_no: nextNo.toString(), // หมายเลข anc_no
        };

        try {
            if (newData) {
                const updatedData = [...existing, newData];
                localStorage.setItem("mockData", JSON.stringify(updatedData));

                Swal.fire({
                    icon: "success",
                    text: "เพิ่มข้อมูลสำเร็จ",
                });

                router.push("/");
            } else {
                Swal.fire({
                    icon: "warning",
                    text: "เพิ่มข้อมูลไม่สำเร็จ",
                });
            }
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
                hn_wife: found.hn || "",
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
                hn_wife: "",
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

    const allowDateIds = ["1", "2"];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setField((prev) => {
            const updated = checked
                ? [...prev.relationship_group_and_blood_test_results, value]
                : prev.relationship_group_and_blood_test_results.filter((v) => v !== value);

            return { ...prev, relationship_group_and_blood_test_results: updated };
        });
    };

    // handle date
    const handleDateChange = (e, id) => {
        const { value } = e.target;
        setField((prev) => ({
            ...prev,
            relationship_group_and_blood_test_results_date: {
                ...prev.relationship_group_and_blood_test_results_date,
                [id]: value,
            },
        }));
    };

    const handleCheckboxChange2 = (e) => {
        const { value, checked } = e.target;
        setField((prev) => {
            const updated = checked
                ? [...prev.BE, value]
                : prev.BE.filter((v) => v !== value);

            return { ...prev, BE: updated };
        });
    };

    return {
        field,
        setField,
        router,
        handleChange,
        handleSubmit,
        BE,
        BEside,
        FwdRefChoice,
        HDA,
        HR,
        PG,
        amnio,
        cordo,
        pcr,
        duringPregnancy,
        prenatalCare,
        receivedMedicine,
        refChoice,
        relationship,
        vip,
        ga,
        RgAbTr,
        hnInput,
        setHnInput,
        handleSearch,
        handleCheckboxChange,
        handleCheckboxChange2,
        handleDateChange,
        allowDateIds,
    }
}
