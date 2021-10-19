const currentimage = document.querySelector('#image');
const image = ['images/pilt1.jpg','images/pilt2.jpg','images/pilt3.jpg'];

function changeimage() {
    console.log('Hello from script file.');

    let randomNumber = Math.floor(Math.random() * image.length);

    console.log(image[randomNumber]);

    currentimage.src = image[randomNumber];
    
}