const body = document.getElementsByTagName('body')[0];
const item = document.getElementsByClassName('item')[0];
const flow = document.getElementsByClassName('flow')[0];

let picturelink = ['https://cdn.dribbble.com/userupload/14694730/file/original-66c26272d01294a608a475f6c0adfd47.png?format=webp&resize=400x300&vertical=center','https://cdn.dribbble.com/userupload/14735473/file/original-cb8d456e80037fda2b6faecda1f4f367.jpg?format=webp&resize=400x300&vertical=center'];

const createitem = (param) =>{
    const image = document.createElement('img');
    image.className = 'img'
    image.src = param;
    item.appendChild(image);
    return item;
}

const putin = (param) =>{
    flow.appendChild(createitem(param))
}

for(let i=0; i<picturelink.length; i++)
    {
        putin(picturelink[i])
    }