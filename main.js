/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e511839f1382339c6523.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/js/imgCreate.js
class Img {
  static create(src, name) {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.alt = 'Загруженный файл';
    imgEl.setAttribute('data-type', 'img/jpeg');
    imgEl.setAttribute('data-name', name);
    imgEl.setAttribute('data-id', 'preview');
    return imgEl;
  }

}
;// CONCATENATED MODULE: ./src/js/controller.js

class Controller {
  constructor(chatWindows) {
    this.chatWindows = chatWindows; // отрисованное окно чата

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
      hours = `0${hours}`; // hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  urlReplacer(st, i) {
    const str = st.slice(i); // if (i === 0) {str = st;}

    /* eslint no-useless-escape: 'off' */

    const match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig); // https?:\/\/\S+/ig;

    /* eslint array-callback-return: ["error", { "allowImplicit": true }] */

    let final = str;
    /* eslint array-callback-return: ["error", { "allowImplicit": true }] */

    match.map(url => {
      // final = final.replace(url, "<a href=\"" + st + "\" target=\"_BLANK\">" + url + '</a>');
      final = final.replace(url, `<a href='${st}' target='_BLANK'>${url}</a>`);
      console.log(this, 'заменяем', url, st, str, final);
      return url;
    });
    return final;
  }

  viewSms(message, item) {
    let img = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const src = img !== '' ? img.src : ' ';
    const classType = img !== '' ? 'message__img' : ' ';
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
      console.log('размер файла', fl.size); // this.viewSms("message message_client",fl.name,img.dataset.type);
      // this.urlReplacer(urlFile.slice(5), urlFile.slice(0,4));

      this.urlReplacer(urlFile, 5);
      const p = this.urlReplacer(urlFile, 5);
      console.log('cсылка ', p); // this.viewSms('message message_client', fl.name, img);

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
    console.log(this); // this.dropbox.classList.remove('hing');
  }

  drop(e) {
    e.stopPropagation();
    e.preventDefault(); // let dt = e.dataTransfer;

    console.log('тянем потянем', e, e.dataTransfer); // let dropFiles = dt.files;

    this.handleFiles(e.dataTransfer.files);
    this.dropbox.classList.remove('hing');
  }

  init() {
    // обработка ввода текста
    const onKey = e => {
      console.log(e.key, e.code);

      if (e.code === 'Enter') {
        // this.linkValid.bind(this);
        this.linkValid();
        this.postMessChat();
      } else {
        this.item += `${e.key}`;
      }
    }; // document.addEventListener('input', () => {


    this.input.addEventListener('input', () => {
      Controller.onKeyChangeTag('[data-type=text]', '[data-type=audio]', false);
    }); // this.input.addEventListener('change', () => {

    document.addEventListener('change', () => {
      Controller.onKeyChangeTag('[data-type=audio]', '[data-type=text]', true);
    });
    document.addEventListener('keydown', onKey); // this.input.addEventListener('keydown', onKey);

    this.input.addEventListener('change', e => {
      console.log('e.target куда клик', e.target); // if (e.target.closest('div').classList.contains('message__footer') ) {

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

    document.addEventListener('paste', e => {
      e.preventDefault();
      const text = (e.originalEvent || e).clipboardData.getData('text/plain');
      this.item += text;
      console.log('вставка чего-то', text, this.item);
      this.input.value = this.item;
    }); // загрузка файлов , показ окна

    document.querySelector('.button.button.clip').addEventListener('click', e => {
      e.preventDefault();
      console.log('загрузка фпйлов', e.target);
      this.dropArea.classList.remove('hidden');
    }); // конец обработчика загрузки
    // this.formInput.click();
    // загрузка файлов , активизация выбора и выбор

    this.formInput.addEventListener('change', evt => {
      // evt.preventDefault();!!!  не нужно, иначе не откроется окно выбора
      console.log('evt.target.files', [...evt.target.files]);
      const files = [...evt.target.files];
      console.log('файлc  массив', files);
      this.handleFiles(files); // закрыть окно загрузки

      this.dropArea.classList.add('hidden');
    });
    /* конец обработчика выбора */
    // drag drop

    this.dropbox.addEventListener('dragenter', this.dragenter.bind(this), false);
    this.dropbox.addEventListener('dragover', this.dragover.bind(this), false);
    this.dropbox.addEventListener('drop', this.drop.bind(this), false);
  } // init


}
;// CONCATENATED MODULE: ./src/js/userInterface.js
class UserInterface {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.storage = {// desk1: [],
      // desk2: [],
      // desk3: [],
    };
  }

  static get markup() {
    return `
    <div class="chat-widget__area">
      <header class="header">
            <div class="message__header">
        
            <div class="avatar">
            </div>
        
            <button class="button__nav" id="id__nav" aria-label="Кнопка nav">
              <span class="span__nav" data-type="dot__menu">
              </span>
              
            </button>
            
            </div>
          
      </header>

            <div class="chat-widget__messages-container">
                <div class="chat-widget__messages" id="chat-widget__messages">
                    <!--
                        Сообщение от робота
                        <div class="message">
                            <div class="message__time">22:10</div>
                            <div class="message__text">Добрый день!</div>
                        </div>
                        Сообщение от клиента
                        <div class="message message_client">
                            <div class="message__time">22:10</div>
                            <div class="message__text">Добрый день!</div>
                        </div>
                    -->
                </div>
            </div>

            <footer class="footer">
            <div class="message__footer">
            <!-- скрепка-->
            <div class="upload__file">
            <button class="button clip">
            <span>
            <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
            </svg>
            </span>
            </button>
            </div>
            
            <!-- текст смс-->
            <input id="chat-widget__input" class="chat-widget__input" placeholder="Введите ваше сообщение">
            <!--<input class="input-field" id="ask" placeholder="Введите сообщение">
            <span class="visually-hidden">Поле ввода сообщения</span>-->
            
            <!-- Аудио-->
            <button class="buttonAsk overlap" id="askMe" aria-label="Кнопка отправки сообщения">
              <span class="" data-type="audio">
                <svg viewBox="0 0 24 24" width="24" height="24" class="">
                <path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z">
                </path>
                </svg>
              </span>

              <!-- Отправка треугольник-->
              <span class="post hidden" data-type="text">
                <svg viewBox="0 0 24 24" width="24" height="24" class="">
                  <path fill="currentColor" d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z">
                  </path>
                </svg>
              </span>

            </button>
            
            </div>
            </footer>

            <!-- Модалка для загрузки файлов-->
            <div id="drop-area" class="modal hidden">
              <form class="my-form">
                <p>Загрузите изображения с помощью диалога выбора файлов или перетащив нужные изображения в выделенную область</p>
                <input type="file" id="fileElem" multiple accept="image/*">
                <label class="button overlap" for="fileElem">Выбрать изображения</label>
              </form>
            </div>

            <!-- Модалки для загрузки файлов-->

            <!-- Модалка для геолокации-->
            <div class="modal hidden">
              <div class="modal-text">
               <h4 class="modal-title">Что-то пошло не так</h4>
                <p class="modal-message">К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную.</p>
              </div>

            <div class="modale-input hidden">
              <h4 class="modal-input-title">Широта и долгота через запятую</h4>
              <input class="modal-input-text" placeholder="00.00, 00.00" required="">

              <div class="modal-input-buttons hidden">
                <div class="input-error hidden">Неверный формат данных</div>
                <button type="button" class="modal-cancel btn">Отмена</button>
                <button type="button" class="modal-ok btn">ОК</button></div>
              </div>
            </div>

            <div class="modal_nav hidden">
            <!--<div class="menu-upload options" data-name="options" style="top: 45px; right: 0px; width: 155px;">-->
              <ul>
              <li><button class="menu-item" data-type="geo">Геолокация</button></li>
              <li><button class="menu-item" data-type="geo">Видеозапись</button></li>
              <!--<li><button class="menu-item" data-type="favorite">Избранное</button></li>-->
              <li><button class="menu-item" data-type="submenu">Категории </button></li>
              <li><button class="menu-item" data-type="delete">Удалить всё</button></li>
              </ul>
          
            </div>
        </div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
  }

}
;// CONCATENATED MODULE: ./src/js/app.js


const chatWindows = new UserInterface(document.querySelector('#chat-id'));
chatWindows.bindToDOM();
const chatBodyController = new Controller(chatWindows);
chatBodyController.init();
// EXTERNAL MODULE: ./src/favicon.ico
var favicon = __webpack_require__(606);
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ })()
;