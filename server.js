const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
  const userAgent = req.get("user-agent");
  const ipaddress = req.ip;
  const language = req.get("accept-language");
  res.send({
    ipaddress,
    language,
    software: userAgent
  });
});

app.listen(3000, () => {
  console.log("Server listening in port 3000");
});
