/* 밑은 클릭 시 네비 푸터 이미지 크기 바뀜 */

const navBtn2 = document.querySelector(".nav__btn2");

function handleNavBtn2() {
  navBtn2.style.width = "100px";
}

navBtn2.addEventListener("click", handleNavBtn2)