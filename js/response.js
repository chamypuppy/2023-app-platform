/* 일부 사용자 입력과 챗봇 응답이 포함된 객체를 생성하는 파일 */

const responseObj = {
  hello: "Hey! How are you doing?",
  hey: "Hey! What's Up",
  today: new Date().toDateString(),
  time: new Date().toLocaleTimeString(),
  현재시간: new Date().toLocaleTimeString(),
  지금몇시야: new Date().toLocaleTimeString(),
  /* 띄어쓰기를 하면 안 되는구나 */
}