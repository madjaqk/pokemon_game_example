$(document).ready(function(){
	//start with this (but feel free to change it however you want!);
	var game = {}

	game.players = [];
	game.deck = [];
		
	game.addPlayer = function(player){
		console.log("AddPlayer function!")
		console.log(player)
		game.players.push(player)
		console.log(game.players)
		return game
	}


	function playerConstructor(name){
	  player = {};
	  player.name = name;
	  player.hand = [];
	  player.addCard = function(card){
	    player.hand.push(card);
	  };
	  return player;
	}
	//example:
	game.addPlayer(playerConstructor('Joe'));
	game.addPlayer(playerConstructor('Sarah'));
	console.log(game);

	// reminder of how to get things using jquery and AJAX!
	$.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
	    game.players[0].hand.push(res)
	  }, "json");

	$.get("http://pokeapi.co/api/v1/pokemon/2/", function(res) {
	    game.players[1].hand.push(res)
	  }, "json");

	function showGame(){
		console.log(game)
		var html_str = "<h1>Player 1: " + game.players[0].name+ "</h1>"
		html_str += "<h1>Player 2: " + game.players[1].name + "</h1>"
		html_str += `<p>${game.players[0].name} chose ${game.players[0].hand[0].name}!</p>`
		html_str += `<p>${game.players[1].name} chose ${game.players[1].hand[0].name}!</p>`
		html_str += "<p>Nothing else happens!</p>"
		$(document).html = html_str
	}

	showGame()
})