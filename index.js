const express = require("express");
const path = require("path");
const { faker } = require("@faker-js/faker");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const { name } = require("ejs");
const { log } = require("console");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("conncetion sucessfull");
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "Abhi",
//   to: "Abhishek",
//   msg: "send me some works to do",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//all Posts
app.get("/", async (req, res) => {
  let talks = await Chat.find();
  res.render("Home.ejs", { talks });
});

//new Post making
app.get("/newPost", (req, res) => {
  res.render("newPost.ejs");
});

app.post("/newPost", (req, res) => {
  let { from, to, msg } = req.body;
  console.log(from, to, msg);
  Chat.insertOne({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  }).then((res) => {
    console.log(res);
  });
  res.redirect("/");
});

//edit the Post
app.get("/edit/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  res.render("edit.ejs", { id });
});

app.post("/edit/:id", async (req, res) => {
  let { msg } = req.body;
  let { id } = req.params;
  console.log(msg, id);
  await Chat.findByIdAndUpdate(id, { $set: { msg: msg } });
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await Chat.findByIdAndDelete(id);
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("server working well...................");
});
