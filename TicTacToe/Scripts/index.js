//var msg = document.getElementById('msg');

document.turn = "X";
alreadyWon="null";
var computer = 0;
var startTime = 0;
var endTime = 0;

function ValueOfClickChange(){
  if(document.turn=="O"){
    document.turn="X";
  }
  else document.turn="O";
}

function startGameComputer(){ // Starts the game with Computer

  computer = 1;
  var date = new Date();
  startTime = date.getTime();
  document.turn = "X";

  var table = document.getElementById("table");
  for(var i=0;i<=2;i++){
    for(var j=0;j<=2;j++){
      table.rows[i].cells[j].innerHTML=""
    }
  }

msg.innerHTML = "It is"+document.turn+" turn !!";
}

function startGame(){ // Starts the game
  var button1 = document.getElementById("button1");
  button1.disabled = true;
  var table = document.getElementById("table");

  computer = 0;
  var date = new Date();
  startTime = date.getTime();
  for(var i=0;i<=2;i++){
    for(var j=0;j<=2;j++){
      table.rows[i].cells[j].innerHTML=""
    }
  }
  var x = Math.floor((Math.random() * 10) + 1);
  if(x<=5){
  document.turn = "O";
  }
    else {
      document.turn = "X";
      }
}

function nextClick(game){
  var catGame=0
var table = document.getElementById("table");
  for(var i=0;i<=2;i++){
    for(var j=0;j<=2;j++){
        if((table.rows[i].cells[j].innerHTML!="")){
          catGame++;
        }
      }
      }
    if(catGame==9){
      var msg = document.getElementById('msg');
      msg.innerHTML = "It is a CatGame, play again !!"
      var button1 = document.getElementById("button1");
      button1.disabled = false;
    }
    else{
  if(computer!=1){
  var msg = document.getElementById('msg');
  msg.innerHTML = "It is"+document.turn+" turn !!"
    if(alreadyWon!="null"){
      msg.innerHTML = document.turn+" already Won!!";
    }
      else if(alreadyWon=="null"){
        if(game.innerHTML==""){
          ValueOfClickChange();
          game.innerHTML = document.turn;
          checkWinner();
        }
        else {
          msg.innerHTML = "Choose another location !!"
        }
      }
    }
else{
  var msg = document.getElementById('msg');
  msg.innerHTML = "It is"+document.turn+" turn !!"
    if(alreadyWon!="null"){
      msg.innerHTML = document.turn+" already Won!!";
    }
      else if(alreadyWon=="null"){
        if(game.innerHTML==""){
          game.innerHTML = document.turn;
            ValueOfClickChange();
            var table = document.getElementById("table");
            var loopBreak = "xyz";
            for(var i=0;i<=2&&isNaN(loopBreak);i++){
              for(var j=0;j<=2&&isNaN(loopBreak);j++){
                if((table.rows[i].cells[j].innerHTML=="")){
              table.rows[i].cells[j].innerHTML= document.turn;
              loopBreak = parseInt(1);
              }
            }
          }
            ValueOfClickChange();
        checkWinner();
        }
      }
    }
  }
  }
function checkWinner(){
  var date = new Date();
  if((table.rows[0].cells[0].innerHTML=="X"
  && table.rows[0].cells[1].innerHTML=="X"
  && table.rows[0].cells[2].innerHTML=="X")||
  (table.rows[0].cells[0].innerHTML=="O"
  && table.rows[0].cells[1].innerHTML=="O"
  && table.rows[0].cells[2].innerHTML=="O")){
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[1].cells[0].innerHTML=="X"
  && table.rows[1].cells[1].innerHTML=="X"
  && table.rows[1].cells[2].innerHTML=="X")||
  (table.rows[1].cells[0].innerHTML=="O"
  && table.rows[1].cells[1].innerHTML=="O"
  && table.rows[1].cells[2].innerHTML=="O")) {
  msg.innerHTML = document.turn+" Won the Game !!";
  endTime = date.getTime();
  alreadyWon="gameover";
  document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
  var button1 = document.getElementById("button1");
  button1.disabled = false;
  return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[2].cells[0].innerHTML=="X"
  && table.rows[2].cells[1].innerHTML=="X"
  && table.rows[2].cells[2].innerHTML=="X")||
  (table.rows[2].cells[0].innerHTML=="O"
  && table.rows[2].cells[1].innerHTML=="O"
  && table.rows[2].cells[2].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[0].innerHTML=="X"
  && table.rows[1].cells[0].innerHTML=="X"
  && table.rows[2].cells[0].innerHTML=="X")||
  (table.rows[0].cells[0].innerHTML=="O"
  && table.rows[1].cells[0].innerHTML=="O"
  && table.rows[2].cells[0].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[1].innerHTML=="X"
  && table.rows[1].cells[1].innerHTML=="X"
  && table.rows[2].cells[1].innerHTML=="X")||
  (table.rows[0].cells[1].innerHTML=="O"
  && table.rows[1].cells[1].innerHTML=="O"
  && table.rows[2].cells[1].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[2].innerHTML=="X"
  && table.rows[1].cells[2].innerHTML=="X"
  && table.rows[2].cells[2].innerHTML=="X")||
  (table.rows[0].cells[2].innerHTML=="O"
  && table.rows[1].cells[2].innerHTML=="O"
  && table.rows[2].cells[2].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[1].innerHTML=="X"
  && table.rows[1].cells[1].innerHTML=="X"
  && table.rows[2].cells[1].innerHTML=="X")||
  (table.rows[0].cells[1].innerHTML=="O"
  && table.rows[1].cells[1].innerHTML=="O"
  && table.rows[2].cells[1].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[0].innerHTML=="X"
  && table.rows[1].cells[1].innerHTML=="X"
  && table.rows[2].cells[2].innerHTML=="X")||
  (table.rows[0].cells[0].innerHTML=="O"
  && table.rows[1].cells[1].innerHTML=="O"
  && table.rows[2].cells[2].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
    endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }
  else if ((table.rows[0].cells[2].innerHTML=="X"
  && table.rows[1].cells[1].innerHTML=="X"
  && table.rows[2].cells[0].innerHTML=="X")||
  (table.rows[0].cells[2].innerHTML=="O"
  && table.rows[1].cells[1].innerHTML=="O"
  && table.rows[2].cells[0].innerHTML=="O")) {
    msg.innerHTML = document.turn+" Won the Game !!";
      endTime = date.getTime();
    alreadyWon="gameover";
    document.getElementById("time").innerHTML =((endTime-startTime)/1000)+"Sec";
    var button1 = document.getElementById("button1");
    button1.disabled = false;
    return (document.turn+" Won the Game !!");
  }

  }
