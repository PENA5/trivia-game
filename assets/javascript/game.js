$(document).ready(function(){
  
    var currentQ;
    var correctAnswer;
    var wrongAnswer;
    var unanswered;
    
    var answered;
    
    var seconds;
    var time;

    var userChoice;

    var text = {
        correct: "You are correct!!",
        incorrect: "ooohh, sorry worng answer.",
        noTime: "Out of time",
        done: "Let see how you did",

    };

    var triviaQuestions = [

        {
            question: "In the comics, What character is in love with the embodiment of Death?",
            choices:["Wolverine", "Loki", "Red Skull", "Thanos"],
            correct: 3,
            image: "assets/images/thanos.gif",

        },

        {
            question: "What character is love with Pepper Potts?",
            choices: ["Thor", "Hulk", "Ironman","Cyclops"],
            correct: 2,
            image: "assets/images/pepper.gif",

        },

        {
            question: "What character is known for being skilled with a shield?",
            choices: ["Deadpool", "Captain America", "Antman", "Nick Fury"],
            correct: 1,
            image: "assets/images/capAmerica.gif",
        },

        {
            question: "What character is king of an advanced civilization located in Africa?",
            choices: ["Black Panther", "Hulk", "The Black Bolt", "Magnito"],
            correct: 0,
            image: "assets/images/panther.gif",

        },

        {
            question: "What character was cloned from Wolverine's DNA and created to be a lethal weapon?",
            choices:["Lady Death Strike", "X-23", "Blade", "Deadpool"],
            correct: 1,
            image: "assets/images/x23.gif",
        },

        {
            question: "In the comics, who is given the power of Thor when he is no longer worthy?",
            choices: ["Jane Foster", "Lady Sif", "Loki", "Captian America" ],
            correct: 0,
            image: "assets/images/thor.gif",

        },

        {
            question: "What character has the power to destroy a whole city by simply yelling?",
            choices: ["Black Bolt", "Hulk", "Thor", "Banshee"],
            correct: 0,
            image: "assets/images/blackbolt.gif",
        
        },

        {
            question: "Who is the former President Obama's favorite superhero?",
            choices: ["Thor", "Ironman", "Spiderman", "Captain America"],
            correct: 2,
            image: "assets/images/spiderman.gif",

        },

    ];

    $("#gameArea").hide();

    $("#startBtn").on("click", function(){
        $("#startGame").hide();
        newGame();

    });

    $("#startOverBtn").on("click", function(){
        $("#results").hide();
        newGame();
    });



    function newGame() {
        $("#gameArea").show();
        $("#answers").hide();
        $("#results").hide();
        correctAnswer = 0;
        wrongAnswer = 0;
        unanswered = 0;
        currentQ = 0;
        questions();

    }


    function questions(){
        $("#answers").hide();
        $("#Qs").show();
        answered = true;

        $(".question").html(triviaQuestions[currentQ].question);



        for (var i = 0; i <= 4; i++) {
            var list = $("<div>");
            list.text(triviaQuestions[currentQ].choices[i]);
            list.attr({"data-index": i });
            list.addClass("thisChoice");
            $(".choices").append(list);
        }

        countdown();

        $(".thisChoice").on("click",function(){
            userChoice = $(this).data("index");
            clearInterval(time);
            showAnswer();
        });

    }


    function countdown() {
        seconds = 15;
        $("#time").html("00:" + seconds);
        answered = true;

        time = setInterval(countDownShow, 1000);

    }


    function countDownShow(){
        seconds --;
        if(seconds < 5) {
            $("#time").html("00:0" + seconds);
            $("#time").css({"color": "red"});
        } else {
            $("#time").html("00:0" + seconds);
            $("#time").css({"color" : "#def"});
        }

        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            showAnswer();
        }

    }


    function showAnswer() {
        $("#Qs").hide();
        $("#results").hide();
        $("#answers").show();
        $(".thischoice").empty();

        var rightAnswerText = triviaQuestions[currentQ].choices[triviaQuestions[currentQ].correct];
        var rightAnswerIndex = triviaQuestions[currentQ].correct;
        console.log(rightAnswerText);
        console.log(rightAnswerIndex);

        var gifLink = triviaQuestions[currentQ].image;
        var Giffy = $("<img>");
        Giffy.attr("Src", gifLink);
        Giffy.addClass("gifImg");
        $("#gif").html(Giffy);



        if ((userChoice === rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $("#text").html(text.correct);
            $("#correctAnswer").hide();
        } else if ((userChoice !== rightAnswerIndex) && (answered === true)) {
            wrongAnswer++;
            $("#text").html(text.incorrect);
            $("#correctAnswer").show().html("The correct answer is: " + rightAnswerText);
        } else {
            unanswered++;
            $("#text").html(text.noTime);
            $("#correctAnswer").html("The correct answer was: " + rightAnswerText);
            answered = true;
        }

        if (currentQ === (triviaQuestions.length-1)) {
            setTimeout(results, 10000);
        } else {
            currentQ++;
            setTimeout(questions, 10000);
        }

    }

    function results() {
        $("#answers").hide();
        $("#Qs").hide();
        $("#results").show();
        $("#resultText").html(text.done);
        $("#correctAnswers").html("Correct Answers: " + correctAnswer);
        $("#wrongAnswers").html("Wrong Answers: " + wrongAnswer);
        $("unanswered").html("Didn't Answer: " + unanswered);
        $("#startOverBtn").show();
        $("#startOverBtn").html("RESTART GAME");

    }
   

    

});