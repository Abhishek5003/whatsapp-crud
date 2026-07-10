const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("conncetion sucessfull");
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Abhi",
    to: "Abhishek",
    msg: "send me some works to do",
    created_at: new Date(),
  },
  {
    from: "Abhishek",
    to: "Abhi",
    msg: "ok i will do for you",
    created_at: new Date(),
  },
  {
    from: "Abhi",
    to: "Aman",
    msg: "pagal hai kay re tu",
    created_at: new Date(),
  },
  {
    from: "Aman",
    to: "Abhi",
    msg: "dekho to bol kon raha h",
    created_at: new Date(),
  },
  {
    from: "Terma",
    to: "Abhi",
    msg: "kal aajana hati p thik h",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
