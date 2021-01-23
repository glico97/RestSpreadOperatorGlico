// same Keys and values
function createInstructor(firstName, lastName) {
    return {
        firstname, 
        lastName
    }
}
// computed property names
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite!"
}

// object methods

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "HI";
    },
    sayBye() {
        return this.firstName + " says Bye";
    }

}
 // crateAnimal Function

 function createAnimal(spceies, verb, noise) {
     return {
         species,
         [verb]() {
             return noise;
         }
     }
 }