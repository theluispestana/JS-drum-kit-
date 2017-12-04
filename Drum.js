function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

var keyClass= document.getElementsByClassName("key");
function playSoundClick() {
      var attribute = this.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key="${attribute}"]`);
      const key = document.querySelector(`div[data-key="${attribute}"]`);
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
      // alert(attribute);
  };
for (var i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener('click', playSoundClick);
  }

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
