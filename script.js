// const daveObject = {
//     name: "Dave",
//     birthYear: 1991,
//     favouriteFood: "Steak",

//     calcAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear;
//     },

//     describeSelf: function () {
//         return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
//     }
// };

// const linaObject = {
//     name: "Lina",
//     birthYear: 1993,
//     favouriteFood: "Tacos",

//     calcAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear;
//     },

//     describeSelf: function () {
//         return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
//     }
// };

// const alecObject = {
//     name: "Alec",
//     birthYear: 1985,
//     favouriteFood: "Falafel",

//     calcAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear;
//     },

//     describeSelf: function () {
//         return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
//     }
// };

// console.log (alecObject.describeSelf());

// console.log (daveObject.describeSelf());

// console.log (linaObject.describeSelf());


//// CHALLENGE 1 REVISIT //////


// function describeSelf(name, birthYear, favouriteFood) {
//     return {
//       name,
//       birthYear,
//       favouriteFood,
  
//       calcAge() {
//         console.log(this);
//         return 2023 - this.birthYear;
//       },
  
//       getSummary() {
//         return `${this.name} is ${this.birthYear} years old. Their favourite food is ${this.favouriteFood}`;
//       }
//     };
//   }
  
//    const nameDave = describeSelf("Dave", 1991, "Steak");
//    const nameLina = describeSelf("Lina", 1993, "Tacos");
//    const nameAlec = describeSelf("Alec", 1985, "Falafel");

//    console.log(nameDave.getSummary());
//    console.log(nameLina.getSummary());
//    console.log(nameAlec.getSummary());

   ///// REVISIT 3 /// 

//    function describeSelf(name, birthYear, favouriteFood) {
//         return `My name is ${name}, ${birthYear}, ${favouriteFood},`;
//    };

//    const nameDave = describeSelf("Dave", 1991, "Steak");
//    const nameLina = describeSelf("Lina", 1993, "Tacos");
//    const nameAlec = describeSelf("Alec", 1985, "Falafel");

//    console.log(nameDave);
//    console.log(nameLina);
//    console.log(nameAlec);
  


///// CHALLENGE TWO - OBJECT AND ARRAYS //////

  const meObject = {
    firstName: "Dave",
    lastName: "Church",
    age: 23,
    job: "Yoga Teacher",
    pets: ["Robbo the dog", "Johnny the cat", "Louis the turtle"],

    getSummary() {
        return `My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old and have ${this.pets.length} pets`;

    },

  };

  console.log(meObject.getSummary());


