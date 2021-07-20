class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("orange")
    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(20);
    text("Let's see the results",250,0);
    //call getContestantInfo( ) here
    contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("turquoise");
      textSize(10);
      text("*Correct answers are higlighted in green & wrong answers in red*");}
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "3";
      if(correctAns === allContestants[plr].answer)
      fill("Green");
      else
      fill("red");
    }
    }
  }

