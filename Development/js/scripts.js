// السؤال الأول
const name = "حسين";

let age = 17;

console.log("أنا " + name + " " + "و عمري " + age);

let agetimes5 = age * 5;

console.log(agetimes5);

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني

let hobbies = ["العزف", "الرسم", "النوم "];

hobbies.push(age);
hobbies[4] = age;

console.log(hobbies);
console.log(hobbies.length);

hobbies.pop();
console.log(hobbies);

let stuff = {
  course: "web",
  FavoriteSyntax: "CSS",
};

stuff["mentors"] = ["نانسي", "موضي", "مناور"];

console.log(stuff.course);
console.log(stuff["mentors"][0]);

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
stuff["ILS"] = sentence();
function sentence() {
  sentence = "I love sleeping";
  return console.log(sentence);
}
console.log(stuff["ILS"]); // stuff["ILS"]()

// console results => console.png
