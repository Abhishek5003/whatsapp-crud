const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("conncetion sucessfull");
    // console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// //insert One
// const User1 = new User({
//   name: "Abhi",
//   email: "shek@gmail.com",
//   age: 19,
// });

// User1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //insertion of multiple users at a time
// User.insertMany([
//   {
//     name: "Ravi",
//     email: "ravi@gmail.com",
//     age: 19,
//   },
//   {
//     name: "Peter",
//     email: "peter@gmail.com",
//     age: 20,
//   },
//   {
//     name: "Hulk",
//     email: "hulk@gmail.com",
//     age: 19,
//   },
// ]).then((res) => {
//   console.log(res);
// });

// //insertion of One
User.insertOne({
  name: "krishna",
  email: "krishna@gmail.com",
  age: 5,
}).then((res) => {
  console.log(res);
});

// //finding a user on some conditions
// User.find({ age: { $lt: 50 } }).then((res) => {
//   console.log(res[0].name);
// });
// //similarly find many works

// //updating only with no updation result just gettig some meta data of updation
// User.updateMany({ age: 50 }, { email: "abhi@gmail.com" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updating and getting updated document
// User.findOneAndUpdate(
//   { age: 50 },
//   { email: "abhi@gmail.com" },
//   { returnDocument: "after" },
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndUpdate(
  "6a3de2514ad620b0b8b0676f",
  { age: 6 },
  { returnDocument: "after" },
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// //deleting one and many
// User.deleteOne({ name: "Abhishek" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $gt: 19 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("6a3de2514ad620b0b8b0676f",{condition})
// User.findOneAndDelete({condition})
