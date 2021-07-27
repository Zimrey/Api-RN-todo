const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./src/router/index");

app.use(express.json());
app.use(cors());

const db = require("./models");

app.use("/api/v1", router);
app.use("/", (req, res) => {
    res.send("deploy by Sukma Aspriliyawan");
});

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
});
