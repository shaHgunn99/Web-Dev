//object --> group of key value pair
//key : value ->property
//key : function -> method
let cap = {
    name: "Steve",
    lastname: "Rogers",
    addres: {
        city: "Manatten",
        state: "New York"
    }
    , age: 35,
    isAvenger: true,
    movies: ["first avenger", "winter soldier", "civil war"],
    sayhii: function () {
        console.log("cap say hii");
    }
};
//to excess property name
console.log(cap.name);
console.log(cap.isAvenger);
console.log(cap.age);
console.log(cap.movies[1]);//give element at index 1 of array movies
cap.sayhii();
//Set/Update in given object
cap.age = 36;//now  the age is update to 36
cap.isAvenger = false;//now  the isavengers is update to false
cap.friends = ["Tony", "bucky", "peter"];//friends
//deleat
delete cap.addres;//to deleat an data
//console.log(cap.addres);-->now it will give output as undefined
//to ascess cap
//code
console.log("................");
for (let key in cap) {
    console.log(key, ":", cap[key]);
}
console.log(".................");
//goes to value of cap in give variable
let propkey = "age";//in given below program it finds te age of cap in cap object
console.log(cap[propkey]);
console.log(cap["age"]);//we can write like given below also