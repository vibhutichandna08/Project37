var canvas;
var gameState = 0; 
var contestant;
var ContestantCount;
var database;
var quiz , question;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(ContestantCount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
}
