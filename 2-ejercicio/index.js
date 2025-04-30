const express = require("express");
const cors = require("cors");
const post = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const numbers = [];

app.post("/minmax", (req, res) => {
  const { number } = req.body;
  numbers.push(number);

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  res.status(201).json({ min, max });
});

app.listen(post, () => {
  console.log(`Example app listening on port ${post}`);
});
