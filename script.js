// Transitions //
class Slider {
  constructor(element, xPos, step) {
    this.element = element;
    this.xPos = xPos;
    this.step = step;
  }

  slideLeft() {
    this.xPos -= this.step;
    this.element.style.transform = `translateX(${this.xPos}px)`;
  }

  slideRight() {
    this.xPos += this.step;
    this.element.style.transform = `translateX(${this.xPos}px)`;
  }
}

// Pictures //
function createPicture(w, h, baseURL, id) {
  const instance = document.createElement("div");
  instance.style.width = `${w}px`;
  instance.style.height = `${h}px`;
  instance.style.backgroundImage = `url(${baseURL}${id})`;
  instance.style.objectFit = `contain`;
  return instance;
}

function addPicture(element, width, height, baseURL, id) {
  element.appendChild(createPicture(width, height, baseURL, id));
}

function addManyPictures(element, count, width, height, baseURL) {
  for (let i = 0; i < count; i++) {
    addPicture(element, width, height, baseURL, i);
  }
}

// init
const width = 320;
const height = 180;
const baseURL = `https://picsum.photos/${width}/${height}?random=`;
const count = 9;

const slider = new Slider(document.querySelector(".slider"), 0, width + 16);

// main
document.querySelector(".next").addEventListener("click", () => {
  slider.slideLeft();
});

document.querySelector(".prev").addEventListener("click", () => {
  slider.slideRight();
});

addManyPictures(slider.element, count, width, height, baseURL);
