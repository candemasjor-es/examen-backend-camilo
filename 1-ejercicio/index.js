const express = require("express");
const cors = require("cors");

const post = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const comidas = [
  {
    nombre: "pizza",
  },
  {
    nombre: "hamburguesa",
  },
  {
    nombre: "pollo",
  },
];

app.get("/comidas", (req, res) => {
  const comidaAleatoria = comidas[Math.floor(Math.random() * comidas.length)];
  res.json({ comida: comidaAleatoria.nombre });
});

app.listen(post, () => {
  console.log("Example app listening on port http://localhost:" + post);
});
