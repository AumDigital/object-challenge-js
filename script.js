const daveObject = {
    name: "Dave",
    birthYear: 1991,
    favouriteFood: "Steak",

    calcAge: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

    describeSelf: function () {
        return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
    }
};

const linaObject = {
    name: "Lina",
    birthYear: 1993,
    favouriteFood: "Tacos",

    calcAge: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

    describeSelf: function () {
        return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
    }
};

const alecObject = {
    name: "Alec",
    birthYear: 1985,
    favouriteFood: "Falafel",

    calcAge: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

    describeSelf: function () {
        return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
    }
};

console.log (alecObject.describeSelf());

console.log (daveObject.describeSelf());

console.log (linaObject.describeSelf());