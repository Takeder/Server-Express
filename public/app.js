alert('it works');
// По клику на картинку, она менялась на другую, а при повторном клике менялась обратно на первую

let value = document.querySelector('.image');
let oldValue = value.src;
let newValue = 'Img/Cats.jpg';

value.addEventListener('click', () => {
    if (value.src == oldValue) {
        value.src = newValue;
    } else {
        value.src = oldValue;
    }
})

// Добавление параграфа по двойному клику на картинку

let paragraf = document.createElement('p');
let text = document.createTextNode('Hello!');
paragraf.appendChild(text);
value.addEventListener('dblclick', () => {
    value.parentNode.insertBefore(paragraf, value);
    value.parentNode.removeChild(value);
})

// ________________________________________________________________

// Добавление списка LI с названиями из JSON в OL 

fetch('http://127.0.0.1:3000/lis').then(async (res) => {
    let data = await res.json();
    console.log(data)
    let ol = document.querySelector('.list');
    data.forEach(item => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${item.name}`));
        ol.appendChild(li);
    })
})


// ________________________________________________________________________________________________

