class Question {
    constructor() {
        this.button = createButton('Submit');
        this.input1 = createInput("Enter your name here...");
        this.input2 = createInput("Enter the right option no.");
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.title = createElement('h2');
    }

    hide() {
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
    }

    display() {
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What starts and ends with the letter 'E' , but has only one letter ?");
        this.question.position(150, 80);

        this.option1.html("1: Everyone");
        this.option1.position(150, 100);

        this.option2.html("2: Envelope ");
        this.option2.position(150, 120);

        this.option3.html("3: Estimate ");
        this.option3.position(150, 140);

        this.option4.html("4: Example ");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(500, 230);

        this.button.position(375, 290);

        this.button.mousePressed(() => {
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            ContestantCount += 1;
            contestant.index = ContestantCount;
            contestant.update();
            contestant.updateCount(ContestantCount);

        });
    }

}