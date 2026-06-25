function calc() {
    let l = document.querySelector('input[name="left"]');
    let l2 = parseInt(l.value);
    let r = document.querySelector('input[name="right"]');
    let r2 = parseInt(r.value);
    let w = l2+r2;
    let p = document.querySelector('span[id="answer"]');
    p.textContent = w;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', calc);