document.addEventListener('DOMContentLoaded', function() {

  var trackLength = 10; //10 by default
  var player1 = document.getElementById("#player1_strip");
  var player2 = document.getElementById("#player2_strip");
  var p1Score = 0; 
  var p2Score = 0;
  
  //var raceTable = document.getElementById("racer_table");
  document.addEventListener("keyup",keyStroke,false); //tracks key strokes

	function keyStroke(e){
		if (e.keyCode === 69){ //69 is the letter e
			if(p1Score < trackLength){
			move(player1); //calls function to move player
			}
			else{
				alert("Winner is player 1!");
			}
		} 
		else if (e.keyCode === 68){ //68 is the letter d
			if(p2Score < trackLength){
			move(player2);
			}
			else{
				alert("Winner is player 2!");
			}
		}
		
		else{
			alert("Invalid key stroke " + e.keyCode);
		}
	}
	
	function setLengthTrack(){
		
	}
	
	function move(player){
		
		var a = $(player).children(".active");
        a.nextElementSibling().addClass("active");
        a.removeClass("active");
		
		/*
		player.nextSibling = player;
		player.removeClass("active");
		player = play.nextSibling;
		*/
		
	}
	
	function newGame(){
		window.location.href("main.html"); //resets the page 
	}
		

})


