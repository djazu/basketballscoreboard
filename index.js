let pointstextHome = document.getElementById('points-home');
let pointstextGuests = document.getElementById('points-guests');
let pointsHome = 0;
let pointsGuests = 0;


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
