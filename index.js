import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("Working!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});