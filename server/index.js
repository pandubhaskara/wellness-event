const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/index')

// app.use("/", (req, res) => {
//   res.status(200).send({
//     status: "success",
//     message: "api is online",
//   });
// });
app.use("/api/v1", router)
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
