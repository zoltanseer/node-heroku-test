const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleted user with id: ${id}`);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
