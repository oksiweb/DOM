//Создать функцию, которая принимает строку селектор и возвращает:
//- undefined - если ничего не найдено
//- найденную ноду - если она одна
//- первую найденную ноду - если их несколько

function findFirst(selector) {
    var find = document.querySelectorAll(selector);
    if(find.length === 0){
        return undefined;
    }else{
        return find[0];
    }
}

console.log("//Задание №1")
console.log(findFirst("table"));
console.log(findFirst("h1"));
console.log(findFirst("li"));
