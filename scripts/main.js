const MyImage = document.querySelector('img');

MyImage.onclick = () => {

    const mySrc = MyImage.getAttribute('src');

    if (mySrc === 'images/moscow.jpg') {
        MyImage.setAttribute('src', 'images/moscow-city.jpg');
    }
    else {
        MyImage.setAttribute('src', 'images/moscow.jpg');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Moscow is cool, ${myName}`;
    }
        
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Moscow is cool, ${storedName}, but you already know ;)`;
}

myButton.onclick = () => {
    setUserName();
}