const clickHandler = (target) => {
  document
    .querySelector(`audio[data-key="${target.currentTarget.getAttribute('data-key')}"]`)
    .play()
}

const keyUpHandler = (event) => {
  const audio = document
    .querySelector(`audio[data-key="${event.keyCode}"]`)
  const key =  document
    .querySelector(`.key[data-key="${event.keyCode}"]`)

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

const removeTransition = (event) => {
  document
    .querySelector(`.key[data-key="${event.target.dataset.key}"]`)
    .classList.remove('playing')
}
  document
    .querySelectorAll('div.key')
    .forEach((button) => {
      button.addEventListener('click', clickHandler);
      button.addEventListener('transitionend', removeTransition);
    });

  document.addEventListener('keyup', keyUpHandler)
