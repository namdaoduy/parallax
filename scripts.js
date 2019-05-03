(function(){
  const scene = document.getElementById('scene');
  const parallaxInstance = new Parallax(scene);

  const overlay = document.getElementsByClassName('overlay')[0];
  window.onload = () => {
    overlay.classList.add('faded');
    setTimeout(() => {
      overlay.parentNode.removeChild(overlay);
    }, 2000);
  }
})();