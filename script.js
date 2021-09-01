const name = document.querySelector('.fancy-name');
const strName = name.textContent;
const splitName = strName.split('');
name.textContent = '';

for (let i = 0; i < splitName.length; i++) {
  name.innerHTML += '<span>'+ splitName[i] +'</span>';
}

let character = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = name.querySelectorAll('span')[character];
  span.classList.add('fancy');
  character++;
  if (character === splitName.length) {
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

// nav transition background
const nav = document.querySelector('.landing nav');

const transHeader = () => {
  if (this.scrollY > this.innerHeight / 1.2){
      document.body.classList.add('bg-active');
    }else {
      document.body.classList.remove('bg-active');
    }
}
}
