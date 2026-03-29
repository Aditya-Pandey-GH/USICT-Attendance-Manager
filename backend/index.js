const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

// Express Routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Express Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port: http://localhost:${PORT}`);
});
