class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");
    this.input2 = createInput("Correct Option No.");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("💡🤔 Thinking Area 🤔💡");
    this.title.position(250, 0);

    this.question.html("Poor people have it, Rich people need it,If you will eat it than you will die. What is it ? " );
    this.question.position(100, 100);
    this.option1.html("1: Luxury " );
    this.option1.position(250, 150);
    this.option2.html("2: Brain" );
    this.option2.position(500, 150);
    this.option3.html("3: Nothing " );
    this.option3.position(250, 200);
    this.option4.html("4: Kindness" );
    this.option4.position(500, 200);

    this.input1.position(200, 300);
    this.input2.position(500, 300);
    this.button.position(400, 350);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}