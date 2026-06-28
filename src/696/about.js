const ab = document.querySelector('template').content.children[0];
document.getElementById('a').textContent = ab.childNodes[0].textContent;
document.getElementById('t').textContent = ab.querySelector('txt').textContent;
document.getElementById('u').setAttribute('href', ab.querySelector('uri').textContent);
document.getElementById('j').textContent = JSON.parse(ab.querySelector('json').textContent);
