class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `HI. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}.`
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let gretting = super.getGreeting();
        return this.homeLocation ? gretting + ` I'm visiting from Tooele.`:gretting;
    }
}


const me = new Traveler('Lucas Handley', 19, 'Tooele');
console.log(me.getGreeting());