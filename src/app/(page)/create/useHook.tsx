
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
        last: "",
        lmp: "",
        edc: "",
        GA: "",//  อายุครรภ์
        HDA: "",//  ประวัติการเเพ้ยา
        DA: "", //  ชื่อยาที่เเพ้
        HR: "", //  HIGH RISK
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
        during_pregnancy_round: "",
        vaccination_in_pregnancy: "",
        vaccination_in_pregnancy_date: "",
        lab_2: "",
        hct: "",
        vdrl: "",
        h: "",
        relationship_group_and_blood_test_results: "",
        relationship_group_and_blood_test_results_date_1: "",
        relationship_group_and_blood_test_results_date_2: "",
        BE: "",
        BE_not_normal_side: "",
        BE_tr: "",
        received_medicine: "",
        //
        name_husband: "",
        age_husband: "",
        ic_card_husband: "",
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setField((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // mock เก็บ localStorage
        const existing = JSON.parse(localStorage.getItem("mockData")) || [];
        const newData = [...existing, field];
        localStorage.setItem("mockData", JSON.stringify(newData));

        router.push("/");
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
    }
}
