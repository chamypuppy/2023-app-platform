/* 일부 사용자 입력과 챗봇 응답이 포함된 객체를 생성하는 파일 */
const now = new Date();
const hour = String(now.getHours()).padStart(2,"0")
const min = String(now.getMinutes()).padStart(2,"0")
const sec = String(now.getSeconds()).padStart(2,"0")

const week = ["일", "월", "화", "수", "목", "금", "토"]
const day = now.getDay();
week[day];
// console.log(week[day])

const responseObj = {
  hello: "Hey! How are you doing?",
  hey: "Hey! What's Up",
  today: new Date().toDateString(),
  time: new Date().toLocaleTimeString(),
  "현재 시간": new Date().toLocaleTimeString(),
  // "지금 몇시야?": new Date().toLocaleTimeString(),
  // "지금 몇 시야?": `${new Date().toLocaleTimeString()} 이야!`,
  "지금 몇 시야?": `${hour}시 ${min}분 ${sec}초 이야!`,
  "지금 몇 시야?": `${hour}시 ${min}분 ${sec}초 이야!`,
  지금몇시야: `${hour}시 ${min}분 ${sec}초 이야!`,
  "오늘 몇 요일이야?": `${week[day]}요일 이야!`,
  "안녕!": "안녕 커비야~",
  "안녕~": "안녕 커비야~",
  /* 띄어쓰기를 하면 안 되는구나 */
}