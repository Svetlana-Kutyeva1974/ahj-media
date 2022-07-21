export default class Img {
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
