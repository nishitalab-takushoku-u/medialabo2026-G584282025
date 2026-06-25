function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let aisatsu = 'こんにちは,'+shimei+'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
    console.log(p);
}
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);