//basic card constructor
//takes two arguments - front and back
var basicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

//close card constructor
//takes two arguments - text and cloze
var clozeCard = function(text, cloze) {
    var textToLower = text.toLowerCase();
    var clozeToLower = cloze.toLowerCase();

    //confirm if cloze statement appears whithin complete text
    if (!textToLower.includes(clozeToLower)) {
        console.log("ERROR: cloze deletion does not appear within full text -- <" + cloze + ">");
        return;
    }

    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
};

module.exports = {
    test: "working",
    basicCard: basicCard,
    clozeCard = clozeCard
};