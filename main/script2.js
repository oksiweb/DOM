// Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.

function insertAfter(newElem, refElem) {
    var parent = refElem.parentNode;
    var next = refElem.nextSibling;
    (next) ? parent.insertBefore(newElem, next) :  parent.appendChild(newElem);
}

  var elem = document.createElement('li');
  elem.innerHTML = 'Read book (этот елемент создан динамически с помощью insertAfter)';
  var elem2 = document.createElement('li');
  elem2.innerHTML = 'Drink tea (этот елемент создан динамически с помощью insertAfter)';

  var list = document.getElementById('list');

  // вставить elem после первого элемента списка <li>Read book</li>
  insertAfter(elem, list.firstElementChild);

  // вставить elem за последним элементом списка <li>Drink tea</li>
  insertAfter(elem2, list.lastElementChild);