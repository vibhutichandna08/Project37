class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var ContestantCountRef = database.ref('contestantCount');
      ContestantCountRef.on("value",function(data){
        ContestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ContestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer : this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = databse.ref('players');
      contestantInfoRef.on("value", function(data){
        allContestants = data.val();
      })
    }
  }