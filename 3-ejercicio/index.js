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
app.put("/users", (res, req) => {
  const userId = req.params.id;
  const sql = "DELETE FROM users WHERE id=${userId}";
  db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(`User ${userId} deleted from the db.`);
  });
});
