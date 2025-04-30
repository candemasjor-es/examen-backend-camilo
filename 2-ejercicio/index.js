const express = require("express");
const cors = require("cors");
const post = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const minmax = [
  {
    number: 7,
    min: 7,
    max: 7,
  },
  {
    number: 2,
    min: 2,
    max: 7,
  },
  {
    number: 9,
    min: 3,
    max: 7,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/minmax", (req, res) => {
  minmax.push({
    number: req.body.number,
    min: req.body.min,
    max: req.body.max,
  });
  res.sendStatus(201);
});

app.listen(post, () => {
  console.log(`Example app listening on port ${post}`);
});
