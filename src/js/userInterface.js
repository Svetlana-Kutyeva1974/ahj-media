/* eslint-disable class-methods-use-this */
export default class UserInterface {
  constructor(parentEl) {
    this.parentEl = parentEl;
    // this.title = 'Тематическая подсказка';
    this.storage = {
      // desk1: [],
      // desk2: [],
      // desk3: [],
    };
  }

  static get markup() {
    return `
    <div class="chat-widget__area">
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
            <input id="chat-widget__input" class="chat-widget__input" placeholder="Введите ваше сообщение">
        </div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
  }
}
