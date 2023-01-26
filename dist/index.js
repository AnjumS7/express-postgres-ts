import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = parseInt(process.env.PORT || "4000", 10);
app.get('/', (req, res) => {
    res.send('<h2>THis is my typecript api</h2>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
