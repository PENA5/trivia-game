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

    }

    var triviaQuestions = [

        {
            question: "In the comics, What character is in love with the embodiment of Death?",
            choices:["Wolverine", "Loki", "Red Skull", "Thanos"],
            correct: 1,
            Image: "assets/images/thanos.gif",

        },

        {
            question: "What character is love with Pepper Potts?",
            choices: ["Thor", "Hulk", "Ironman","Cyclops"],
            correct: 2,
            Image: "assets/images/pepper.gif",

        },

        {
            question: "What character is known for being skilled with a shield?",
            choices: ["Deadpool", "Captain America", "Antman", "Nick Fury"],
            correct: 0,
            Image: "assets/images/capAmerica.gif",
        },

        {
            question: "What character is king of an advanced civilization located in Africa?",
            choices: ["Black Panther", "Hulk", "The Black Bolt", "Magnito"],
            correct: 2,
            Image: "assets/images/panther.gif",

        },

        {
            question: "What character was cloned from Wolverine's DNA and created to be a lethal weapon?",
            choices:["Lady Death Strike", "X-23", "Blade", "Deadpool"],
            correct: 4,
            Image: "assets/images/x23.gif",
        },

        {
            question: "In the comics, who is given the power of Thor when he is no longer worthy?",
            choices: ["Jane Foster", "Lady Sif", "Loki", "Captian America" ],
            correct: 0,
            Image: "assets/images/thor.gif",

        },

        {
            question: "What character has the power to destroy a whole city by simply yelling?",
            choices: ["Black Bolt", "Hulk", "Thor", "Banshee"],
            correct: 1,
            Image: "assets/images/blackbolt.gif",
        
        },

        {
            question: "What Character has appeared in live action movies the most?",
            choices: ["Deadpool", "Wolverine", "Spiderman", "Captain America"],
            correct: 0,
            Image: "assets/images/spiderman.gif",

        },


    ];




   

    

}