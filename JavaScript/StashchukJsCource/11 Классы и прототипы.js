const ttt = 5;
let vote = 100;
class Comment {
    
    constructor(text) {
        this.text = text;
        this.vote = 0;
    }

    upvotes() {
        console.log('-----vote: ', vote);
        console.log('-----this.vote: ', this.vote);
        ++this.vote;
        this.newVote = 3;
    }
}