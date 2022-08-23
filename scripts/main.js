const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/fundet1.jpg') {
    myImage.setAttribute('src','images/fundet.jpg');
  } else {
    myImage.setAttribute('src','images/fundet1.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Vær sød at give fundet dit navn.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Velkommen til fundets side, ${myName}`;
    }
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Velkommen til fundets side, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }