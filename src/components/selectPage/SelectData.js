function yearDataFunction() {
    const yearData = [];

    for (let i = 2000; i <= 2019; i++) {
        yearData.push({
            value: i, 
            text: i
        });
    }
   return yearData;
}

export const year = yearDataFunction()

export const month = [
    { value: "1",  text: "1" },
    { value: "2",  text: "2" },
    { value: "3",  text: "3" },
    { value: "4",  text: "4" },
    { value: "5",  text: "5" },
    { value: "6",  text: "6" },
    { value: "7",  text: "7" },
    { value: "8",  text: "8" },
    { value: "9",  text: "9" },
    { value: "10",  text: "10" },
    { value: "11",  text: "11" },
    { value: "12",  text: "12" }
]

export const area1 = [
    { value: "서울시",  text: "서울시" },
    { value: "경기도",  text: "경기도" },
    { value: "강원도",  text: "강원도" }
]

export const 서울시 = [
    { value: "종로구", text: "종로구" },
    { value: "중구", text: "중구" },
    { value: "용산구", text: "용산구" },
    { value: "성동구", text: "성동구" },
    { value: "광진구", text: "광진구" },
    { value: "동대문구", text: "동대문구" },
    { value: "중랑구", text: "중랑구"},
    { value: "성북구", text: "성북구" },
    { value: "강북구", text: "강북구" },
    { value: "도봉구", text: "도봉구" },
    { value: "노원구", text: "노원구" },
    { value: "은평구", text: "은평구" },
    { value: "서대문구", text: "서대문구" },
    { value: "마포구", text: "마포구"},
    { value: "양천구", text: "양천구" },
    { value: "강서구", text: "강서구" },
    { value: "구로구", text: "구로구" },
    { value: "금천구", text: "금천구" },
    { value: "영등포구", text: "영등포구" },
    { value: "동작구", text: "동작구" },
    { value: "관악구", text: "관악구" },
    { value: "서초구", text: "서초구" },
    { value: "강남구", text: "강남구" },
    { value: "송파구", text: "송파구" },
    { value: "강동구", text: "강동구" }
]

export const 종로구 = [
    { value: "청운효자동",  text: "청운효자동" },
    { value: "사직동",  text: "사직동" },
    { value: "삼청동",  text: "삼청동" },
    { value: "부암동",  text: "부암동" },
    { value: "평창동",  text: "평창동" },
    { value: "무악동",  text: "무악동" },
    { value: "교남동",  text: "교남동" },
    { value: "가회동",  text: "가회동" },
    { value: "종로1·2·3·4가동",  text: "종로1·2·3·4가동" },
    { value: "종로5·6가동",  text: "종로5·6가동" },
    { value: "이화동",  text: "이화동" },
    { value: "혜화동",  text: "혜화동" },
    { value: "창신1동",  text: "창신1동" },
    { value: "창신2동",  text: "창신2동" },
    { value: "창신3동",  text: "창신3동" },
    { value: "숭인1동",  text: "숭인1동" },
    { value: "숭인2동",  text: "숭인2동" }
]