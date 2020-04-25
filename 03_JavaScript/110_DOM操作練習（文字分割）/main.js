document.addEventListener('DOMContentLoaded', function(){
  const ta = new TextAnimation('.animate-title');
  setTimeout(() => {
    ta.animate();
  }, 1000);
  // const el = document.querySelector('.animate-title');
  // const str = el.innerHTML.trim().split("");
  // el.innerHTML = str.reduce((acc, curr) => {
  //   curr = curr.replace(' ', '&nbsp;');
  //   return `${acc}<span class="char">${curr}</span>`;
  // }, "");

  // let concatStr = '';
  // for(let c of str) {
  //   c = c.replace(' ', '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`
  // }
  // el.innerHTML = concatStr;
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
  // log() {
  //   console.log(this.el);
  // }
}
// const ta = new TextAnimation('.animate-title');
// ta.log();
// alert(ta.el);