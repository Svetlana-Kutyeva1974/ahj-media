export default class Controller {
  constructor(chatWindows) {
    this.chatWindows = chatWindows;// отрисованное окно чата
    this.messages = document.querySelector('.chat-widget__messages');
    this.view = document.querySelector('.chat-widget__messages-container');
    this.buttonAsk = document.querySelector('.buttonAsk');
    this.input = document.querySelector('#chat-widget__input');
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

  static onKeyChangeTag(tag1, tag2, isT) {
    console.log('имеем', tag1, tag2, isT);
    // if (isT === false) {
    document.querySelector(tag2).classList.add('hidden');
    document.querySelector(tag1).classList.remove('hidden');
    /*
  } else {
      document.querySelector(tag2).classList.add('hidden');
      document.querySelector(tag1).classList.remove('hidden');
      */
    /*
      document.removeEventListener('input', () => {
        Controller.onKeyChangeTag('[data-type=text]', '[data-type=audio]', false);
      });
      */
    // }
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
        // Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
        // отмена показа "отправить"
      } else {
        this.item += `${e.key}`;
      }
    };

    /*
    const onKeyChangeTag = (e, tag1, tag2) => {
      console.log(e.key, e.code);
      console.log('теги', tag1, tag2);
      this.chatWindows.querySelector(tag1).classList.add('hidden');
      this.chatWindows.querySelector(tag2).classList.remove('hidden');
    };
    */

    document.addEventListener('input', () => {
      Controller.onKeyChangeTag('[data-type=text]', '[data-type=audio]', false);
    });

    document.addEventListener('change', () => {
      Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
    });

    document.addEventListener('keydown', onKey);

    document.addEventListener('click', (e) => {
      e.preventDefault();
      // другое условие придумать
      if (!e.target.classList.contains('hidden') && !e.target.classList.contains('chat-widget__input')) {
        // вынести повтор в функцию
        this.message += ' message_client';
        this.viewSms(this.message, this.item);
        // this.viewSms('message', Controller.getSmsRobot());
        this.item = '';
        this.message = 'message';
        document.querySelector('.chat-widget__input').value = '';
        this.messages.lastElementChild.scrollIntoView(false);// в конец окна
        Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
      // остальные кнопки
      }
    });
  }
  // кнопки
  //
}
