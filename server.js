const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node.js CI/CD Pipeline Running 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
