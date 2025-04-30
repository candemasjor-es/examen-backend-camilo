//el codigo con errores
app.put("/users", (res, req) => {
  const userId = req.params.id;
  const sql = `DELETE FROM users WHERE id=${userID}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(`User ${userId} deleted from the db.`);
  });
});

//el codigo corregido
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sql = `DELETE FROM users WHERE id=${userId}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }
    if (result.affectedRows === 1) {
      return res.status(200).send("User deleted successfully");
    }
    res.send(`User ${userId} deleted from the db.`);
  });
});
