
const user = {
  name: "Sanjay",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
const anotherUser = { name: "nanban" };
user.greet.apply(anotherUser);
const boundGreet = user.greet.bind(anotherUser);
boundGreet();
