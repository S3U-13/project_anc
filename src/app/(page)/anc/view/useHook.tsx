import React from 'react'

export default function useHook() {
  function formatThaiDate(dateString: string) {
    if (!dateString) return "";

    const monthsThai = [
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
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = monthsThai[date.getMonth()];
    const year = date.getFullYear() + 543; // แปลงเป็น พ.ศ.

    return `${day} ${month} ${year}`;
  }
  return (
    {
      formatThaiDate,
    }
  )
}

