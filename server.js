require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./app/routes/authRoutes"));
app.use("/api/customers", require("./app/routes/customerRoutes"));
app.use("/api/cases", require("./app/routes/caseRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);