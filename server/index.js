const express = require("express");
const port = 3003;
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("API IS RUNNING ON PORT 3003");
});

app.get("/name", (req, res) => {
  res.json({
    name: "Ahmed",
  });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
