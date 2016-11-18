//0. Создать функицю, которая принимает строку селектор и возвращает:
//     - undefined - если ничего не найдено
//     - найденную ноду - если она одна
//     - массив нод - если их несколько
//     - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)

function find(selector) {
    if(selector instanceof Node) {
        switch (selector.nodeType) {
            case 1:
                return 'ELEMENT_NODE';
            case 2:
                return 'ATTRIBUTE_NODE';
            case 3:
                return 'TEXT_NODE';
            case 4:
                return 'CDATA_SECTION_NODE';
            case 5:
                return 'ENTITY_REFERENCE_NODE';
            case 6:
                return 'ENTITY_NODE';
            case 7:
                return 'PROCESSING_INSTRUCTION_NODE';
            case 8:
                return 'COMMENT_NODE';
            case 9:
                return 'DOCUMENT_NODE';
            case 10:
                return 'DOCUMENT_TYPE_NODE';
            case 11:
                return 'DOCUMENT_FRAGMENT_NODE';
            case 12:
                return 'NOTATION_NODE';
            default:
                return 'Node';
        }
    }
    var nodeList = document.querySelectorAll(selector);
    if(nodeList.length===0){
        return undefined;
    }else if(nodeList.length===1){
        return nodeList[0];
    }else if(nodeList.length>1){
        return [].map.call(nodeList,function(item){ return item });
    }
}
console.log("//Задание №0")
console.log(find("h2"));
console.log(find("h1"));
console.log(find("li"));
console.log(find("#list"));
console.log(find(document.createComment('comment')));
console.log(find(document.createElement('div')));