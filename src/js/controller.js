import Img from './imgCreate.js';

export default class Controller {
  constructor(chatWindows) {
    this.chatWindows = chatWindows;// отрисованное окно чата
    this.messages = document.querySelector('.chat-widget__messages'); // контейнер смс
    this.view = document.querySelector('.chat-widget__messages-container'); // надстройка над контейнер смс
    this.buttonAsk = document.querySelector('.buttonAsk');
    this.buttonFooter = document.querySelector('#Askme');
    this.input = document.querySelector('#chat-widget__input');
    this.fileInput = document.querySelector('#fileElem');
    this.dropArea = document.querySelector('#drop-area');
    this.dropbox = document.querySelector('#chat-id');
    this.formInput = document.querySelector('.my-form');
    this.fileLoad = document.querySelector('.button.button.clip');
    this.message = 'message';
    this.item = '';
    this.linkValid.bind(this);
    this.urlReplacer.bind(this);
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

  urlReplacer(st, i) {
    const str = st.slice(i);
    // if (i === 0) {str = st;}

    /* eslint no-useless-escape: 'off' */

    const match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
    // https?:\/\/\S+/ig;
    /* eslint array-callback-return: ["error", { "allowImplicit": true }] */
    let final = str;
    /* eslint array-callback-return: ["error", { "allowImplicit": true }] */
    match.map((url) => {
    // final = final.replace(url, "<a href=\"" + st + "\" target=\"_BLANK\">" + url + '</a>');
      final = final.replace(url, `<a href='${st}' target='_BLANK'>${url}</a>`);
      console.log(this, 'заменяем', url, st, str, final);
      return url;
    });
    return final;
  }

  viewSms(message, item, img = '') {
    const src = (img !== '') ? img.src : ' ';
    const classType = (img !== '') ? 'message__img' : ' ';
    this.messages.innerHTML += `
    <div class="${message}">
      <div class="message__time">${Controller.getCurrentFormattedTime()}</div>
        <div class="message__text">
          ${item}
          <img class="${classType}" src = "${src}">
       </div>
       </div>
    </div>
    `;
  }

  static onKeyChangeTag(tag1, tag2, isT) {
    console.log('имеем', tag1, tag2, isT);
    document.querySelector(tag2).classList.add('hidden');
    document.querySelector(tag1).classList.remove('hidden');
  }

  linkValid() {
    const arr = this.item.split(' ');
    console.log('имеем массив подстрок', arr);
    for (let t = 0; t < arr.length; t++) {
      console.log('подстрока', arr[t], arr[t].includes('https://'));
      if (arr[t].includes('http://') === true || arr[t].includes('https://') === true) {
        arr[t] = this.urlReplacer(arr[t], 0);
        console.log('new dopstring', arr[t], this.item);
      }
    }
    this.item = arr.join(' ');
    console.log('new string', arr, '\n', this.item);
  }

  postMessChat() {
    this.message += ' message_client';

    this.viewSms(this.message, this.item);
    this.item = '';
    this.message = 'message';
    document.querySelector('.chat-widget__input').value = ''; // было так, но с обрабоч на документ
    // this.input.value = '';
    this.messages.lastElementChild.scrollIntoView(false); // в конец окна
    // Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
    // отмена показа "отправить"
  }

  handleFiles(files) {
    console.log('файлc  массив', files);
    /* c onst file = files[0]; */
    /* const file = evt.target.files[0];
    console.log("файл", file);
    if(file !== undefined) {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        console.log("reader rezult",reader.result);
      };
      reader.onerror = function() {
        console.log("reader err",reader.error);
      };
      // const urls = URL.createObjectURL(reader.result);
      const urls = URL.createObjectURL(file);
      console.log("url файлов", urls);
    */
    // cmc отправить с файлом скринщота
    let fl;
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let i = 0; i < files.length; i++) {
      fl = files[i];
      console.log('обработка файла ', i, 'имя файла ', fl.name);
      const urlFile = URL.createObjectURL(fl);
      const img = Img.create(urlFile, fl.name);
      const exp = urlFile.slice(urlFile.length - 3);
      console.log('create img', img);
      console.log('расширение файла', exp);
      console.log('размер файла', fl.size);
      // this.viewSms("message message_client",fl.name,img.dataset.type);
      // this.urlReplacer(urlFile.slice(5), urlFile.slice(0,4));
      this.urlReplacer(urlFile, 5);
      const p = this.urlReplacer(urlFile, 5);
      console.log('cсылка ', p);
      // this.viewSms('message message_client', fl.name, img);

      this.viewSms('message message_client', `${fl.name} ${p}`, img);

      console.log('url этого файла', urlFile);
    }
    this.dropArea.classList.add('hidden');
  }

  /* eslint class-methods-use-this: "error" */

  /* eslint-env es6 */

  dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(this);
    this.dropbox.classList.add('hing');
  }

  dragover(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(this);
    // this.dropbox.classList.remove('hing');
  }

  drop(e) {
    e.stopPropagation();
    e.preventDefault();
    // let dt = e.dataTransfer;
    console.log('тянем потянем', e, e.dataTransfer);
    // let dropFiles = dt.files;
    this.handleFiles(e.dataTransfer.files);
    this.dropbox.classList.remove('hing');
  }

  init() {
    // обработка ввода текста
    const onKey = (e) => {
      console.log(e.key, e.code);
      if (e.code === 'Enter') {
        // this.linkValid.bind(this);
        this.linkValid();
        this.postMessChat();
      } else {
        this.item += `${e.key}`;
      }
    };
    // document.addEventListener('input', () => {
    this.input.addEventListener('input', () => {
      Controller.onKeyChangeTag('[data-type=text]', '[data-type=audio]', false);
    });

    // this.input.addEventListener('change', () => {
    document.addEventListener('change', () => {
      Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
    });

    document.addEventListener('keydown', onKey);
    // this.input.addEventListener('keydown', onKey);

    this.input.addEventListener('change', (e) => {
      console.log('e.target куда клик', e.target);
      // if (e.target.closest('div').classList.contains('message__footer') ) {
      if (!e.target.classList.contains('hidden')) {
        // this.linkValid.bind(this);
        // this.item = this.input.value;
        // отправка в чат
        this.linkValid();
        this.postMessChat();
        Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
      } // if на ввод смс
    }); // click
    // вставка текста из буфера
    document.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.originalEvent || e).clipboardData.getData('text/plain');
      this.item += text;
      console.log('вставка чего-то', text, this.item);
      this.input.value = this.item;
    });

    // загрузка файлов , показ окна
    document.querySelector('.button.button.clip').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('загрузка фпйлов', e.target);
      this.dropArea.classList.remove('hidden');
    }); // конец обработчика загрузки
    // this.formInput.click();

    // загрузка файлов , активизация выбора и выбор
    this.formInput.addEventListener('change', (evt) => {
      // evt.preventDefault();!!!  не нужно, иначе не откроется окно выбора
      console.log('evt.target.files', [...evt.target.files]);
      const files = [...evt.target.files];
      console.log('файлc  массив', files);
      this.handleFiles(files);
      // закрыть окно загрузки
      this.dropArea.classList.add('hidden');
    }); /* конец обработчика выбора */
    // drag drop
    this.dropbox.addEventListener('dragenter', this.dragenter.bind(this), false);
    this.dropbox.addEventListener('dragover', this.dragover.bind(this), false);
    this.dropbox.addEventListener('drop', this.drop.bind(this), false);
  } // init
}
