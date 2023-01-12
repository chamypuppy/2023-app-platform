const cakeIcon = document.getElementById("cake__icon");
const hbdFriendsList = document.querySelector(".hbd__friends")
const starWrapper = document.querySelector(".star__wrapper");
const groupWrapper = document.querySelector(".group__wrapper");


/* HBD 접기 */
function handleHidden() {
  setTimeout(function () {
    hbdFriendsList.classList.add("hidden")
    starWrapper.classList.add("category__up");
    groupWrapper.classList.add("category__up2");
  }, 200);
  // 
  const hidden = hbdFriendsList.classList.contains("hidden");
  const categoryUp = starWrapper.classList.contains("category__up");
  if (hidden && categoryUp) {
    setTimeout(function () {
      hbdFriendsList.classList.remove("hidden")
      starWrapper.classList.remove("category__up");
      groupWrapper.classList.remove("category__up2");
      hbdFriendsList.classList.add("fade-out");
    }, 200);
  }

  let clickCount = 0;

  cakeIcon.addEventListener("click", function () {
    clickCount += 1;
    // console.log(clickCount);
    const fadeOut = hbdFriendsList.classList.contains("fade-out");
    if (fadeOut && clickCount < 2) {
      hbdFriendsList.classList.remove("fade-out");
    } else {
      hbdFriendsList.classList.add("fade-out");
    }
  })
}

cakeIcon.addEventListener("click", handleHidden)



/* STAR 접기 */
const starIcon = document.getElementById("star__icon");
const starFriendsList = document.querySelector(".star__friends");

function handleStar() {
  setTimeout(function () {
    starFriendsList.classList.add("hidden");
    // starWrapper.classList.add("category__up");
    groupWrapper.classList.add("category__up3");
  }, 200);
  // STAR ICON 반복 클릭이 가능하게
  const hidden = starFriendsList.classList.contains("hidden");
  const categoryUp3 = groupWrapper.classList.contains("category__up3");
  if (hidden && categoryUp3) {
    setTimeout(function () {
      starFriendsList.classList.remove("hidden")
      groupWrapper.classList.remove("category__up3");
      starFriendsList.classList.add("fade-out");
    }, 200);
  }
}


let clickCount = 0;

starIcon.addEventListener("click", function () {
  clickCount += 1;
  // console.log(typeof clickCount);
  const fadeOut = starFriendsList.classList.contains("fade-out");
  if (fadeOut && clickCount == 1) {
    starFriendsList.classList.remove("fade-out");
  } else if (fadeOut && clickCount % 2 == 0) {
    starFriendsList.classList.remove("fade-out");
    // console.log(clickCount);
  } else if (fadeOut && clickCount % 2 == 1) {
    starFriendsList.classList.add("fade-out");
    console.log(clickCount);
  }

  /* 아래는 지워야할 코드 */
  // if (fadeOut && clickCount >= 2) {
  //   starFriendsList.classList.remove("fade-out");
  //   // console.log(clickCount);
  // } else {
  //   starFriendsList.classList.add("fade-out");
  //   console.log(clickCount);
  // }
})


starIcon.addEventListener("click", handleStar)


/* CAKE와 STAR 카테고리가 모두 히든일 경우 
- GROUP 카테고리 위치 */

const HBD__Hidden = hbdFriendsList.classList.contains("hidden");
const STAR__Hidden = starFriendsList.classList.contains("hidden");
const categoryUp4 = document.querySelector(".category__up4");
let frinedsCategoryIcon = document.querySelectorAll(".freinds__category--icon");




frinedsCategoryIcon.forEach(() => {
  if (HBD__Hidden && STAR__Hidden) {
    console.log(바부바붑)
  }
});