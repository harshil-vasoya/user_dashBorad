require("dotenv").config({ path: "./.env" });

const express = require("express");
const User = require("./models/user");
const userRoutes = require("./routes/user");
const teamRoutes = require("./routes/team");

require("./config/database").connect();

const cors = require("cors");

// import data from "./userData.json" assert { type: "json" };

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/team", teamRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



