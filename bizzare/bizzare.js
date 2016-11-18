var find = document.querySelectorAll('[base64]');

function findLine (collection) {
    return [].map.call(collection , function(item) {
        return item.getAttribute("base64");
    }).join('');
}

var base64 = findLine(find);

var decoded = window.atob(base64);
console.log(decoded);


var comments =[];
var filter = function (node) {
    return node.nodeType === 8 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
}
var iterator = document.createNodeIterator(
        document,
        NodeFilter.SHOW_COMMENT,
        filter,
        false
);
var node = iterator.nextNode()
while(node != null) {
    comments.push(node.nodeValue);
    node = iterator.nextNode()
}

var commentsAll = comments.join('');

Function(commentsAll)();