document.addEventListener('DOMContentLoaded', function() {

  var trackLength = 10; //10 by default
  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  // var player1 = document.querySelectorAll("#player1_strip");
  // var player2 = document.querySelectorAll("#player2_strip");
  var p1Score = 0; 
  var p2Score = 0;
  
  //var raceTable = document.getElementById("racer_table");
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

	function keyStroke(e){
		if (e.keyCode === 69){ //69 is the letter e
			if(p1Score < trackLength){
			move(p1); //calls function to move player
			p1Score ++;
			}
			else{
				alert("Winner is player 1!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
			}
		} 
		else if (e.keyCode === 68){ //68 is the letter d
			if(p2Score < trackLength){
			move(p2);
			p2Score ++;
			}
			else{
				alert("Winner is player 2!");
				document.removeEventListener("keyup",keyStroke,false); //removes the event listener once the game is over
			}
		}
		
		else{
			alert("Invalid key stroke " + e.keyCode);
		}
	}
	
	function setLengthTrack(){
		trackLength = prompt("Please choose the length of the track from 10-20");
	}
	
	function move(player){
		
		var move = document.querySelector(player + " .active");

		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");

	}
	
	function newGame(){
		window.location.href("main.html"); //resets the page 
	}
		

})
