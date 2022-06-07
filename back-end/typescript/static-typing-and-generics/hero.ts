enum Rank {
    A = 1,
    B, 
    C,
    D,
    F  
}

interface Hero {
    _name:string;
    _power: string;
    _rank: Rank;
    _catchyPhrase?: string;
    arrive(): void;
}

class Hero {
    constructor(name: string, power: string, rank: Rank, catchyPhrase?: string){
        this._name = name;
        this._power = power;
        this._rank = rank;
        this._catchyPhrase = catchyPhrase;
    }
    
    arrive() {
        console.log(`${this._name}: ${this._catchyPhrase}`)
    }
}

const Speedy = new Hero("Speedy", "Fast feet.", Rank.B);

Speedy._catchyPhrase = "You're late, or I'm just too early?"
Speedy.arrive();
