document.addEventListener('DOMContentLoaded', function() {

  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  var p1Score = 0; 
  var p2Score = 0;
  var trackLength = 10; //10 by default
  var obstacleApplies = true;

  var snd = new Audio("Skid.mp3"); //plays skid noise when user gets a boost
  var boom = new Audio("boom.mp3"); //plays boom sound when car blows
  var endingCheer = new Audio("Applause.mp3"); //ending cheer sound effect when a player wins
  var rampCrash = new Audio("crash.mp3");

  var boostTesla = true; //Boost can only be used once, can be used to jump ramp
  var boostFord = true;

  setLengthTrack();
  
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

  function boostCar(player,playerNumber,score, model){

  	obstacleApplies = false;
  	move(player,playerNumber);
  	move(player,playerNumber);
  	score += 2;
  	snd.play();
  	model = false;
  	randomExplosion();

  }

  function moveCar(player,playerNumber,score){

  	obstacleApplies = true;

  	if (score < trackLength){
  		move(player,playerNumber);
  	}
    else if(score >= trackLength){
  		winner(playerNumber);
  	}

  }

	function keyStroke(e){
		console.log(p1Score);

		if (boostTesla === true && e.keyCode === 88){
			boostCar(p1,1,p1Score,boostTesla);
		}

		if (boostFord === true && e.keyCode === 89){
			boostCar(p2,2,p2Score,boostFord);
		}

		if (e.keyCode === 69){ //69 is the letter e
			p1Score++;
			moveCar(p1,1,p1Score);
			
		} 
		else if (e.keyCode === 68){ //68 is the letter d
	 		p2Score++;
	 		moveCar(p2,2,p2Score);
		}
	}

	function obstacleHit(playerNum){
		rampCrash.play();

		if(playerNum == 1){
			alert("Tesla has hit the ramp! Race over!");
		}
		else{
			alert("Ford has hit the ramp! Race over!");
		}
	}
	
	function winner(player){
		endingCheer.play();
		if(player == 1){
			alert("Tesla Won! Woo hoo!");
		}
		else{
			alert("Ford won! Elon Will be pissed!");
		}
		document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
		newGame();
	}

	function setLengthTrack(){
		
		trackLength = prompt("Please choose the length of the track");

		if (trackLength < 10){
			trackLength = 10;
		}

		for (var i = 0; i < trackLength-2; i++){
			$("#player1_strip").append("<td>");
			$("#player2_strip").append("<td>");
		}
	}

	function randomExplosion(){

		var explosion = Math.floor(Math.random() *trackLength);

		if (explosion == p1Score){
			boom.play();
			alert("Oh NO! Your tesla Caught fire! You lose!");
			newGame();
		}

		else if (explosion == p2Score){
			boom.play();
			alert("Looks like ford really does == Fix Or Repair Daily, your engine has blown and you lose the race!");
			newGame();
		}	
		
	}
	
	function move(player ,playerNumber){
		
		var move = document.querySelector(player + " .active");
		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");

		var rampPosition = document.querySelector("#player" + playerNumber + "_strip .obstacle");
		var carPosition = document.querySelector("#player" + playerNumber + "_strip .active");

		if(rampPosition == carPosition && obstacleApplies){
			obstacleHit(playerNumber);
			newGame();
		}

	}
	
	function newGame(){
		location.reload(); //resets the page 
	}		

})