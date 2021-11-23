require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const authRoutes = require("./routes/auth.route");
const questionRoutes = require("./routes/question.route");
const tagRoutes = require("./routes/tag.route");
const answerRoutes = require("./routes/answer.route");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api", authRoutes);
app.use("/api", questionRoutes);
app.use("/api", tagRoutes);
app.use("/api", answerRoutes);

const port = normalizePort(process.env.PORT || 8000);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("ERROR IN DATABASE CONNECTION");
    console.log(err);
  });
