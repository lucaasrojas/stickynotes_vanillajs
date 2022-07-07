let myLaptop = new Object();

myLaptop.brand = "Dell";
myLaptop.cores = "8";
myLaptop.storage = "1TB";

console.log(
  `My Laptop info: ${myLaptop.brand}, ${myLaptop.cores} cores and ${myLaptop.storage} of storage`
);

// Object.create()

const occupation = {
  type: "none",
  displayType: function () {
    console.log(this.type);
  },
};

let police = Object.create(occupation);
police.type = "police";
police.displayType();

// Object assign

// - Cloning
let student = {
  name: "Tharun",
  age: 21,
};

let tutor = {};

tutor = Object.assign({}, student);
console.log("TUTOR", tutor);

// - Appending
let skills = {
  languages: "Python, JS",
  experience: 3,
};

const newStudent = Object.assign({}, student, skills);
console.log("New Studen", newStudent);

// - Merging
let hobbies = {
  hobby1: "book reading",
};
let mergedStudent = {};
Object.assign(mergedStudent, student, skills, hobbies);
