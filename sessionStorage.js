// sessionStorage è una memoria a "breve-termine"
// tutto il contenuto di sessionStorage viene svuotato ogni volta che si chiude il tab
// o la finestra

// sessionStorage.getItem('lastCounterValue') tornerà una stringa o null
let counterValue = parseInt(sessionStorage.getItem("sessionTimer")) || 0;
// devo controllare se esiste nello storage 'lastCounterValue', e se presente
// il valore iniziale di counterValue deve essere preso da lì!
let minutes = parseInt(counterValue / 60) || 0;
let seconds;
if (counterValue && counterValue % 60 > 0) {
  seconds = parseInt(counterValue % 60);
} else {
  seconds = 0;
}
let hours = parseInt(minutes / 3600) || 0;

const assignCounterToDOM = function () {
  // qua la definisco
  paragraphReference.innerText = `${hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })} :${minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })} : ${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
};

const paragraphReference = document.getElementById("counter");
const buttonReference = document.querySelector("button"); // <-- va a prendere il primo elemento con tag <button>

assignCounterToDOM(); // qua la eseguo, la prima volta

const increaseCounter = function () {
  counterValue++;
  seconds++;
  // counterValue++ // shorthand per fare la stessa cosa con meno caratteri
  //   counterValue += 1 // altra shorthand per fare di nuovo la stessa cosa
  console.log(counterValue);
  assignCounterToDOM(); // qua la eseguo
  sessionStorage.setItem("sessionTimer", counterValue);
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
};

const reset = function () {
  counterValue = -1;
  minutes = 0;
  seconds = -1;
  hours = 0;
};

setInterval(increaseCounter, 1000);
