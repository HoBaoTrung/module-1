function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img id="hero" width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 20;
  }
  this.moveLeft = function () {
    this.left -= 20;
  }
  this.moveTop = function () {
    this.top -= 20;
  }
  this.moveBottom = function () {
    this.top += 20;
  }
}

var hero = new Hero('pikachu.png', 20, 30, 200);


// Điều khiển bằng phím mũi tên
function movePressed(evt) {
  switch (evt.key) {
    case "ArrowRight":
      if (hero.left < window.innerWidth - hero.size) hero.moveRight();
      break;
    case "ArrowLeft":
      if (hero.left > 0) hero.moveLeft();
      break;
    case "ArrowUp":
      if (hero.top > 0) hero.moveTop();
      break;
    case "ArrowDown":
      if (hero.top < window.innerHeight - hero.size) hero.moveBottom();
      break;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

// Chuẩn bị thêm sự kiện keydown
function doReady() {
  window.addEventListener('keydown', movePressed);
}
document.getElementById('game').innerHTML = hero.getHeroElement();
doReady();
