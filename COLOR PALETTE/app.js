var btn = document.querySelector('#btn')

function randnum() {
    return Math.floor(Math.random() * 255) + 1;
}

function fun() {
    var n = 5;
    while (n--) {
        var n1 = randnum();
        var n2 = randnum();
        var n3 = randnum();
        if (n == 0) {
            btn.parentElement.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
            break;
        }
        var id = `c${n}`
        var p = document.querySelector(`#${id}`);
        p.innerText = `rgb(${n1},${n2},${n3})`;
        var d = document.querySelector(`#d${n}`);
        d.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
    }
}

btn.addEventListener('click', fun)