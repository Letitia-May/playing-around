let log = document.getElementById('log');
let outcome = document.getElementById('outcome');
let input = document.getElementById('inputText');

let successfulGif = document.getElementById('successfulGif');
let othersuccessfulGif = document.getElementById('otherSuccessfulGif');
let incorrectGif = document.getElementById('incorrectGif');

let correctSentence = 'Nathan is a champ';
let otherCorrectSentence = 'Chloe is a champ';

const inputChange = () => {
	clearGifs();

	if (input.value == '') {
		log.textContent = 'Enter something, you big jabroni!';
		outcome.textContent = '';
	} else {
		log.textContent = `You entered: "${input.value}"`;
		
		updateOutcome();
	}	
}

const clearGifs = () => {
	successfulGif.style.display = 'none';
	othersuccessfulGif.style.display = 'none';
	incorrectGif.style.display = 'none';
}

const updateOutcome = () => {
	if(input.value == correctSentence) {
		outcome.textContent = 'Woohoo, that is correct!';
		successfulGif.style.display = 'block';
	} else if (input.value == otherCorrectSentence) {
		outcome.textContent = 'Awww, yeah she is!';
		othersuccessfulGif.style.display = 'block';
	} else {
		outcome.textContent = 'Nah boi, try again';
		incorrectGif.style.display = 'block';
	}
}

document.getElementById('submit').onclick = inputChange;