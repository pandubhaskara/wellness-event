const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "api is online",
  });
});

app.listen(port, () => {
    console.log(`server started at port ${port}`);
  });
