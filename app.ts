let btn = document.getElementById('btn') as HTMLElement;
btn.addEventListener('click', table);

function table(e: Event): void {
    let inp = document.getElementById('input') as HTMLInputElement;
    let num = parseInt(inp.value);
    inp.value = "";
    let i = 1;
    let j = 0;
    while (i <= 10 && j < 10) {
        let tab = num * i;
        i++;
        j++;
        let ul = document.getElementById('ul') as HTMLUListElement;
        let list = document.createElement('li');
        list.textContent = num + " + " + j + " = " + tab;
        ul.appendChild(list);
    }
}
