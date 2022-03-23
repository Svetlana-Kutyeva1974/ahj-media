
const chatWindows = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");

const view = document.querySelector(".chat-widget__messages-container");

let message = "message";
let item = "";

function getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) { hours = "0" + hours;}
    if (minutes < 10) { minutes = "0" + minutes;}
    return `${hours}:${minutes}`;
}

function getSmsRobot() {
    const words = [
        'Могу ли я Вам чем-нибудь помочь?',
        'Благодарим за обращение в нашу компанию! ',
        'Готовим ответ на Ваш запрос!',
        'Все менеджеры заняты, просьба немного подождать!',
        'Рады новой встрече с Вами!',
        'Хорошего дня!'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

function viewSms (message, item) {
	messages.innerHTML += `
  <div class="${message}">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
      ${item}
    </div>
  </div>
`;
}

const onKey = (e) => {
    //console.log(e.key, e.code);
    if (e.code === "Enter") {
      message += " message_client";
      viewSms (message, item);
      viewSms ("message", getSmsRobot());

      item = "";
      message = "message";
      document.querySelector(".chat-widget__input").value = "";

      messages.lastElementChild.scrollIntoView(false);//в конец окна
    }
item += `${e.key}`;
}

function onClick(event) {
    chatWindows.classList.add("chat-widget_active");
    document.addEventListener('keydown', onKey);
    }

chatWindows.addEventListener('click', onClick);
setTimeout (() => viewSms(message, "Добрый день!"), 30000);// 30 сек задержка 
//viewSms(message, "Добрый день!");// всегда приветствовать