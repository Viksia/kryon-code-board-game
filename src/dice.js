window.addEventListener(
	"DOMContentLoaded",
	function () {
		const buttonRoolDice = document.querySelector(".dice-roll");

		function rollDice() {
			const diceSide1 = document.getElementById("dice-side");

			const status = document.getElementById("status");

			const side1 = Math.floor(Math.random() * 6) + 1;

			const diceTotal = side1;

			diceSide1.innerHTML = side1;

			status.innerHTML = "You rolled " + diceTotal + ".";
		}

		buttonRoolDice.addEventListener("click", rollDice, false);
	},
	false,
);
