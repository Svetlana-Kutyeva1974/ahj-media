//import png from '../img/location-pin.png';

export default class Img {
  static create(src, name) {
    const imgEl = document.createElement('img');
    //imgEl.src = png;
    imgEl.src = src;
    imgEl.alt = 'Загруженный файл';
    imgEl.setAttribute("data-type", "img/jpeg");
    imgEl.setAttribute("data-name", name);
    imgEl.setAttribute("data-id", "preview");
    //imgEl.classList.add('style-img');
    return imgEl;
  }
}
