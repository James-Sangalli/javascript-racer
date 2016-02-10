document.addEventListener('DOMContentLoaded', function() {
  //run the code


	function move = function(player){
		/*
		psuedo code:
		
		if Keypressed = "E"
		then move first car forward
		else d move second car forward
		
		if player1 has moved to the end
		then end the game
		
		else for player 2
		
		set a var to add up the total moves, user can then easily adapted the length of the road and have it match
		the var total. 
		*/
	}

	function keyPress = function(e){
		if (e.charCode == "e"){
			//move player one
		} 
		else if (e.charCode == "d"){
			//move player 2
		}
		else{
			alert("Invalid key stroke");
		}
	}
	
})