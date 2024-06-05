const body = document.getElementsByTagName('body')[0];

const createspan = (text) =>{
    const span = document.createElement('span');
    span.innerText = text;
    return span;
}

const render = (arr) => {
    const div = document.createElement('div');
    for(let i=0; i<arr.length; i++)
        {
            div.appendChild(createspan(arr[i]))
        }
    body.appendChild(div);
}




const arr = [['1','2','3','4','5'],['1','2','3','4','5'],['1','2','3','4','5']];

for(let i=0; i<arr.length; i++)
    {
        render(arr[i]);
    }