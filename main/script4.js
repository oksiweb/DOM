
//4. С помощью JS создайте шахматное поле:
//    - контейнер поля
//    - 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
//    - ячейки раскрашены белым и черным
//    - нужные атрибуты и стили задавайте с помощью JS





var chessBoard  = document.createElement("div");
    chessBoard.setAttribute("style","width:800px; height:800px; border: 5px solid black;")
var fragment = document.createDocumentFragment();
for (var i=0; i < 64; i++){
    var cell = document.createElement("div");
    cell.setAttribute("style","width:100px; height:100px; float:left;")
    cell.style.background = Math.floor((i / 8) + i) % 2 == 0 ? 'white' : 'black';
    fragment.appendChild(cell);
}
    chessBoard.appendChild(fragment);
    document.body.appendChild(chessBoard);

    console.log("//Задание №4")

    console.log("шахматное поле созано")



