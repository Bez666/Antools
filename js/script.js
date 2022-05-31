/* let wrapper = document.querySelectorAll('.wrapper');

let button = document.querySelector('.input__button');
let btnWrapper = document.querySelector('.button__wrapper');
let search = document.querySelector('.input__text');

console.log(wrapper);

let logIn = document.querySelector('.login__text');

button.addEventListener('click', () => {
    console.log(search.value);
    if (search.value != wrapper[0].innerText.indexOf(`${search.value}`)) {
        console.log('work');
        btnWrapper.innerHTML = `<a class="input__button button" href="#most" id="search">Search</a>`;
    };
    console.log(wrapper[0].innerText);
}) */

const title = document.querySelector('.heading__title');

const style = getComputedStyle(title);

const styleHeight = style.height;
console.log(styleHeight);

const parseStyleHeight = parseInt(styleHeight);
console.log(parseStyleHeight);

