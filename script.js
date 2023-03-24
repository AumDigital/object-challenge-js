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

  // const meObject = {
  //   firstName: "Dave",
  //   lastName: "Church",
  //   age: 23,
  //   job: "Yoga Teacher",
  //   pets: ["Robbo the dog"], /* "Johnny the cat", "Louis the turtle"],*/

  //   logSelf() {
  //       const numPets = this.pets.length;
  //       const petsText = numPets === 1 ? "pet" : "pets";
  //       console.log(`My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old and have ${numPets} ${petsText}`);

  //   },

  // };

  // meObject.logSelf();

  ///// CHALLENGE TIP CALCULATOR /////


  // function calculateTip(bill) {
  //   const tipPercentage = bill >= 50 && bill <= 300 ? 0.1 : 0.15;
  //   const tipAmount = bill * tipPercentage;
  //   const totalAmount = bill + tipAmount;
  //   return bill < 50 ? "No tip necessary" : `The total amount of the bill is ${bill}. The tip % is therefore ${tipPercentage * 100}% and the total amount to pay including tip is ${totalAmount}.`;
  // }
  
  // console.log(calculateTip(265));
  // console.log(calculateTip(80));
  // console.log(calculateTip(560));
  // console.log(calculateTip(30));
  

function calculateTip (bill) {
  let tipPercentage;
  if (bill >= 50 && bill <= 300) {
    tipPercentage = 10;
  } else {
    tipPercentage = 15;
  }
  const tipAmount = bill * (tipPercentage / 100);
  const totalAmount = bill + tipAmount;
  return bill < 50 ? `No tip necessary` : `The total amount of the bill is ${bill}. The tip % is therefore ${tipPercentage} and the total amount to pay including tip is ${totalAmount}.`;
}

console.log(calculateTip(265));
console.log(calculateTip(80)); 
console.log(calculateTip(560));
console.log(calculateTip(40));