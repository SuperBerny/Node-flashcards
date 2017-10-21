var inquirer = require('inquirer');
// var flashcards = require('./flashcards.js');
var questions = require('./questions.js');

var firstQuestion = questions[0];
var answerQuestion = questions[0].question
var flipChoice = 'Flip the card';

inquirer.prompt([
	{
		type: 'list',
		name: 'choice',
		message: "What Do You Want To Do?",
		choices: [answerQuestion, flipChoice]
	}
	]).then(function(answer) {
	// {choice: 'Answer the question'}
	console.log(answer.choice);
	if (answer.choice === flipChoice) {
		// inquirer.prompt([
		// 	{
		// 		type: 'list',
		// 		name: 'choice'
		// 	}
		// ])
	} else if (answer.choice === answerQuestion) {
		console.log(answerQuestion);
	}
	})
