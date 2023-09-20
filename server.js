const express = require("express");
const home = require("./routes/home");
const app = express();

app.use(express.json()); // for parsing application/json

app.use("/home", home);


const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`listening on port ${port}`));