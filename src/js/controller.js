export default class Controller {
  constructor(chatWindows) {
    this.chatWindows = chatWindows;// отрисованное окно чата
    this.messages = document.querySelector('.chat-widget__messages');
    this.view = document.querySelector('.chat-widget__messages-container');
    this.message = 'message';
    this.item = '';
  }

  static getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;// hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  static getSmsRobot() {
    const words = [
      'Могу ли я Вам чем-нибудь помочь?',
      'Благодарим за обращение в нашу компанию! ',
      'Готовим ответ на Ваш запрос!',
      'Все менеджеры заняты, просьба немного подождать!',
      'Рады новой встрече с Вами!',
      'Хорошего дня!',
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  viewSms(message, item) {
    this.messages.innerHTML += `
    <div class="${message}">
      <div class="message__time">${Controller.getCurrentFormattedTime()}</div>
        <div class="message__text">
          ${item}
       </div>
    </div>
    `;
  }

  init() {
    // обработка ввода текста
    const onKey = (e) => {
      console.log(e.key, e.code);
      if (e.code === 'Enter') {
        this.message += ' message_client';
        this.viewSms(this.message, this.item);
        // this.viewSms('message', Controller.getSmsRobot());
        this.item = '';
        this.message = 'message';
        document.querySelector('.chat-widget__input').value = '';
        this.messages.lastElementChild.scrollIntoView(false);// в конец окна
      } else {
        this.item += `${e.key}`;
      }
    };
    document.addEventListener('keydown', onKey);
  }
  // кнопки
  //
}
