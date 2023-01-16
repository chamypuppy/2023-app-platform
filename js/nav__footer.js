/* 밑은 클릭 시 네비 푸터 이미지 크기 바뀜 */
const navBtn = document.querySelectorAll(".nav__btn");
// const navBtn2 = document.querySelector(".nav__btn2");

navBtn.forEach(navBtn => {
  navBtn.addEventListener('click', e => {
    navBtn.style.width = "100px";
    // navBtn.classList.add("center");
    // e.preventDefault();
  })
})

// function handleNavBtn() {
//   navBtn[i].style.width = "100px";
//   navBtn[i].classList.add("#center")
// }

// navBtn[i].addEventListener("click", handleNavBtn)