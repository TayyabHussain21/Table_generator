var btn = document.getElementById('btn');
btn.addEventListener('click', table);
function table(e) {
    var inp = document.getElementById('input');
    var num = parseInt(inp.value);
    inp.value = "";
    var i = 1;
    var j = 0;
    while (i <= 10 && j < 10) {
        var tab = num * i;
        i++;
        j++;
        var ul = document.getElementById('ul');
        var list = document.createElement('li');
        list.textContent = num + " + " + j + " = " + tab;
        ul.appendChild(list);
    }
}
