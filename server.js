const express = require("express");

const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.send("The worldliest of hello's!");
});

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`listening on port ${port}`));