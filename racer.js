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
  var trackLength = 10; //10 by default
  var obstacleApplies = true;

  var snd = new Audio("Skid.mp3"); //plays skid noise when user gets a boost
  var boom = new Audio("boom.mp3"); //plays boom sound when car blows
  var endingCheer = new Audio("Applause.mp3"); //ending cheer sound effect when a player wins

  var boost = 0; //if player 1 presses x or player 2 presses y they get a 2 step headstart, can only be used once

  setLengthTrack();
  
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

	function keyStroke(e){

		if (boost < 3){
			obstacleApplies = false;
			if (e.keyCode === 88){
				move(p1,1); //DRY!
				move(p1,1); //parses 3 so it is exempt from obstacle
				p1Score += 2;
				snd.play(); //plays skid noise	
				randomExplosion(); //calls this, if explosion occurs then the game will stop
			}
			else if (e.keyCode === 89){
				move(p2,2);
				move(p2,2);
				p2Score += 2;
				snd.play();
				randomExplosion(); //calls this, if explosion occurs then the game will stop
			}
			boost++;
			
		}

		if (e.keyCode === 69){ //69 is the letter e
			if(p1Score < trackLength){
			move(p1,1); //calls function to move player
			p1Score ++;
			obstacleApplies = true;
			}
			else if (p1Score >= trackLength){
				winner(1);
			}
		} 
		else if (e.keyCode === 68){ //68 is the letter d
			if(p2Score < trackLength){
			move(p2,2);
			p2Score ++;
			obstacleApplies = true;
			}
			else if (p2Score >=trackLength){
				winner(2);
			}
		}
	}

	function obstacleHit(playerNum){
		if(playerNum == 1){
			alert("Tesla hit the obstacle! You lose!");
		}
		else{
			alert("Ford hit, you lose!");
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

		if (explosion == p2Score){
			boom.play();
			alert("Looks like ford really does == Fix Or Repair Daily, your engine has blown and you lose the race!");
			newGame();
		}	
		
	}
	
	function move(player , playerNumber){
		
		var obs = document.querySelector("#player" + playerNumber + "_strip .obstacle");
		var pos = document.querySelector("#player" + playerNumber + "_strip .active");

		var move = document.querySelector(player + " .active");
		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");

		if(obs == pos && obstacleApplies){
			obstacleHit(playerNumber);
			newGame();
		}

	}
	
	function newGame(){
		location.reload(); //resets the page 
	}		

})
