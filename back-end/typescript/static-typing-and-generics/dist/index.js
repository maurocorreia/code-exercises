"use strict";
var Rank;
(function (Rank) {
    Rank[Rank["A"] = 1] = "A";
    Rank[Rank["B"] = 2] = "B";
    Rank[Rank["C"] = 3] = "C";
    Rank[Rank["D"] = 4] = "D";
    Rank[Rank["F"] = 5] = "F";
})(Rank || (Rank = {}));
class Hero {
    constructor(name, power, rank, catchyPhrase) {
        this._name = name;
        this._power = power;
        this._rank = rank;
        this._catchyPhrase = catchyPhrase;
    }
    arrive() {
        console.log(`${this._name}: ${this._catchyPhrase}`);
    }
}
const Speedy = new Hero("Speedy", "Fast feet", Rank.B);
Speedy._catchyPhrase = "You're late, or I'm ahead?";
Speedy.arrive();
console.log(Speedy);
