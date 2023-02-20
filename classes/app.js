class BabyBorn {
    constructor(names, lastNames, birthday) {
        this.names = names;
        this. lastNames = lastNames;
        this. birthDate = birthday;
    }
    babyInfo() {
        return `Hi, I'm ${this.names}`;
    }
}

const alan = new BabyBorn('Alan Gael', 'Rodriguez Frutos', 2017);
const alison = new BabyBorn('Allison Danik', 'Rodriguez Frutos', 2023);
console.log(alan.babyInfo());
console.log(alison.babyInfo());