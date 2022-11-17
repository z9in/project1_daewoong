//sub_2_0.js

let btnEl = document.querySelectorAll('.pop')[0];
let paperEl = document.getElementById('paper');
let closeEl = document.getElementsByTagName('button')[1];

btnEl.addEventListener('click',translate);

function translate() {
    paperEl.style.display='block'
    paperEl.style = {
        'height' : '500px'
    }
}

closeEl.addEventListener('click',() => paperEl.style.display='none');