const express = require("express");
const cors = require("cors");

const post = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const comida = [
  {
    nombra: "pizza",
  },
  {
    nombre: "hamburguesa",
  },
  {
    nombre: "pollo",
  },
];

app.get("/comidas", (req, res) => {
  const comidas = res.json(comida);
  fetch(comidas)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});
app.listen(post, () => {
  console.log("Example app listening on port http://localhost:" + post);
});
