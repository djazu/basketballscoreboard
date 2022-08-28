let pointstextHome = document.getElementById('points-home');
let pointstextGuests = document.getElementById('points-guests');
let pointsHome = 0;
let pointsGuests = 0;


//********************CLOCK***************************

let nIntervId
                    //SECONDS//
let seconds1 = 0;
let seconds2 = 0;
let second1tag = document.getElementById('seconds1');
let second2tag = document.getElementById('seconds2');
                  //MINUTES//
let minutes1 = 0;
let minutes2 = 0;
let minutes1tag = document.getElementById('minutes1');
let minutes2tag = document.getElementById('minutes2');
let minutes1element = "<span id='minutes1'>0</span>";

//********************CLOCK END************************



//********************FUNCTIONS************************

function addHome1(){
  pointsHome += 1;
  pointstextHome.textContent = pointsHome;
}

function addHome2(){
  pointsHome += 2;
  pointstextHome.textContent = pointsHome;

}

function addHome3(){
  pointsHome += 3;
  pointstextHome.textContent = pointsHome;
}

function addGuests1(){
  pointsGuests += 1;
  pointstextGuests.textContent = pointsGuests;
}

function addGuests2(){
  pointsGuests += 2;
  pointstextGuests.textContent = pointsGuests;
}

function addGuests3(){
  pointsGuests += 3;
  pointstextGuests.textContent = pointsGuests;
}

function resetScore(){
 pointsGuests = 0;
 pointsHome = 0;
 pointstextHome.textContent = pointsHome;
 pointstextGuests.textContent = pointsGuests;
}



/*
**********************************************
*****************CLOCK FUNCTIONS**************
**********************************************
*/

function addToSeconds(){
  seconds1 +=1;
  second1tag.textContent = seconds1;
  seconds2 = 0;
  if (seconds1 == 6) {
    addToMinutes();
    seconds1 = 0;
    second1tag.textContent = seconds1;
  }
}

function addToMinutes(){
  console.log('here is addToMinutes function and the seconds1 is : ' + seconds1);
    minutes2 += 1;
    if (minutes2 >= 10) {
      console.log('its working');
      minutes1tag.textContent = "";
  }
    minutes2tag.textContent = minutes2;


}

function startCount(){
  seconds2 += 1;
  if (seconds2 == 10 ){
    addToSeconds();

  }
  second2tag.textContent = seconds2;
}

function resetClock() {
  seconds1 = 0;
  seconds2 = 0;
  minutes1 = 0;
  minutes2 = 0;
  second1tag.textContent = seconds1;
  second2tag.textContent = seconds2;
  minutes1tag.textContent = minutes1;
  minutes2tag.textContent = minutes2;
  console.log('reset is done');
}
/**********************************************
*********************CLOCK*********************
**********************************************/


function startClock(){
    if (!nIntervId) {
    nIntervId = setInterval(startCount, 1000);
  }
}
function stopClock() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}
