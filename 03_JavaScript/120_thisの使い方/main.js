document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  ta.animate();
  btn.addEventListener('click', ta.animate.bind(ta));
});

class TextAnimation {
  constructor(el){
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText(){
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(' ', '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate(){
    this.el.classList.toggle('inview');
  }
}