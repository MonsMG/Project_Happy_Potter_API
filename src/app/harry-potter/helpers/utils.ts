// src/app/harry-potter/helpers/utils.ts

// ฟังก์ชันสำหรับดึงรหัสสี (Hex) ประจำบ้านฮอกวอตส์
export function getHouseColor(house: string): string {
  if (!house) return '#e2e8f0'; // สีเทาอ่อนสำหรับคนที่ไม่มีบ้าน

  switch (house.toLowerCase()) {
    case 'gryffindor':
      return '#7F0909'; // สีแดงกริฟฟินดอร์
    case 'slytherin':
      return '#0D6217'; // สีเขียวสลิธีริน
    case 'ravenclaw':
      return '#000A90'; // สีน้ำเงินเรเวนคลอ
    case 'hufflepuff':
      return '#EEE117'; // สีเหลืองฮัฟเฟิลพัฟ
    default:
      return '#e2e8f0';
  }
}

// ฟังก์ชันสำหรับจัดการรูปภาพ (บางตัวละคร API ไม่มีรูปมาให้ เราจะใส่รูปพื้นฐานแทน)
export function getCharacterImage(imageUrl: string): string {
  if (imageUrl && imageUrl.trim() !== '') {
    return imageUrl;
  }
  // รูปรองรับกรณีตัวละครนั้นไม่มีรูปภาพ
  return 'https://placehold.co/400x600/2a2a2a/ffffff?text=No+Image';
}
