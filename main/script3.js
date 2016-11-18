//     Создать функцию, которая выдает значение атрибута или ставит его значение.
//
//     Чтение.
//     Что имеется в виду - Допустим есть элемент:
//
//        <titanic style="float:none"></titanic>
//
//        Если передать в функцию 'style' - она должна выдать "float:none"
//
//        <ninja color="black" visibility="hidden"></ninja>
//
//        Если передать в функцию 'color' - она должна выдать "black"
//
//     Установка.
//     Что имеется в виду - Допустим есть элемент:
//
//        <lego></lego>
//
//        Если передать в функцию два параметра - атрибут и значение, то нода должна выглядеть
//
//        <lego style="display:block"></lego>
//
//
//        Если значение этого атрибута уже задано, устанавливается новое значение.
//
//        Было:
//        <chucknorris speed="5"></chucknorris>
//
//        После вызова функции с передачей атрибута и значения (speed Infinity):
//        <chucknorris speed="Infinity"></chucknorris>

       console.log("//Задание №3")
       var ul = document.querySelector('ul');
       var li = document.querySelector('li');

       HTMLElement.prototype.assignAttr = function (attr, val){
           if(arguments.length == 1){
                return this.hasAttribute(attr) ? this.getAttribute(attr) : console.log("element hasn't this attribute");
           } else if(arguments.length == 2){
                return this.setAttribute(attr, val)
           }
       };
       ul.assignAttr('dddfsdsdf');
       console.log(ul.assignAttr("id")); //
       li.assignAttr("style", "color: red;"); // установили атрибут
       li.assignAttr("style", "color: green;"); // установили новое значение атрибута
