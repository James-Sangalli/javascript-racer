document.addEventListener('DOMContentLoaded', function() {

//psuedo code:
	/*
	To improve this code I could include a gauntlet of some kind that if comes into contact with the car will cause it to go back a few steps
	
	Perhaps add a maze? To do this I would need to add td elements in multiple directions

	Include a ford and tesla model S car as players

	Perhaps add something like first player to press X gets a head start

	Perhaps add a random problem? 
	*/
  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  var p1Score = 0; 
  var p2Score = 0;
  var trackLength = 0;

  var snd = new Audio("Skid.mp3"); //plays skid noise when user gets a boost
  var boomSound = new Audio("boom.mp3"); //plays boom sound when car blows
  var endingCheer = new Audio("Applause.mp3"); //ending cheer sound effect when a player wins

  var boost = false; //if player 1 presses x or player 2 presses y they get a 2 step headstart, can only be used once

  setLengthTrack();
  
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

	function keyStroke(e){
		
		console.log(e.keyCode);

		if (boost === false){
			if (e.keyCode === 88){
				move(p1); //DRY!
				move(p1);
				p1Score += 2;
				boost = true;
				snd.play(); //plays skid noise
			}
			else if (e.keyCode === 89){
				move(p2);
				move(p2);
				p2Score += 2;
				boost = true;
				snd.play();
			}
		}

		if (e.keyCode === 69){ //69 is the letter e
			randomObstacle(e.keyCode); //calls this, if collision occurs then the game will stop
			if(p1Score < trackLength){
			move(p1); //calls function to move player
			p1Score ++;
			}
			else if (p1Score >= trackLength){
				endingCheer.play();
				alert("Tesla Won! Woo hoo!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
				newGame();
			}
		} 
		else if (e.keyCode === 68){ //68 is the letter d
			randomObstacle(e.keyCode); //calls this, if collision occurs then the game will stop
			if(p2Score < trackLength){
			move(p2);
			p2Score ++;
			}
			else if (p2Score >=trackLength){
				endingCheer.play();
				alert("Ford won! Elon Will be pissed!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
				newGame();
			}
		}
	}
	
	function setLengthTrack(){
		
		trackLength = prompt("Please choose the length of the track, between 5-15");

		if (trackLength > 15){
			trackLength = 15;
		}
		else if (trackLength < 5){
			trackLength = 5;
		}
		else{
			trackLength = 10; //10 is default
		}
	}

	function randomObstacle(key){

		var obstaclePlace = Math.floor(Math.random() *trackLength);

		if (obstaclePlace === p1Score && key == 88){
			boom.play();
			alert("Oh NO! Your tesla Caught fire! You lose!");
			newGame();
		}

		if (obstaclePlace === p2Score && key == 89){
			boom.play();
			alert("Looks like ford really does == Fix Or Repair Daily, your engine has blown and you lose the race!");
			newGame();
		}
		
		
	}
	
	function move(player){
		var move = document.querySelector(player + " .active");
		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");
	}
	
	function newGame(){
		location.reload(); //resets the page 
	}
		

})
