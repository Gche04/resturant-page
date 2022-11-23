import content1 from './content1';
import content2 from './content2';

function tabNav(selector) {
    const sel = document.querySelector(selector);

    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.setAttribute('id', 'content1');
    button2.setAttribute('id', 'content2');

    button1.innerHTML = "button1";
    button2.innerHTML = "button2";

    sel.appendChild(button1);
    sel.appendChild(button2);

    content1();
}

tabNav("#nav-tab");
document.querySelector('#content1').addEventListener('click', content1);
document.querySelector('#content2').addEventListener('click', content2);