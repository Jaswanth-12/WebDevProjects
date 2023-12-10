var p1score = document.querySelector('#p1score');
var p2score = document.querySelector('#p2score');
var p1btn = document.querySelector('#p1btn');
var p2btn = document.querySelector('#p2btn');
var rbtn = document.querySelector('#resetbtn');
var win_score = document.querySelector('#pong');

var isgameover = false;

p1btn.addEventListener('click', function (e) {
    if (!isgameover) {
        p1score.innerText = parseInt(p1score.innerText) + 1;
        if (p1score.innerText === win_score.value) {
            isgameover = true;
            p1score.classList.add('has-text-primary-dark');
            p2score.classList.add('has-text-danger-dark');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
})

p2btn.addEventListener('click', function (e) {
    if (!isgameover) {
        p2score.innerText = parseInt(p2score.innerText) + 1;
        if (p2score.innerText === win_score.value) {
            isgameover = true;
            p1score.classList.add('has-text-primary-dark');
            p2score.classList.add('has-text-danger-dark');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
})

rbtn.addEventListener('click', function (e) {
    isgameover = false;
    p1score.innerText = 0;
    p2score.innerText = 0;
    p1score.classList.remove('has-text-primary-dark', 'has-text-danger-dark');
    p2score.classList.remove('has-text-primary-dark', 'has-text-danger-dark');
    p1btn.disabled = false;
    p2btn.disabled = false;
})