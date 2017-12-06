
$(document).ready(function(){
	$(".endGame").hide();
	$("#submitResult").hide();


var	questions= [
	{question:"What year did Marty time travel back to?",
	answers:["1775", "1955", "1855", "1975"],
	correctAnswer: "1955"},

	{question:"What is scientist name?",
	answers:["Doc Martin ", "Dr. Pepper ", "Dr. Jekyll ", "Doc Brown"],
	correctAnswer: "Doc Brown"},

	{question:"What kind of car is the time machine?",
	answers: ["Honda", "Chevrolet", "Delorian", "Ford"],
	correctAnswer: "Delorian"},

	{question: "What does Marty give his friend to warn him of the future?",
	answers:["nothing", "video recorder", "cd player", "a letter"],
	correctAnswer: "a letter"},

	{question: "What does he use to get away from Biff?",
	answers: ["car", "skateboard", "runs", "hides"],
	correctAnswer: "skateboard"} 
];	


var correctAnswers = 0;
var incorrectAnswers =0;
var timer ;



// start 

var startGame = {

	viewQuestions: function() {
		for (var i=0; i < questions.length; i++) {
			var question = $("<div id='q"+ i + "' class='spacing'>");
			question.html(questions[i].question);
			question.attr("questions-id", i);
			$('#question').append(question);

			for (ctr = 0; ctr < questions[i].answers.length; ctr++) {
    		var answers = questions[i].answers[ctr];
    		
    		$('#question').append('<input type="radio" name="question' + '-' + i + '" value="'+ questions[i].answers[ctr] + '"> '+ questions[i].answers[ctr] );
       		}; 
    	};  
	}, 	


	checkAnswers: function () {
		for (var i=0; i < questions.length; i++) {
			var userAnswers = $("input[name='question-" + i +"']:checked");
			if (userAnswers.val() == questions[i].correctAnswer) {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		} 
			startGame.results();
	}, 


	results: function(){
		clearInterval(timer);	
		$("#question").hide();
		$("#submitResult").hide();
		$("#startClock").hide();
		$(".timeLeft").hide();
		$(".endGame").show();
		$('#correctGuesses').append(correctAnswers);
	
    
	}, // reset



	startTimer: function(){
	  var counter = 88;
	  timer= setInterval(function() {
	    counter--;
	    if (counter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = counter;
	    }
	    if (counter === 0) {
	        alert('Time is Up');
	        startGame.results();
	        clearInterval(timer);

	    }
	  }, 1000);
	},  

}; 

$("#endClock").click(function(){
    window.location.reload();
});


$("#startClock").click(function(){
    startGame.startTimer();
    startGame.viewQuestions();
    $("#startClock").hide();
    $("#submitResult").show();
 });

$("#submitResult").click(function(){
    startGame.checkAnswers();


 });


});	





