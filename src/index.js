time = document.getElementById('time');
date = document.getElementById('date');
year = document.getElementById('year');

showTime = () => {
    t = new Date();
    time.innerText = t.toLocaleTimeString()
}
showDate = () => {
    d = new Date();
    date.innerText = d.toLocaleDateString()
}
setInterval(showTime, 1000);
setInterval(showDate, 1000);

year.innerText = new Date().getFullYear();

//theme
cont = document.getElementById('container');
mode = document.getElementById('mode')
git = document.getElementById('git')
link = document.getElementById('link')

mode.addEventListener('click', () => {
    if(cont.style.backgroundColor != 'white') {
        cont.style.backgroundColor = 'white';
        cont.style.color = 'black';
        mode.style.backgroundColor = 'black';
        mode.style.color = 'white';
        mode.innerText = 'Dark'
        git.style.backgroundColor = 'black';
        link.style.color = 'white';

    } else {
        cont.style.backgroundColor = 'black';
        cont.style.color = 'white';
        mode.style.backgroundColor = 'white';
        mode.style.color = 'black';
        mode.innerText = 'Light'
        git.style.backgroundColor = 'white';
        link.style.color = 'black';
    }
})