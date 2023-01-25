// sessionStorage è una memoria a "breve-termine"
// tutto il contenuto di sessionStorage viene svuotato ogni volta che si chiude il tab
// o la finestra

// sessionStorage.getItem('lastCounterValue') tornerà una stringa o null
let counterValue = parseInt(sessionStorage.getItem("sessionTimer")) || 0;
// devo controllare se esiste nello storage 'lastCounterValue', e se presente
// il valore iniziale di counterValue deve essere preso da lì!
const assignCounterToDOM = function () {
  // qua la definisco
  paragraphReference.innerText = counterValue;
};

const paragraphReference = document.getElementById("counter");
const buttonReference = document.querySelector("button"); // <-- va a prendere il primo elemento con tag <button>

assignCounterToDOM(); // qua la eseguo, la prima volta

const increaseCounter = function () {
  counterValue++;
  // counterValue++ // shorthand per fare la stessa cosa con meno caratteri
  //   counterValue += 1 // altra shorthand per fare di nuovo la stessa cosa
  console.log(counterValue);
  assignCounterToDOM(); // qua la eseguo
  sessionStorage.setItem("sessionTimer", counterValue);
};

const reset = function () {
  counterValue = -1;
};

setInterval(increaseCounter, 1000);
