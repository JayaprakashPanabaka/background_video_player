let btn = document.querySelector('.switch-btn')
let video = document.querySelector('.video-container')


btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
      btn.classList.add("slide");
      video.pause();
    } else {
      btn.classList.remove("slide");
      video.play();
    }
  });


//preloader

let preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})
