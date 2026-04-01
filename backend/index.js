const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: [process.env.FRONTEND_URL, "http://localhost:5500"],
		credentials: true,
	}),
);

// MongoDB Connection
mongoose
	.connect(process.env.MONGO_URI + "/" + process.env.MONGO_DB_NAME)
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log(err);
	});

// Express Routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Express Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port: http://localhost:${PORT}`);
});
