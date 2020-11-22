var readlineSync = require('readline-sync');
var chalk = require('chalk');

var name = readlineSync.question("Whats your name? ");

console.log(`Hi ${name}, Welcome to F.R.I.E.N.D.S Quiz...`);
console.log(`Rules: -1 for Wrong answer and +1 for Right answer.`)

var userScore = 0;
var questionIndex = 0;

var questionBank = [
    {
    question: `Q. To get over Richard, what did Monica start making?

    A - Marmalade
    B - Pancakes
    C - Candy
    D - Jam`,
    answer: "d"
  },
    {
    question: `Q. What was the name of the self help book that the girls loved?

    A - Be Your Own Cleansing Pool
    B - Be Your Own Person
    C - Be Your Own Lightning Bearer
    D - Be Your Own Windkeeper`,
    answer: "b"
  },
    {
    question: `Q. Where was the 'Aroma' room?

    A - Phoebe's dollhouse
    B - Monica's apartment
    C - Monica's dollhouse
    D - Phoebe's apartment`,
    answer: "a"
  },
  {
    question: `Q. Where did Monica and Ross' parents jet off to for Thanksgiving?

    A - Bahamas
    B - Puerto Rico
    C - Caribbean
    D - Riviera`,
    answer: "b"
  },
  {
    question: `Q. What was wrong with the couch Ross returned to the store?

    A - It was cut in half
    B - It was torn
    C - It had a stain
    D - The colour was wrong`,
    answer: "a"
  },
  {
    question: `Q. What was the name of Eddie's ex-girlfriend?

    A - Tina
    B - Tillie
    C - Tara
    D - Tanya`,
    answer: "b"
  }
  
]

var scoreCard = [{
  name: "Sohel",
  score: "3",
},
{
  name: "Rahul",
  score: "2"
}
];

function sortScoreCard(scoreCard){
  var sortedScore = scoreCard.sort(function(a,b){
    return a.score - b.score;
  });
  return sortedScore;
}


function findHighestScore(scoreCard){
   var scoreList = sortScoreCard(scoreCard);

   return scoreList[scoreList.length-1];
}

function finalResult(userScore, scoreCard){
        
      var highestScorer = findHighestScore(scoreCard);

      console.log("Highest Scorer: ");
      console.log(highestScorer.name + " with " + highestScorer.score + " points");
      
      if(userScore > highestScorer.score){

      console.log("You score Highest!!!");

      }
}


function computerJi(currentQuestion, answer){
  
    console.log();
    console.log(currentQuestion.question);
    console.log();
    var userAnswer = readlineSync.question("Select right option. ");

    if(userAnswer === answer ){
      console.log("correct answer: " + answer);
      userScore++;
    }else{
      console.log(chalk.red("Wrong!!!"));
      console.log("correct answer: " + answer);
      userScore--;
    }
}
 


while(true){
    
    if(questionIndex === questionBank.length){

        console.log();

        console.log("Thanks for playing");

        console.log("Your Score: " + userScore);
        
        finalResult(userScore, scoreCard);
        
        process.exit();
    }

    console.log();

    var choice = readlineSync.question("To play press 'y' or to exit press 'n'. ");

    if(choice==='y'){
        
      computerJi(questionBank[questionIndex], questionBank[questionIndex].answer);
        
      questionIndex++;

    }else if( choice === 'n'){

      console.log("Thanks for playing");

      console.log(chalk`Your Score: {red ${userScore}}`);

      finalResult(userScore, scoreCard);

      process.exit();

    }else{
      console.log(chalk.red("Invalid Entry!!!!"));
    }
}


