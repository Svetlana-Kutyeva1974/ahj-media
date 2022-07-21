export default class UserInterface {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.storage = {
      // desk1: [],
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
