let items = document.getElementsByClassName("protect__item");

// const zero = document.getElementById("zero");


function handleItem(event) {
  console.log(event.target);
  // console.log(typeof event.target.value);

  // let clickCount = 0;

  // clickCount += 1;
  // console.log(clickCount);


  // const eventValue = event.target.value;
  // if (eventValue == 0 && clickCount > 4) {
    // location.href = "home.html"
    // console.log(clickCount);
  // }
}

items[10].addEventListener("click", handleItem);

// item.forEach(function(event){
//   event.addEventListener("click", handleItem);
// });


/* 취소 버튼 활성화 */
const cancel = document.getElementById("cancel")

function handleCancel() {
  location.href = "index.html"
}

cancel.addEventListener("click", handleCancel)