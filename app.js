function hello(nameOfPerson, age) {
  console.log("hello my name is " + nameOfPerson);
  console.log("my age is " + age);
}

hello("lee", 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName);
  },
};

console.log(player.name);
player.sayHello("lynn");
