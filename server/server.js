const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

//create server and port
const app = express();
const PORT = process.env.PORT || 8080;

//set up body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//public asset access
app.use(express.static("public"));

app.use(apiRoutes);

// app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
