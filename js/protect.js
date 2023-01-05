const item = document.querySelectorAll(".protect__item");

const handleItem = function(event){

  // console.log("하하ㅇㅇ")
  // console.log(event.target);
  // console.log(event.detail);
  // console.log(typeof event.target.value);

  // const eventValue = event.target.value;
  // if(eventValue == 0) {
  //   location.href = "friends_list.html"
  // }
  // console.log("하하ㅇㅇ")
  console.log(event.target);
  // console.log(typeof event.target.value);
  
  let clickCount = 0;

  item.forEach(function(event){
    event.addEventListener("click", function() {
      clickCount += 1;
      console.log(clickCount);
    });
  });

  const eventValue = event.target.value;
  if(eventValue == 0 && clickCount > 4) {
    // location.href = "home.html"
    console.log(clickCount);
  }
}

item.forEach(function(event){
  event.addEventListener("click", handleItem);
});


/* 취소 버튼 활성화 */
const cancel = document.getElementById("cancel")

function handleCancel(){
  location.href = "index.html"
}

cancel.addEventListener("click", handleCancel)