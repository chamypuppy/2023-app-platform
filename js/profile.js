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
      hbdFriendsList.classList.add("hidden__ani");
    }, 200);
  }

  let clickCount = 0;

  cakeIcon.addEventListener("click", function () {
    clickCount += 1;
    // console.log(clickCount);
    const hidden__ani = hbdFriendsList.classList.contains("hidden__ani");
    if (hidden__ani && clickCount < 2) {
      hbdFriendsList.classList.remove("hidden__ani");
    } else {
      hbdFriendsList.classList.add("hidden__ani");
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
  // 
  const hidden = starFriendsList.classList.contains("hidden");
  const categoryUp3 = groupWrapper.classList.contains("category__up3");
  if (hidden && categoryUp3) {
    setTimeout(function () {
      starFriendsList.classList.remove("hidden")
      // starWrapper.classList.remove("category__up");
      groupWrapper.classList.remove("category__up3");
      // hbdFriendsList.classList.add("active2");
    }, 200);
  }
}


let clickCount = 0;

starIcon.addEventListener("click", function () {
  clickCount += 1;
  // console.log(clickCount);
  const hidden__ani = starFriendsList.classList.contains("hidden__ani");
  if (hidden__ani && clickCount < 2) {
    starFriendsList.classList.remove("hidden__ani");
  } else {
    starFriendsList.classList.add("hidden__ani");
  }
})


starIcon.addEventListener("click", handleStar)



// function removeClass() {
//   setTimeout(function () {
//     hbdFriendsList.classList.remove("active")
//     starWrapper.classList.remove("category__up");
//   }, 200);
// }