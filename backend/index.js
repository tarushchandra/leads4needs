const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");

mongoose
  .connect(
    "mongodb+srv://tarush:tarush@cluster0.oex7uzx.mongodb.net/NotesDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/notes", notesRoutes);

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
