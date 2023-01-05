const cakeIcon = document.querySelector(".cake__icon");
const hbdFriendsList = document.querySelector(".hbd__friends")
const starWrapper = document.querySelector(".star__wrapper");

function handleHidden() {
  setTimeout(function () {
    hbdFriendsList.classList.add("active")
    starWrapper.classList.add("category__up");
  }, 200);
  // 
  const active = hbdFriendsList.classList.contains("active");
  const categoryUp = starWrapper.classList.contains("category__up");
  if(active && categoryUp) {
    setTimeout(function () {
      hbdFriendsList.classList.remove("active")
      starWrapper.classList.remove("category__up");
      hbdFriendsList.classList.add("active2");
    }, 200);
  }

  let clickCount = 0;

  cakeIcon.addEventListener("click", function () {
    clickCount += 1;
    // console.log(clickCount);
    const active2 = hbdFriendsList.classList.contains("active2");
    if(active2 && clickCount < 2) {
      hbdFriendsList.classList.remove("active2");
    } else {
      hbdFriendsList.classList.add("active2");
    }
  })


  // const active2 = hbdFriendsList.classList.contains("active2");

  // if(active2) {
  //   hbdFriendsList.classList.remove("active2");
  // } else {
  //   hbdFriendsList.classList.add("active2");
  // }
}

function removeClass() {
  setTimeout(function () {
    // hbdFriendsList.classList.toggle("active")
    hbdFriendsList.classList.remove("active")
    starWrapper.classList.remove("category__up");
  }, 200);
}

cakeIcon.addEventListener("click", handleHidden)



/* 밑은 클릭 시 네비 푸터 이미지 크기 바뀜 */

const navBtn2 = document.querySelector(".nav__btn2");

function handleNavBtn2() {
  navBtn2.style.width = "100px";
}

navBtn2.addEventListener("click", handleNavBtn2)