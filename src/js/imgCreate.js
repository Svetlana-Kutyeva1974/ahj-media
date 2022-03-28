import png from '../img/location-pin.png';

export default class Img {
  static create() {
    const imgEl = document.createElement('img');
    imgEl.src = png;
    imgEl.alt = 'Загруженный файл';
    imgEl.classList.add('style-img');
    return imgEl;
  }
}
