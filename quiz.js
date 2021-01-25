class Quiz {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var ContestantCountRef = await database.ref('ContestantCount').once("value");

            if(ContestantCountRef.exists()){
                ContestantCount = ContestantCountRef.val();
                contestant.getCount();
            }

            question = new Question();
            question.display();
        }
    }
}