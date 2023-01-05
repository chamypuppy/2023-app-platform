// const a = document.querySelector(".clock");
const h1 = document.querySelector("h1");

function time(){
const now = new Date();
const hour = String(now.getHours()).padStart(2,"0")
const min = String(now.getMinutes()).padStart(2,"0")
// const sec = String(now.getSeconds()).padStart(2,"0")

const nowTime = `${hour}:${min}`

h1.textContent = nowTime; /* 상수 nowTime에 저장한 값을 h1에 textContent로 추가해줄 것이다!*/
}

// console.log(typeof min)

setInterval(time, 1000);