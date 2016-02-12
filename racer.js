document.addEventListener('DOMContentLoaded', function() {

  var trackLength = 0; //10 by default
  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  var p1Score = 0; 
  var p2Score = 0;

  setLengthTrack();
  
  //var raceTable = document.getElementById("racer_table");
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

	function keyStroke(e){
		if (e.keyCode === 69){ //69 is the letter e
			if(p1Score < trackLength){
			move(p1); //calls function to move player
			p1Score ++;
			}
			else if (p1Score >= trackLength){
				alert("Winner is player 1!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
				newGame();
			}
		} 
		else if (e.keyCode === 68){ //68 is the letter d
			if(p2Score < trackLength){
			move(p2);
			p2Score ++;
			}
			else if (p2Score >=trackLength){
				alert("Winner is player 2!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
				newGame();
			}
		}
		
		else{
			alert("Invalid key stroke " + e.keyCode);
		}
	}
	
	function setLengthTrack(){
		trackLength = parseInt(prompt("Please choose the length of the track, between 5-30"));

		if (trackLength < 5){
			trackLength === 5;
		}
		else if (trackLength > 30){
			trackLength ===30;
		}

		// for(i = 0; i < trackLength.length; i ++){
		// 	trackLength[i] = document.createElement(p1 + "td");
		// 	trackLength[i] = document.createElement(p2 + "td");
		// }
	}
	
	function move(player){

		var move = document.querySelector(player + " .active");

		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");

	}
	
	function newGame(){
		location.reload();; //resets the page 
	}
		

})
