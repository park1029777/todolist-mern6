const express = require("express");

const mongoose = require("mongoose");

const todoRoutes = require("./routes/todolist");
const app = express();

const port = 3010;

mongoose
  .connect(
    "mongodb+srv://admin:p@ssw0rd@cluster0.axtok.mongodb.net/todolist?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected mongoDB"))
  .then(error => {
    console.error(error);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express!!");
});
app.use("/todo", todoRoutes);

app.listen(port, () => console.log(`server listen port ...${port}`));
