const chatBody = document.querySelector(".chat__body");
const txtInput = document.querySelector("#chatbot-input");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

/* 엔터로도 메세지 보내는 것이 가능하게 */
txtInput.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
}

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
}

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined 
  // ? "Please trying something else" 
  ? "미안해. 잘 알아듣지 못했어😅" 
  :  responseObj[userInput];
}

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  } /* 사용자의 채팅에 따라 자동 스크롤 */
}