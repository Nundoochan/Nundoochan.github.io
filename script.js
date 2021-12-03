document.addEventListener("DOMContentLoaded", (e) => {
	
	// Card array
	//

	const cards = [
		[
			{
				name: "00000001",
				img: "images/GOOD/00000001/00000001.png",
			},
			{
				name: "00000010",
				img: "images/GOOD/00000010/00000010.png",
			},
			{
				name: "00000100",
				img: "images/GOOD/00000100/00000100.png",
			},
			{
				name: "00001000",
				img: "images/GOOD/00001000/00001000.png",
			},
			{
				name: "00010000",
				img: "images/GOOD/00010000/00010000.png",
			},
			{
				name: "00100000",
				img: "images/GOOD/00100000/00100000.png",
			},
			{
				name: "01000000",
				img: "images/GOOD/01000000/01000000.png",
			},
			{
				name: "10000000",
				img: "images/GOOD/10000000/10000000.png",
			},
		],
		[
			{
				name: "11111110",
				img: "images/BAD/11111110/11111110.png",
			},
			{
				name: "11111101",
				img: "images/BAD/11111101/11111101.png",
			},
			{
				name: "11111011",
				img: "images/BAD/11111011/11111011.png",
			},
			{
				name: "11110111",
				img: "images/BAD/11110111/11110111.png",
			},
			{
				name: "11101111",
				img: "images/BAD/11101111/11101111.png",
			},
			{
				name: "11011111",
				img: "images/BAD/11011111/11011111.png",
			},
			{
				name: "10111111",
				img: "images/BAD/10111111/10111111.png",
			},
			{
				name: "01111111",
				img: "images/BAD/01111111/01111111.png",
			},
		],
	];
	
	var running = false;
	var score = 0;
	const resultDisplay = document.querySelector('#result')

	// Card board
	//
	const Xcard = document.querySelector(".X");
	const Acard = document.querySelector(".A");
	const Bcard = document.querySelector(".B");
	
	// Initialise card variables
		var cardX = document.createElement("img");
		var cardA = document.createElement("img");
		var cardB = document.createElement("img");

	// Start button
	const start = document.querySelector(".start");
	var startB = document.createElement("img");
	
	function createboard() {

		// Set all cards to blank image
		cardX.setAttribute("src", "./images/blank.png");
		cardA.setAttribute("src", "./images/blank.png");
		cardB.setAttribute("src", "./images/blank.png");

		// Append all cards to document
		Xcard.appendChild(cardX);
		Acard.appendChild(cardA);
		Bcard.appendChild(cardB);

		// Set image to start button
		startB.setAttribute("src", "./images/start.png");
		startB.addEventListener("click", runGame);
		start.appendChild(startB);
	}

	function runGame() {

		// Setting Card variables
		randomizer();

		flipcard(cardX);
		setTimeout(flipcard, 4000, cardA);
		setTimeout(flipcard, 4000, cardB);

		setTimeout(allowCard, 7000);
	}

	function allowCard() {

		cardA.addEventListener("click", check);
		cardB.addEventListener("click", check);
	}

	function removeCard() {

		cardA.removeEventListener("click", check);
		cardB.removeEventListener("click", check);
	}

	function check() {
		var cardSide = this.getAttribute("side");
		var cardId = this.getAttribute("id");
		var XSide = cardX.getAttribute("side");
		var XId = cardX.getAttribute("id");

		if ((cardSide === XSide) && (cardId === XId)) {
			score++;
			alert("Match!");
			resultDisplay.textContent = score;
		} else {
			alert("Try again!");
		}

		removeCard();
	}

	function randomizer() {
        
        var sideX = Math.floor(Math.random() * 2);
        var idX = Math.floor(Math.random() * 3);

        // Set ID and side attributes for cards
        cardX.setAttribute("side", sideX);
        cardX.setAttribute("id", idX);

        cardA.setAttribute("side", 0);
        cardB.setAttribute("side", 1);

        if (sideX === 0) {
            cardA.setAttribute("id", idX);
            cardB.setAttribute("id", Math.floor(Math.random() * 3));
        } else {
            cardA.setAttribute("id", Math.floor(Math.random() * 3));
            cardB.setAttribute("id", idX);
        }
	}

	function flipcard(card) {
		console.log(card);
		flipup(card);
		setTimeout(flipdown, 3000, card);
	}

	function flipup(card) {
		var cardSide = card.getAttribute("side");
	    var cardId = card.getAttribute("id");
		card.setAttribute("src", cards[cardSide][cardId].img);
	}

	function flipdown(card) {
		card.setAttribute("src", "./images/blank.png");
	}

	createboard();
});
