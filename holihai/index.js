var audio = document.createElement("audio");
audio.setAttribute("src", "music.mp3");
audio.loop = true;
muted = "muted";
 audio.play();


let girl = document.querySelector('#girl');
let waterGun = document.querySelector('.water-gun')
let container = document.querySelector('.container')
let boy = document.querySelector('.boy')
girl.addEventListener("click", function hello() {

  waterGun.classList.toggle('rotateItt');
  container.classList.toggle('redBricksBg')

});

boy.addEventListener("click", function hello() {

waterGun.classList.toggle('rotateIt');

container.classList.toggle('colorBg');

});

