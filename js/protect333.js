let items = document.getElementsByClassName("protect__item");

for (let i = 0; i < items.length; i++) {
  // items[i].style.border = "1px solid blue";
  // items[i].style.border = "1px solid gray";
  items[i].style.border = "1px solid white";

  let clickCount = 0;

  items[i].addEventListener("click", function () {
    console.log(items[i]);
    clickCount += 1;
    console.log(clickCount);
    if (items[i].value == 0 && clickCount == 4) {
      location.href = "home.html"
    } else {
      // alert("비밀번호 오류입니다")
      items[i].innerText = "바보바보"
    }
  });

}


/* 취소 버튼 활성화 */
const cancel = document.getElementById("cancel")

function handleCancel() {
  location.href = "index.html"
}

cancel.addEventListener("click", handleCancel)